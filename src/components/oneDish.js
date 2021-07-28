import { useState } from "react";



const Recepy = ({recepy, onClose}) => {

    return(
        <div className = "createDishForm recepyCard paddingOver noBorderRadius">
            <p dangerouslySetInnerHTML={{__html: recepy.replaceAll('\n', '<br>')}}/>
            <button onClick = {() => onClose(false)}>Сховати</button>
        </div>
    )
}


const OneDish = ({basket, dish, dishOff, putDish, dishClear, state}) => {
    const [recepy, openRecepy] = useState(false);
    const [ingredients, openIngredients] = useState(false);

    return (
        <div className = "createDishForm oneDish marginOver spaceBetweenCoulum paddingOver">
            <h4 className = "textCenter">{dish.dish.name}</h4>

            <div className = "forBigSize">
                <ul >
                    {dish.dish.ingredients.map(good => 
                        <li key={good.title}> 
                            <span className = "spaceBetween alignCenter">
                                <span className="alignCenter">{good.title} </span>
                                <span className="alignCenter">{good.howMany} {good.ofWhat}</span>
                            </span>
                        </li>
                    )}
                </ul>

                {recepy && <Recepy recepy = {dish.dish.comment} onClose = {openRecepy}></Recepy>}
            </div>
            {dish.dish.comment && <button className="forBigSize" disabled = {recepy} onClick = {() => openRecepy(true)}>Докладніше</button>}

            <div className = "forSmallSize">
                <button disabled={ingredients || recepy} onClick = {() => openIngredients(!ingredients)}>Ігредієнти</button>
                {ingredients &&
                    <div className = "smallList paddingOver">
                        <ul >
                            {dish.dish.ingredients.map(good => 
                                <li key={good.title}> 
                                    <span className = "spaceBetween alignCenter">
                                        <span className="alignCenter">{good.title} </span>
                                        <span className="alignCenter">{good.howMany} {good.ofWhat}</span>
                                    </span>
                                </li>
                            )}
                        </ul>
                        <div className="flexCenter">
                            <button className="alignCenter flexCenter" onClick = {() => openIngredients(!ingredients)}>Сховати</button>
                        </div>
                    </div>
                }
                {dish.dish.comment && <button disabled = {recepy} onClick = {() => openRecepy(true)}>Докладніше</button>}
                {recepy && <Recepy recepy = {dish.dish.comment} onClose = {openRecepy}></Recepy>}
            </div>
            
                <button onClick = {() =>  {
                        basket[dish.id] ? dishOff(dish.id, dish.dish) : putDish(dish.id, dish.dish);                           
                }}>{basket[dish.id] ? "Не готуватиму!" : "Готуватиму!" }</button>

        </div>
    )
}

export default OneDish;


