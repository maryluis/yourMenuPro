import { useState } from "react";



const Recepy = ({recepy, onClose}) => {

    return(
        <div className = "createDishForm oneDish recepyCard paddingOver">
            <p dangerouslySetInnerHTML={{__html: recepy.replaceAll('\n', '<br>')}}/>
            <button onClick = {() => onClose(false)}>Сховати</button>
        </div>
    )
}


const OneDish = ({title, goodsArr, comment = false}) => {
    const [recepy, openRecepy] = useState(false);

    return (
        <div className = "createDishForm oneDish marginOver">
            <h3>{title}</h3>
            <ul>
                {goodsArr.map(good => 
                    <li key={good.title}> 
                        <span className = "spaceBetween">
                            <span>{good.title} </span>
                            <span>{good.howMany} {good.ofWhat}</span>
                        </span>
                     </li>
                )}

            </ul>
            {comment && <button disabled = {recepy} onClick = {() => openRecepy(true)}>Докладніше</button>}
            {recepy && <Recepy recepy = {comment} onClose = {openRecepy}></Recepy>}
            <button>Готуватиму!</button>
        </div>
    )
}

export default OneDish;


