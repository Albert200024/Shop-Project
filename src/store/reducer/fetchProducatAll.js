import axios from "axios"

export const request_Loading = () => ({
    type:"REQUEST_LOADING"
})

export const request_Sucsses = (data) => ({
    type:"REQUESR_SUCSESS",
    payload: data
})

export const Error = (err) => ({
      type:"ERROR",
      payload:err
  }   
)

export const initialState = {
    loading: false,
    data:[],
    filterData:[],
    err:""
}

export const fetchReducer = (state = {}, action) => {
    switch (action.type) {
        case "REQUEST_LOADING":
            return {
                ...state,
                loading:true,
                data:[],
                err:''
            }
         
        case "REQUESR_SUCSESS":
            return {
                ...state,
                loading:false,
                data:action.payload,
                filterData:action.payload,
                err:""
            }
         case "filter_product":
             return {
                 ...state,
                 filterData:state.data.filter((x) => x.category === action.payload)
             }

         case "all_product": 
            return {
                ...state,
                filterData:state.data
          }   

         case "ERROR":
            return {
               ...state,
               loading:true,
               data:[],
               err:action.payload
            }
        default:
            return state
    }
}

export const fetchData = () => {
    return function(dispatch){
        dispatch(request_Loading())
        axios.get("https://fakestoreapi.com/products")
        .then(response => dispatch(request_Sucsses(response.data)))
        .catch(res => dispatch(Error("sxal mutagrum")))
    }
}