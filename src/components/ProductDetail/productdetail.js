import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import './styles/productdetail.scss';

const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    let componentMounted = true;
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            if (componentMounted) {
                setProduct(await response.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProduct();

    }, []);

    const Loading = ()=>{
        return(
            Loading
        )}
    const ViewProductDetails = () => {
        return (
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--3">
                    <ul style={{ display: 'block' }}>
                        <li> <img src={product.image} alt={product.title} height="100px" width="80px" />  </li>
                        <li> <img src={product.image} alt={product.title} height="100px" width="80px" />  </li>
                        <li> <img src={product.image} alt={product.title} height="100px" width="80px" />  </li>
                    </ul>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4">
                    <img src={product.image} alt={product.title} height="300px" width="300px" />
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--3">
                    <h5 className="text-uppercase">
                        Home  / {product.category} /
                    </h5>
                    <h3 className="">{product.title}</h3>
                    <h3 className="">
                        $ {product.price}
                    </h3>
                    <p className="">Rating {product.rating && product.rating.rate}

                    </p>

                    <p className="lead"> {product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2" >
                        Add to Cart
                    </button>

                </div>
            </div>
        )
    }
    return (
        <div>
        <div className="conatainer">
        <div className="aem-Grid">
                 {loading ? <Loading/> : <ViewProductDetails/>}
        </div>
        </div>
      </div>
      )
      
}
export default ProductDetail;