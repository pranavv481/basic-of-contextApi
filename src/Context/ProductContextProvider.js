import React, {createContext, useState} from 'react';

export const ProductContext = createContext();


const ProductContextProvider = (props) => {

    const [product, setProduct] = useState([
        {id:1, name:"test1"},
        {id:2, name:"test2"},
        {id:3, name:"test3"},
        {id:4, name:"test4"},
    ])
    
    
    return (
        <div>
            <ProductContext.Provider value={[...product]}>
                {props.children}
            </ProductContext.Provider>
        </div>
    )
}

export default ProductContextProvider
