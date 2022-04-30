import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch, } from 'react-redux'
import { filterProduct, allProduct} from '../store/action';

export default function ProductAll() {
   const {data} = useSelector(state => state)
   const dispatch = useDispatch()

  const filterProducts = (cat) => {
    dispatch(filterProduct(cat))
  }

  const Loadig = () => {
    return (
      <>
        <h1>Loading...</h1>
      </>
    )
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => 
            dispatch(allProduct())}>ALL</button>
          <button className="btn btn-outline-dark me-2" onClick={() => 
            filterProducts("men's clothing")}>Men's Clothinng</button>
          <button className="btn btn-outline-dark me-2" onClick={() => 
            filterProducts("women's clothing")}>Womens's Clothinng</button>
          <button className="btn btn-outline-dark me-2" onClick={() => 
            filterProducts("jewelery")}>Jewelry</button>
          <button className="btn btn-outline-dark me-2" onClick={() => 
            filterProducts("electronics")}>Electroic</button>
        </div>

        {data.filterData.map((product, index) => {
            return (
                <div className='col-md-3 mb-4' key={index}>
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
                { data.loading ? <Loadig/> : <ShowProducts/>} 
            </div>
        </div>
    </div>
  )
}
