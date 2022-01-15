import { BiDrink } from 'react-icons/bi';
import tea from '../img/tea.png';
import { InvoiceContext } from '../App';
import { useContext } from 'react';

const Drinks = () => {


    const [foodData, onClickSelect, searchFoodData] = useContext(InvoiceContext);
    console.log(foodData,'meal')
    const filtered = searchFoodData.filter(el => el.type === 'drink');


    return(
        <div className="container">
            <div className='meal-header'>

                <BiDrink className='meal-logo'/> Drinks
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

export default Drinks;