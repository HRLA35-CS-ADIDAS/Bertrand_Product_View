import axios from 'axios';

export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const CHANGE_PRODUCT = 'CHANGE_PRODUCT';

/*
  ========================================
  Fetch data
  ========================================
*/

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchProductsBegin)
    axios.get('/products')
      .then((response) => {
        const data = response.data
        dispatch(fetchProductsSuccess(data))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchProductsFailure(errorMsg))
      });
  }
}

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = data => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { data }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export const changeProduct = (allProducts, target) => ({
  type: CHANGE_PRODUCT,
  payload: { allProducts, target }
});

/*
  ========================================
  Next and previous arrows
  ========================================
*/

export const increaseArrow = (images) => {
  return {
    type: 'INCREASE',
    payload: images
  }
}

export const decreaseArrow = (images) => {
  return {
    type: 'DECREASE',
    payload: images
  }
}

export const setCount = (index) => {
  return {
    type: 'SET',
    payload: index
  }
}

/*
  ========================================
  Product Display Modal
  ========================================
*/

export const showDisplayModal = () => {
  return {
    type: 'SHOW_MODAL'
  };
};

export const hideDisplayModal = () => {
  return {
    type: 'HIDE_MODAL'
  };
};

/*
  ========================================
  Magnify
  ========================================
*/

export const magnifyIn = () => {
  return {
    type: 'IN'
  };
};

export const magnifyOut = () => {
  return {
    type: 'OUT'
  };
};

/*
  ========================================
  Size Selector
  ========================================
*/

export const toggleSize = () => {
  return {
    type: 'TOGGLE_SIZE'
  };
};

export const selectSize = (size) => {
  return {
    type: 'SELECT_SIZE',
    payload: size
  };
};

/*
  ========================================
  Quantity Selector
  ========================================
*/

export const toggleQuan = () => {
  return {
    type: 'TOGGLE_QUAN'
  };
};

export const selectQuan = (quantity) => {
  return {
    type: 'SELECT_QUAN',
    payload: quantity
  };
};

/*
  ========================================
  Toggle heart icon
  ========================================
*/

export const fill = () => {
  return {
    type: 'TOGGLE_HEART'
  };
};