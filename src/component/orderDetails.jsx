import { InvoiceContext } from '../App';
import { useContext } from 'react';



const OrderDetails = () => {

    const [foodData, onClickSelect,  searchFoodData, selectedItem, closeModal, handleOrder, order, handleEmptyBasket,handleIncreaseAmount, handleDecresaeAmount, input, handleInput, alert, handleSetName, name, handleSetAddress, address, handleOnSubmitEmail] = useContext(InvoiceContext);

    // const handleOnSubmitEmail = (e) => {
    //     if(!(name==='') && !(address===''))  {
    //         e.preventDefault();
    //         emailjs.sendForm('gmail', apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
    //         .then(result => {
    //         console.log('Success');
    //                 },
    //         error => {
    //         console.log('Not ')
    //         })
    //     } else {
    //         console.log('Please Fill');
    //     }
    // }

    console.log(order, 'order')
    return(
        <div className="orderDetailConatiner">
         
            <form action="" onSubmit = {handleOnSubmitEmail} >

               
                <textarea style={{visibility:'hidden'}} name="order" id="" cols="30" rows="2" defaultValue={
                     order.map(el => {
                         if(el.amount > 0) {
                             return(
                                 `
                                 -----------------
                                 Name: ${el.name},
                                 Amount: ${el.amount},
                                 -----------------
                                
                                 `  
                             )
                         }
                    })
                } readOnly>
                </textarea>

                <div className="user-info">
                    <input type="text" className='user-input' name='name' value={name} onChange={e => handleSetName(e)} placeholder='Name'/>
                </div>

                <div className="user-info">
                    <input type="text" className='user-input' name='address' placeholder='Address'/>
                </div>

                <div className="user-info">
                    <input type="text" className='user-input' name='number'  placeholder='Phone number'/>
                </div>

                <p style={{color:'red'}}>Currently we are only accepting cash!</p>
                
                <button className='sendOrder' onSubmit = {handleOnSubmitEmail} >Send Order</button>
            </form>
            {
                alert ? 
                    <div className='notification'>
                            <p className='notification-leftBorder'></p>
                            <div className='notification-message'>
                                <h4 className='success-text'>Success</h4>
                                
                            </div>
                    </div> : ''
            }
        </div>
        
    )
}

export default OrderDetails;