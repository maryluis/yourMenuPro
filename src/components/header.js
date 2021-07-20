import {Link} from 'react-router-dom';

const Header = () => {

    return(
        <header className = "spaceBetween">
            <div className = "divVertical">
                <ul className = "flexRow">
                    <li>
                        <Link to = "/dishes-list/">
                            Обрати смачнючі страви
                        </Link>
                    </li>
                    <li>
                        <Link to = "/create-dish/">
                            Додати смачнючу страву
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                
            </div>

        </header>
    )
}

export default Header;