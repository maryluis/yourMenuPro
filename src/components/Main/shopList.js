import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const ShopList = ({list}) => {

    return(
        <div className = "createDishForm">
            <h3>Список блюд</h3>
            <ul>
                {list.titles && list.titles.map((title) =>
                <li key = {title}>{title}</li>)}
            </ul>
            <h3>Список товарів</h3>
            <ul className="noPadding numbers">
                {list.ingredients && list.ingredients.map((ingr) =>
                <li className = "spaceBetween alignCenter" key = {ingr.title+ingr.ofWhat}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" className="bi bi-circle-fill marginOverSmall" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8"/>
                        </svg>
                        <span className="marginOverSmall">{ingr.title}</span>
                    </span>

                    <span className="marginOverSmall">{ingr.howMany} {ingr.ofWhat}</span>
                </li>)}
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.shopList,
    
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

const CShopList = connect(mapStateToProps, mapDispatchToProps)(ShopList);



export default CShopList;