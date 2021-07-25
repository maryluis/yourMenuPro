import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


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
            <CToBasket/>

        </header>
    )
}

export default Header;