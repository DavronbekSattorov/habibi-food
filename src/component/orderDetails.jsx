const OrderDetails = () => {
    return(
        <div className="orderDetailConatiner">
            <form action="" >

                <div className="user-info">
                    <div className="input-label">
                        <label htmlFor="" >Enter you address</label>
                    </div>
                    <input type="text" />
                </div>

                <div className="user-info">
                    <div className="input-label">
                        <label htmlFor="" >Enter your phone number</label>
                    </div>
                    <input type="text" />
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