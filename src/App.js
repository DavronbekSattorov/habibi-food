import { useState, createContext, useContext, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";


import './App.css';
import Header from './component/header';
import Meals from './component/meals';
import Drinks from './component/drinks';
import Desserts from './component/desserts';
import Modal from "./component/modal";
import Order from './component/order'
import About from "./component/about";
import {data} from './data'
import Contact from "./component/contact";



export const InvoiceContext = createContext();

function App() {

  const [foodData, setData] = useState(data);
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [order, setOrder] = useState([]);
  const [alert, setAlert] = useState(false);

  const [input, setInput] = useState('');


  const onClickSelect = (id) => {
    const filter = data.filter(el => el.id === id);
    setSelectedItem(filter);
    setModal(true);
  }

  const closeModal = () => {
    setModal(false)
  }

  const handleOrder = (id) => {
    const checkSame = order.filter(el => el.id !== id);
    const filtered = foodData.filter(el => el.id === id);
    const arr = [...checkSame, ...filtered];
    const finalarr = arr.map(el => {
      return(
        {...el, amount: el.amount ? el.amount : 0}
      )
    })
    setOrder(finalarr);
    handleAlert();
  }

  const handleAlert = () => {
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 2000);
  }

  const handleIncreaseAmount = (id) => {
    const addAmount = order.map(el => el.id === id ? {...el, amount: el.amount += 1}:el);
    setOrder(addAmount);
  }

  const handleDecresaeAmount = (id) => {
    const addAmount = order.map(el => el.id === id ? {...el, amount: el.amount > 0 ? el.amount -= 1 : 0}:el);
    setOrder(addAmount);
  }

  const handleEmptyBasket = () => {
    setOrder([]);
  }
  
  const searchFoodData = foodData.filter(el => el.name.toLowerCase().includes(input.toLowerCase()));
    
  

  const handleInput = (e) => {
    setInput(e.target.value)
    
  }



  console.log(selectedItem, 'selected')
  console.log(order,'orderrrrrr')
  console.log(searchFoodData,'searchFoodData')
  console.log(input,'input')
  console.log(alert,'alert')
  return (
    <InvoiceContext.Provider value={[foodData, onClickSelect, selectedItem, closeModal, handleOrder, order, handleEmptyBasket,handleIncreaseAmount, handleDecresaeAmount, input, handleInput, searchFoodData, alert ]}>
      <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={
              !modal ? 
                <div className='menu-bar'>
                  <Meals/>
                  <Drinks/>
                  <Desserts/>
                </div> : <Modal/>} 
                />

            <Route path="order" element={<Order/>} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />
         </Routes>
            

      </div>

    </InvoiceContext.Provider>
  );
}

export default App;
