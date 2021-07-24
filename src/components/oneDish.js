import { useState } from "react";



const Recepy = ({recepy, onClose}) => {

    return(
        <div className = "createDishForm oneDish recepyCard paddingOver">
            <p dangerouslySetInnerHTML={{__html: recepy.replaceAll('\n', '<br>')}}/>
            <button onClick = {() => onClose(false)}>Сховати</button>
        </div>
    )
}


const OneDish = ({basket, dish, dishOff, putDish, dishClear, state}) => {
    const [recepy, openRecepy] = useState(false);

    return (
        <div className = "createDishForm oneDish marginOver spaceBetweenCoulum">
            <h3>{dish.dish.name}</h3>
            <ul>
                {dish.dish.ingredients.map(good => 
                    <li key={good.title}> 
                        <span className = "spaceBetween">
                            <span>{good.title} </span>
                            <span>{good.howMany} {good.ofWhat}</span>
                        </span>
                     </li>
                )}

            </ul>
            {dish.dish.comment && <button disabled = {recepy} onClick = {() => openRecepy(true)}>Докладніше</button>}
            {recepy && <Recepy recepy = {dish.dish.comment} onClose = {openRecepy}></Recepy>}

            <button onClick = {() =>  {
                basket[dish.id] ? dishOff(dish.id, dish.dish) : putDish(dish.id, dish.dish);                           
                }}>{basket[dish.id] ? "Не готуватиму!" : "Готуватиму!" }</button>
{/* 
            <button onClick = {() =>  {             
                dishOff(dish.id, dish.dish)
                }}>Не готуватиму!</button> */}

            <button onClick = {() =>  {  
             
                dishClear()
                }}>Очистити</button>


        </div>
    )
}

export default OneDish;


