import React, { useContext } from 'react';
import { ProductContext } from "../Context/ProductContextProvider";
import { ThemeContext } from '../Context/ThemeContext';


const ShowProducts = () => {
    const mydata = useContext(ProductContext);
    const themeData = useContext(ThemeContext);
    console.log(themeData)
    return (
        <div style={{backgroundColor:themeData.bgColor, color:themeData.textColor}}>
            <h1>Show Products</h1>
            {mydata.map((data) => {
                return <div key={data.id}>
                    <h4>{data.id}</h4>
                    <h4>{data.name}</h4>
                </div>

            })}
        </div>
    )
}

export default ShowProducts

