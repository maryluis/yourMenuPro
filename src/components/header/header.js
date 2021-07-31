import {Link} from 'react-router-dom';
import { useState } from 'react';
import { CToBasket, CToFastStart } from '..';




const CoulumnMenu = () => {

    return(
        <div className="columnMenu">
            <ul className = "smallBorder flexCoulumn absoluteMenu greyBachground">
                <li className = "borderBottom">
                    <Link to = "/">
                        На головну
                    </Link>
                </li>
                <li className = "borderBottom">
                    <Link to = "/dishes-list/">
                        Обрати смачнючі страви
                    </Link>
                </li>
                <li className = "borderBottom">
                    <Link to = "/create-dish/">
                        Додати смачнючу страву
                    </Link>
                </li>
                <li className = "borderBottom">
                    <Link to = "/create-message/">
                        Додати відгук
                    </Link>
                </li>
            </ul>
        </div>
    )
}

const TabletMenu = () => {
    const [show, setShow] = useState(false);
    return(
        <div onClick = {() => setShow(!show)} className = "">
            <img alt="logo"className="logo" src="../images/body/32399bentobox_98893.png" width="50" height="50"/>
            {show && <CoulumnMenu/>}
        </div>

    )
}






const Header = () => {

    return(
        <header className = "footer spaceBetween zIndexUp borderBottom">
            {/* <BigMenu/> */}
            <div className="flexRow left">
                <TabletMenu/>
                <CToFastStart/>
            </div>
            <CToBasket/>

        </header>
    )
}

export default Header;