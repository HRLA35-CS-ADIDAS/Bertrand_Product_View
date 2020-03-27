import React from 'react';
import axios from 'axios';

class Price extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        if (this.props.oldPrice === null) {
            return (
                <div className="price-div">
                    <span className="only-price">${this.props.newPrice}</span>
                </div>
            )
        } else {
            return (
                <div className="price-div">
                    <span className="new-price">${this.props.newPrice}</span>
                    <span className="old-price">${this.props.oldPrice}</span>
                </div>
            )
        }
    }
}

export default Price;