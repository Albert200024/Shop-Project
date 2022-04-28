import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
 
export default function Product() {

   const [data, setData] = useState([])
   const [filter, setFilter] = useState(data);
   const [loadig, setLoading] = useState(false)
   let componentMoutend = true;

   useEffect(() => {
       const getProducts = async () => {
                 setLoading(true);
                 const response = await fetch("https://fakestoreapi.com/products");
                 if(componentMoutend){
                     setData(await response.clone().json());
                     setFilter(await response.json());
                     setLoading(false);
                     console.log(filter )
                 } 

                 return () => {
                     componentMoutend = false;
                 }  
       }
       getProducts()   
   }, [])

  const Loadig = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    )
  }

  const filterProducts = (cat) => {
     const updateList = data.filter((x) => x.category === cat)
     setFilter(updateList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => 
            setFilter(data)}>ALL</button>
          <button className="btn btn-outline-dark me-2" onClick={() => 
            filterProducts("men's clothing")}>Men's Clothinng</button>
          <button className="btn btn-outline-dark me-2" onClick={() => 
            filterProducts("women's clothing")}>Womens's Clothinng</button>
          <button className="btn btn-outline-dark me-2" onClick={() => 
            filterProducts("jewelery")}>Jewelry</button>
          <button className="btn btn-outline-dark me-2" onClick={() => 
            filterProducts("electronics")}>Electroic</button>
        </div>
        {filter.map((product, index) => {

            return (
              <>
                <div className='col-md-3 mb-4'>
                  <div className="card h-100 text-center p-4" key={product.id}>
                    <img src={product.image} className="card-img-top" alt={product.title}
                     height = "300px" />
                      <div className="card-body">
                        <h5 className="card-title mb-0">{product.title.
                        substring(0, 11)}...</h5>
                        <p className="card-text lead fw-bold">
                            ${product.price}
                        </p>
                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                      </div>
                  </div>
                </div>
              </>
            )
        })}
      </>
    )
  }

  return (
    <div>
        <div className="container my-5 py-5">
            <div className="row">
                 <div className="col-12">
                    <h1 className='display-6 fw-bolder 
                    text-center'>Latest Products</h1>
                    <hr/> 
                 </div>
            </div>
            <div className="row justify-content-center ">
                {loadig ? <Loadig/> : <ShowProducts/>} 
            </div>
        </div>
    </div>
  )
}
