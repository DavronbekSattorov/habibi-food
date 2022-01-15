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
import Contact from "./component/contact";

//firebase
import db from './firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';


export const InvoiceContext = createContext();

function App() {

  const [foodData, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [order, setOrder] = useState([]);
  const [alert, setAlert] = useState(false);
  const [input, setInput] = useState('');

  // FireBase connection
  const userCollectionRef = collection(db, 'food');
  
  // Getting data from FireBase
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      console.log('data',data)
      setData(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }
    getUsers();
  },[])



  const onClickSelect = (id) => {
    const filter = foodData.filter(el => el.id === id);
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

  return (
    <InvoiceContext.Provider value={[foodData, onClickSelect,  searchFoodData, selectedItem, closeModal, handleOrder, order, handleEmptyBasket,handleIncreaseAmount, handleDecresaeAmount, input, handleInput, alert ]}>
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
