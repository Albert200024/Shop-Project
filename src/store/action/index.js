export const addCart = (product) => {
    return {
        type:"ADDITEM",
        payload:product
    }
}

export const deletCart = (product) => {
   return {
       type:"DELITEM",
       payload: product
   }
}