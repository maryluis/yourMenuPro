



const OneDish = ({tittle, goodsArr}) => {
    return (
        <div>
            <h3>{tittle}</h3>
            <ul>
                {goodsArr.map(good => 
                    <li key={good.name}> 
                        <span>{good.name}</span>
                        <span>{good.howMany}</span>
                        <span>{good.ofWhat}</span>
                     </li>
                )}

            </ul>
            <button>Готуватиму!</button>
        </div>
    )
}

export default OneDish;


