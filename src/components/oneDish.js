



const OneDish = ({title, goodsArr}) => {
    return (
        <div className = "createDishForm oneDish">
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
            <button>Готуватиму!</button>
        </div>
    )
}

export default OneDish;


