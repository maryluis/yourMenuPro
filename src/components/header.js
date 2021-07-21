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
            <div className = "flexCenter">
                <span className = "marginOverSmall">0</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-record-circle marginOverSmall" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                </svg>
            </div>

        </header>
    )
}

export default Header;