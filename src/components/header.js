import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useState } from 'react';


const ToBasket = ({bask}) => {
    return (
        <div className = "flexCenter">
            <Link to = "/dishes-bask">
                <span className = "marginOverSmall">{bask}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-record-circle marginOverSmall" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                </svg>
            </Link>
        </div>

    )
}

const mapStateToProps = state => ({
    bask: Object.keys(state.dishesBask).length
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

const CToBasket = connect(mapStateToProps, mapDispatchToProps)(ToBasket);

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

const ToFastStart = () => {
    const [count, changeCount] = useState(1);
    return(
        <div className="toFastStart  smallLetters flexColumn noMargin">
            <div>
                <span className="marginOverSmall">Кількість блюд</span>
                <select onChange = {(e) => changeCount(e.target.value)}> 
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
            </div>
            <button onClick={() => console.log(count)}>Запропонуйте</button>
        </div>
    )
}

// const BigMenu = () => {
//     return(
//         <div className = "divVertical forBigSize">
//                 <Link className = "" to = "/">
//                     <img alt="logo" src="../images/body/32399bentobox_98893.png" width="50" height="50"/>
//                 </Link>


//                 <ul className = "flexRow">
//                     <li>
//                         <Link to = "/dishes-list/">
//                             Обрати смачнючі страви
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to = "/create-dish/">
//                             Додати смачнючу страву
//                         </Link>
//                     </li>
//                     <li>
//                         <Link to = "/create-message/">
//                             Додати відгук
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//     )
// }


const Header = () => {

    return(
        <header className = "footer spaceBetween zIndexUp borderBottom">
            {/* <BigMenu/> */}
            <div className="flexRow left">
                <TabletMenu/>
                <ToFastStart/>
            </div>
            <CToBasket/>

        </header>
    )
}

export default Header;