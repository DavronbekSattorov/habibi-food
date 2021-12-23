import { InvoiceContext } from '../App';
import { useContext } from 'react';

const Modal = () => {

    const [foodData, onClickSelect, selectedItem, closeModal, handleOrder, order] = useContext(InvoiceContext);
    console.log(selectedItem)
    return(
        <div className='modal'>
            <section className="modal-main">

                <div className='modal-left'>
                    <img src={selectedItem[0].img} alt="" className='modal-left-img'/>
                    <h4 className='modal-left-name'>{selectedItem[0].name}</h4>
                    <p className='modal-left-price'>${selectedItem[0].price}</p>
                </div>
                <div className='modal-right'>
                    <p className='modal-right-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cumque obcaecati minima accusantium, libero similique temporibus nulla nostrum dolorem laboriosam.</p>
                    <button className='modal-right-choose' onClick={() => handleOrder(selectedItem[0].id)}>Choose this food</button>
                </div>
                
                <button type="button" onClick={closeModal} className='modal-close'>
                x
                </button>
            </section>
        </div>
    )
}

export default Modal;