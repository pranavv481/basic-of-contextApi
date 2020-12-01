import './App.css';
import ProductContextProvider from "./Context/ProductContextProvider";
import ShowProduct from "./Component/ShowProducts";
import Nav from './Component/Nav';
import ThemeContextProvider from "./Context/ThemeContext"; 
function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Nav />
        <ThemeContextProvider>
        <ShowProduct />
        </ThemeContextProvider>
      </ProductContextProvider>

    </div>
  );
}

export default App;
