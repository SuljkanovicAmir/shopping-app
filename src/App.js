import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import './styles/MediaStyle.css';
import Nav from './components/Nav'
import Shop from './components/Shop'
import Home from './components/Home'
import Samsung from './components/products/Samsung'
import Xiaomi from './components/products/Xiaomi'
import Apple from './components/products/Apple'
import Huawei from './components/products/Huawei'
import AllProducts from './components/products/AllProducts'


import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';




function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  const [isCartActive, setCartActive] = useState(false);
  const [value, setValue] = useState("");
  const [sortFilterValue, setSortFilterValue] = useState("");
  const [operation, setOperation] = useState("");
  const [sortValue, setSortValue] = useState("");

 
  const handleCart = event => {
    setCartActive(current => !current);
  };

  useEffect(() => {
    loadProductsData();
  }, []);
  

  const loadProductsData = async (start, end, increase, optType=null, filterOrSortValue) => {
    switch(optType) {
      case 'search': 
        setOperation(optType);
        setSortValue("");
        return await axios.get(`https://my-json-server.typicode.com/SuljkanovicAmir/shopping-app/products?q=${value}&_order=asc&_start=${start}&_end=${end}`)
        .then((response) => {
          setProducts(response.data)
        })
      case 'sort':
            setOperation(optType);
            setSortFilterValue(filterOrSortValue);
            return await axios.get(`https://my-json-server.typicode.com/SuljkanovicAmir/shopping-app/products?_sort=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`)
                .then((response) => { 
                  setProducts(response.data)
            })
            .catch((err) => console.log(err));
        default:
            return await axios
            .get(`https://my-json-server.typicode.com/SuljkanovicAmir/shopping-app/products`)
            .then((response) => { 
              setProducts(response.data)
            })
            .catch((err) => console.log(err));    
      }
  }
 


const handleSearch = async (e) => {
  e.preventDefault();
  loadProductsData(0, 13, 0,'search')
  console.log(value)
}

const handleSort = async (e) => {
  let value = e.target.value;
  setSortValue(value);
  loadProductsData(0, 13, 0,"sort", value)
}

const handleFilter = async (value) => {
  loadProductsData(0, 13, 0,'filter', value)
}

  const handleItem = (itemName) => {
    setCart(prevArr => [...prevArr, itemName])
  }

  const handleBag = (itemName) => {
    if(!cart.includes(itemName)) {
      handleItem(itemName)
      handleCart()
    } else {
        return
      }
  }

  const handleItemCount = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].quantity += d;
    if(arr[ind].quantity === 0) arr[ind].quantity = 1;
    setCart([...arr])
  }

  const handleReset = () => {
    setOperation("");
    setValue("");
    setSortFilterValue("");
    setSortValue(""); 
    loadProductsData(0, 13, 0);
  };
  

  return (
    <div className="App">
      <Router>
        <Nav 
          items={cart}  
          handleItemCount={handleItemCount} 
          isCartActive={isCartActive}
          handleCart={handleCart}
          setCart={setCart}
          setValue={setValue}
          handleSearch={handleSearch}
        />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/shop" element={<Shop 
                                        handleBag={handleBag} 
                                        products={products}  
                                        handleFilter={handleFilter} 
                                        handleSort={handleSort}  
                                        sortValue={sortValue}  
                                        handleReset={handleReset}   
                                        />}>
            <Route index element={<AllProducts products={products}  handleBag={handleBag} />} />
            <Route exact path="/shop/samsung" element={<Samsung products={products} handleBag={handleBag}  />} />
            <Route exact path="/shop/xiaomi" element={<Xiaomi products={products} handleBag={handleBag}  />} />
            <Route exact path="/shop/apple" element={<Apple products={products} handleBag={handleBag}  />} />
            <Route exact path="/shop/huawei" element={<Huawei products={products} handleBag={handleBag}  />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
