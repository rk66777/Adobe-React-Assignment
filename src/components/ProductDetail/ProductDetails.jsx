import React, {useState,useEffect} from 'react';
import { useDispatch} from 'react-redux';
import { addCart } from '../redux/action';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router';
import ReadMoreReact from 'read-more-react/dist/components/ReadMoreReact';



const ProductDetails = () => {

  

    const {id} = useParams();
    const [product, setProduct]= useState([]);
    const [loading, setLoading]= useState(false);

    const dispatch = useDispatch();
    const addProduct = (product)=>{
            dispatch(addCart(product));
    }

    let componentMounted = true;

    useEffect (()=> {
            const getProduct = async ()=>{
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
              <>
              {/* <div className="col-md-6">
               <Skeleton height={400}/>
              </div>
              <div className="col-md-6">
               <Skeleton height={50} width={300}/>
               <Skeleton height={75} />
               <Skeleton height={25}  width={150}/>
               <Skeleton height={50}  />
               <Skeleton height={150}  />
               <Skeleton height={50}  width={100}/>
               <Skeleton height={50}  width={100} style={{marginLeft:6}}/>
              </div> */}
              Loading
              </>
      )
        }
const ShowProductDetails =() =>{
  return (
          <>
           <div className="aem-GridColumn aem-GridColumn--default--3">
                 <ul style={{display:'block'}}>
                   <li> <img src={product.image} alt={product.title} height="100px" width="80px"/>  </li>
                   <li> <img src={product.image} alt={product.title} height="100px" width="80px"/>  </li>
                   <li> <img src={product.image} alt={product.title} height="100px" width="80px"/>  </li>
                </ul>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--4">
                  <img src={product.image} alt={product.title} height="300px" width="300px"/> 
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
                  {/* <ReadMoreReact text={product.description}
                  min={10}
                  ideal={16}
                  max={17}
               
                readMoreText="click here to read more"/> */}
                 
                  <p className="lead"> {product.description}</p>
                  <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>
                          Add to Cart
                  </button>
                  {/* <NavLink to ="/cart" className="btn btn-dark ms-2 px-3 py-2">
                          Go to cart
                  </NavLink> */}
          </div>

          
          </>
  )
}


return (
  <div>
  <div className="conatainer">
  <div className="aem-Grid">
  <div className="aem-Grid aem-Grid--12">
           {loading ? <Loading/> : <ShowProductDetails/>}
   </div>
  </div>
  </div>
</div>
)

}

export default ProductDetails;