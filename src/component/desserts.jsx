import { FaCookieBite } from 'react-icons/fa';
import dessert from '../img/dessert.png';
import { InvoiceContext } from '../App';
import { useContext } from 'react';

const Desserts = () => {

    const [foodData, onClickSelect, selectedItem, closeModal, handleOrder, order, handleEmptyBasket,handleIncreaseAmount, handleDecresaeAmount, input, handleInput, searchFoodData] = useContext(InvoiceContext);
    console.log(foodData,'meal')
    const filtered = searchFoodData.filter(el => el.type === 'dessert');
    return(
        <div className="container">
            <div className='meal-header'>

            <FaCookieBite className='meal-logo'/> Desserts
            </div>
            <div className='meals-box' id="style-4">

                {
                    filtered.map(el => {
                        return(
                            <div className='individual-meal' onClick={() => onClickSelect(el.id)}>
                                <img src={el.img} alt=""  className='individual-meal-img'/>
                                <p className='individual-meal-name'>{el.name}</p>
                                <p className='individual-meal-price'>${el.price}</p>
                            </div>

                        )
                    })
                }

            </div>
        </div>
    )
}

export default Desserts;