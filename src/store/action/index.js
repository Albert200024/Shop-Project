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

export const filterProduct = (categoria) => {
    return {
        type:"filter_product",
        payload:categoria
    }
}

export const allProduct = () => {
    return {
        type:"all_product"
    }
}