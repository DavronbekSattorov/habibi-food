import { useState, createContext, useContext, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import apiKey from './emailkey';
import emailjs from 'emailjs-com';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';



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
import OrderDetails from "./component/orderDetails";


export const InvoiceContext = createContext();

function App() {

  const [foodData, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const [order, setOrder] = useState([]);
  const [alert, setAlert] = useState(false);
  const [input, setInput] = useState('');
  
  
  //orderDetail
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSetName = (e) => {
    setName(e.target.value)
  } 

  const handleSetAddress = (e) => {
    setAddress(e.target.value)
  } 
  
  const handleOnSubmitEmail = (e) => {
    
    e.preventDefault();
    console.log(name);
    if(!(name === '')) {
      emailjs.sendForm('gmail', apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
      .then(result => {
        setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 2000);
        
      //console.log('Success');
              },
      error => {
      console.log('Not ')
      })
      console.log(e.target)
    } else {
      
      console.log('Please Fill it');
    }
   
}

 


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
    <InvoiceContext.Provider value={[foodData, onClickSelect,  searchFoodData, selectedItem, closeModal, handleOrder, order, handleEmptyBasket,handleIncreaseAmount, handleDecresaeAmount, input, handleInput, alert, handleSetName, name, handleSetAddress, address, handleOnSubmitEmail ]}>
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

            <Route path="order" element={<Order/>}/> 
            <Route path="/order/:orderDetail" element={<OrderDetails/>} />
            
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />
           
         </Routes>
      </div>

    </InvoiceContext.Provider>
  );
}

export default App;
