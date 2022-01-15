import { InvoiceContext } from '../App';
import { useContext } from 'react';

const Order = () => {
    const [foodData, onClickSelect,  searchFoodData, selectedItem, closeModal, handleOrder, order, handleEmptyBasket,handleIncreaseAmount, handleDecresaeAmount, input, handleInput, alert] = useContext(InvoiceContext);
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
        <div className='order-buttons'>
            <button className='order-button'>Order</button>
            <button className='order-button' onClick={handleEmptyBasket}>Empty Basket</button>
            <p className='total'>Total: ${total} </p>

        </div>
        </div>
    )
}

export default Order;