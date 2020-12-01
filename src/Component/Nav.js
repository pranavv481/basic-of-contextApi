import React, {useContext} from 'react'
import { ProductContext } from "../Context/ProductContextProvider";
const Nav = () => {
    const mydata = useContext(ProductContext);
    console.log(mydata)
    return (
        <div>
            <h1>Produts {mydata.length} Length</h1>
        </div>
    )
}

export default Nav
