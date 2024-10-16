import React, {useContext} from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {

    const { food_list } = useContext(StoreContext);

    return (
      <div>
        <div className='food-display' id='food-display'>
          <h2>
            Top dishes near you
          </h2>
          <div className="food-display-list">
            {food_list.map((item, index) => {
              console.log(category, item.category);
              if (category === "All" || category === item.category) {
                return (
                  <FoodItem
                    key={index}
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={`₹${new Intl.NumberFormat('en-IN').format(item.price)*84}`}  // Format price with rupee symbol and commas
                    image={item.image}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    );
    
}
    
export default FoodDisplay
