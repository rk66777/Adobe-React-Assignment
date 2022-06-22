const productReducer = (state = [],{type,payload}) => {
    switch (type) {
      case 'FETCH_PRODUCTS':
        return [...state,...payload]
      default:
        return state;
    }
}

export default productReducer;