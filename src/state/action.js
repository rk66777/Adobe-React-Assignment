
const fetch_products = () => async dispatch => {

     await fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(res => dispatch({
            type: 'FETCH_PRODUCTS',
            payload: res
        }));

}



export default fetch_products;