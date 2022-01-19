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

                <textarea style={{visibility:'hidden'}} name="order" id="" cols="30" rows="10" defaultValue={
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
                    <div className="input-label">
                        <label htmlFor="">Name</label>
                    </div>
                    <input type="text" name='name' value={name} onChange={e => handleSetName(e)}/>
                </div>

                <div className="user-info">
                    <div className="input-label">
                        <label htmlFor="" >Enter you address</label>
                    </div>
                    <input type="text" name='address' />
                </div>

                <div className="user-info">
                    <div className="input-label">
                        <label htmlFor="" >Enter your phone number</label>
                    </div>
                    <input type="text" name='number'/>
                </div>

                <p>Do you pay cash or buy card?</p>
                <div className="user-info">
                    <div className="input-label">
                        <label htmlFor="cash" >Cash</label> 
                    </div>
                    <input type="radio" id="cash" name="paymet"/> <br/>
                    
                </div>
                <div className="user-info">
                    <div className="input-label">
                        <label htmlFor="card">Card</label>
                    </div>
                    <input type="radio" id="card" name="paymet"/>
                </div>
                <button onSubmit = {handleOnSubmitEmail} >Send Message</button>
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