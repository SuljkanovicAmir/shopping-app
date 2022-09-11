import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Nav from './components/Nav'
import Shop from './components/Shop'
import Home from './components/Home'
import {Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const headers = {
  "Content-Type": "application/json",
  'Access-Control-Allow-Origin': '*',
};
const url = "https://my-json-server.typicode.com/SuljkanovicAmir/shopping-app/db/";



function App() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0)
  const [basketArr, setItemsInBag] = useState([])
  const [itemCount, setItemCount] = useState(1)


  useEffect(()=>{
    axios.get(url, {headers})
    .then(response => {
        setProducts(response.data.products)
    })
    .catch(err => {
      console.log(err)
    })
},[])

  const handleItem = (itemName) => {
    setItemsInBag(prevArr => [...prevArr, itemName])
    
  }

  const handleBag = (itemName) => {
    if(!basketArr.includes(itemName)) {
      handleItem(itemName)
      handleCount()
    } else {
        return
      }
  }

  const handleItemCount = (item, d) => {
    const ind = basketArr.indexOf(item);
    const arr = basketArr;
    arr[ind].amount += d;

    if(arr[ind].amount === 0) arr[ind].amount = 1;
    setItemsInBag([...arr])
  }


function handleCount () {
  setCount(prevValue => prevValue + 1)
}


console.log(count)
  return (
    <div className="App">
      <Router>
        <Nav count={count} items={basketArr}  handleItemCount={handleItemCount} />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/shop" element={<Shop handleCount={handleCount} handleBag={handleBag} products={products}/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
