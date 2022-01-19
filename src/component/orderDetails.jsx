import apiKey from '../emailkey';
import emailjs from 'emailjs-com';

const OrderDetails = () => {

    const handleOnSubmitEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
        .then((result) => {
        alert("Message Sent, We will deliver your food in 20 min!", result.text);
        },
        (error) => {
        alert("An error occurred, Please try again", error.text);
        });
    }

    return(
        <div className="orderDetailConatiner">
         
            <form action="" onSubmit = {handleOnSubmitEmail} >

                <div className="user-info">
                    <div className="input-label">
                        <label htmlFor="" >Name</label>
                    </div>
                    <input type="text" name='name'/>
                </div>

                <div className="user-info">
                    <div className="input-label">
                        <label htmlFor="" >Enter you address</label>
                    </div>
                    <input type="text" name='address'/>
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
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default OrderDetails;