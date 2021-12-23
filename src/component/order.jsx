import { InvoiceContext } from '../App';
import { useContext } from 'react';

const Order = () => {
    const [foodData, onClickSelect, selectedItem, closeModal, handleOrder, order, handleEmptyBasket,handleIncreaseAmount, handleDecresaeAmount] = useContext(InvoiceContext);
    console.log(order,'order')

    const total = order.reduce((acc, el) => acc += el.price * el.amount, 0 );
    return(
        <div>

        <div className='order-container'>
            
            {
                order.map(el => {
                    return(
                        <div className='order'>
                                <img src={el.img} alt="" className='order-image'/> 
                                <div className='order-name-price'>
                                    <h4>{el.name}</h4>  
                                    <p>${el.price}</p>            
                                </div>   
                                <div className='order-amount'>
                                    <button onClick={() => handleDecresaeAmount(el.id)}> - </button> 
                                    <p>{el.amount}</p>
                                    <button onClick={() => handleIncreaseAmount(el.id)}>+</button>

                                </div>
                        </div>
                    )
                })
            }

        </div>
            <p className='total'>Total: ${total} </p>
            <button className='empty-basket' onClick={handleEmptyBasket}>Empty Basket</button>
        </div>
    )
}

export default Order;