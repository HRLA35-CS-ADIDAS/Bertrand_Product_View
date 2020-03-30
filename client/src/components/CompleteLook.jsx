import React, { Component } from 'react';
import ReactModal from 'react-modal';

const customStyles = {
    content: {
        top: '25%',
        left: '25%',
        right: '25%',
        bottom: '37%',
        padding: '30px',
        overflow: 'hidden'
    }
};

class CompleteLook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            dropDown: false,
            selectedItem: null,
            showSize: false,
            selectedSize: null
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.handleSize = this.handleSize.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.selectSize = this.selectSize.bind(this);
    }

    openModal(e) {
        e.preventDefault()
        this.setState({ showModal: true });
    }

    closeModal(e) {
        e.preventDefault()
        this.setState({ showModal: false });
    }

    handleDrop() {
        this.setState({ dropDown: true })
    }

    selectItem(item) {
        this.setState({ selectedItem: item })
    }

    handleSize(e) {
        e.preventDefault()
        this.setState({
            showSize: !this.state.showSize
        })
    }

    selectSize(size) {
        this.setState({
            selectedSize: size,
            showSize: false
        })
    }

    render() {
        return (
            <div className="complete-div">
                <h4 className="complete-heading">
                    complete the look
            </h4>
                <div className="complete-items">
                    <div className="complete-items-list">
                        {this.props.matching_items.map((item) => {
                            return (
                                <div onClick={this.handleDrop} className="complete-container">
                                    <div className="complete-product">
                                        <img src={item.image} onClick={() => { this.selectItem(item) }} className="complete-image" />
                                    </div>
                                    <div className="complete-price-container">
                                        <div className="complete-price">
                                            ${item.price}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {(this.state.dropDown) ? (<div className="completeDrop">
                        <div className="completeFlex">
                            <div className="image-container-2">
                                <div className="complete-img-2">
                                    <img src={this.state.selectedItem.image} className="fit-img" />
                                </div>
                            </div>
                            <div className="purchase-container">
                                <div className="complete-item-info">
                                    <h5 className="complete-h5">{this.state.selectedItem.name}</h5>
                                    <div></div>
                                    <p>${this.state.selectedItem.price}</p>
                                </div>
                                <div className="complete-item-buttons">

                                    <div className="size-container-complete">

                                    <button onClick={this.handleSize} className="select-size">
                                        <span className="select">
                                            {(this.state.selectedSize === null) ? (<span className="select-inner">SELECT SIZE</span>) : (<span className="select-inner">{this.state.selectedSize}</span>)}

                                        </span>

                                        {this.state.showSize ? (<svg className="open-dropdown" data-di-res-id="3d102a33-51e27117" data-di-rand="1585301057992">
                                            <svg id="dropdown" viewBox="0 0 16 24"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M1.5 9L8 15.5 14.5 9"></path></svg>
                                        </svg>) : (<svg className="gl-icon-gl-custom-dropdown__select-icon" data-di-res-id="3d102a33-51e27117" data-di-rand="1585301057992">
                                            <svg id="dropdown" viewBox="0 0 16 24"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2" d="M1.5 9L8 15.5 14.5 9"></path></svg>
                                        </svg>)}

                                    </button>
                                    {this.state.showSize ? (
                                        <div className="complete-dropdown-options">
                                            <div className="square-list">
                                                <ul className="size-menu">

                                                    {this.state.selectedItem.size.map((size) => {
                                                        return (
                                                            <li className="size-item">
                                                                <div onClick={() => this.selectSize(size)} className="button-item">
                                                                    <b>{size}</b>
                                                                </div>
                                                            </li>
                                                        )
                                                    })}


                                                </ul>
                                                {this.state.pleaseSelect ? (<div className="please">Please select your size</div>) : (null)}

                                            </div>

                                        </div>) : (null)}

                                        </div>

                                    <div className="bag-button">
                                        <span className="before-button"></span>
                                        <span className="bag-text">ADD TO BAG</span>
                                        <svg className="gl-icon-gl-cta__icon" data-di-res-id="6361accf-c33aeebb" data-di-rand="1585359780189">
                                            <svg id="arrow-right-long" viewBox="0 0 24 24"><path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path></svg>
                                        </svg>
                                        <span className="after-button"></span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>) : (null)}
                </div>

            </div>
        )
    }
}

export default CompleteLook;