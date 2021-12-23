import { useState, createContext, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Header from './component/header';
import Meals from './component/meals';
import Drinks from './component/drinks';
import Desserts from './component/desserts';
import Modal from "./component/modal";
import Order from './component/order'
import {data} from './data'



export const InvoiceContext = createContext();

function App() {

  const [foodData, setData] = useState(data);
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [order, setOrder] = useState([]);

  const onClickSelect = (id) => {
    const filter = data.filter(el => el.id === id);
    setSelectedItem(filter);
    setModal(true);
  }

  const closeModal = () => {
    setModal(false)
  }

  const handleOrder = (id) => {
    const filtered = foodData.filter(el => el.id === id);
    const arr = [...order, ...filtered];
    const finalarr = arr.map(el => {
      return(
        {...el, amount: 0}
      )
    })
    setOrder(finalarr);
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


  console.log(selectedItem, 'selected')
  console.log(order,'orderrrrrr')
  return (
    <InvoiceContext.Provider value={[foodData, onClickSelect, selectedItem, closeModal, handleOrder, order, handleEmptyBasket,handleIncreaseAmount, handleDecresaeAmount ]}>
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
         </Routes>
            

      </div>

    </InvoiceContext.Provider>
  );
}

export default App;
