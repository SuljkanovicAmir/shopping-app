import Nav from './Nav'
import Shop from './Shop'
import Home from './Home'
import Samsung from './products/Samsung'
import Xiaomi from './products/Xiaomi'
import Apple from './products/Apple'
import Huawei from './products/Huawei'
import AllProducts from './products/AllProducts'
import axios from 'axios'
import { useState, useEffect } from 'react';
import {AnimatePresence} from 'framer-motion'
import {Routes, Route, useLocation} from 'react-router-dom';




function Main() {

  const location = useLocation();

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
      <Nav 
        items={cart}  
        handleItemCount={handleItemCount} 
        isCartActive={isCartActive}
        handleCart={handleCart}
        setCart={setCart}
        setValue={setValue}
        handleSearch={handleSearch}
      />
      <AnimatePresence location={location} key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/shop" element={<Shop handleSort={handleSort} handleReset={handleReset}/>}>
            <Route index element={<AllProducts products={products}  handleBag={handleBag} />} />
            <Route exact path="/shop/samsung" element={<Samsung products={products} handleBag={handleBag}  />} />
            <Route exact path="/shop/xiaomi" element={<Xiaomi products={products} handleBag={handleBag}  />} />
            <Route exact path="/shop/apple" element={<Apple products={products} handleBag={handleBag}  />} />
            <Route exact path="/shop/huawei" element={<Huawei products={products} handleBag={handleBag}  />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Main