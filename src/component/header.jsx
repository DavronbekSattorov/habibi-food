import { BsSearch } from 'react-icons/bs';
import { GiShoppingBag } from 'react-icons/gi';
import {Link} from "react-router-dom";
import { InvoiceContext } from '../App';
import { useContext } from 'react';


import logo from '../img/logo.png'


const Header = () => {

    const [foodData, onClickSelect, selectedItem, closeModal, handleOrder, order, handleEmptyBasket] = useContext(InvoiceContext);
    return(
        <div className="header">
            <div className="header-left">
                <img src={logo} alt="" className='logo'/>
                <div className='home-type'>
                    <Link to="/" className='type'>Home</Link>
                    <Link to="/" className='type'>About</Link>
                    <Link to="/" className='type'>Contact</Link>
                    
                    
                </div>
            </div>

            <div className="header-right">
                <div className='search-food'>
                    <div className='search-food-icon'>
                        <BsSearch />

                    </div>
                    <div className='search-food-input'>
                        <input type="text" placeholder='search your favourite food' />
                        
                    </div>
                </div>
                <div className='shopping-card'>
                    <Link to="/order" className='shopping-card-logo'><GiShoppingBag/></Link> 
                    {
                        order.length > 0 ? <p className='count'>{order.length}</p> : ''
                    }
                    
                </div>

            </div>  
        </div>
    )
}

export default Header