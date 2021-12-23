import { GiHotMeal } from 'react-icons/gi';
import meal from '../img/meal.png';
import { InvoiceContext } from '../App';
import { useContext } from 'react';

const Meals = () => {

    const [foodData, onClickSelect] = useContext(InvoiceContext);
    
    const filtered = foodData.filter(el => el.type === 'meal');
    return(
        <div className="container">
            <div className='meal-header'>

                <GiHotMeal className='meal-logo'/> Meals
            </div>
            <div className='meals-box' id="style-4">
                
                {
                    filtered.map(el => {
                        return(
                            <div className='individual-meal' id={el.id} onClick={() => onClickSelect(el.id)}>
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

export default Meals;