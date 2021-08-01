import { OneDish } from '../';
import {Link, useHistory} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { objToArr } from '../../tools';
import { actionStandartList, asyncClearDishes, asyncDishDelete } from '../../redux';

const Basket = ({dishes, bask, state, createList, clearBask, dishOffBask}) => {
    const history = useHistory();
    return(
        <>
        {dishes.length > 0 &&
            <div className = "flexColumn marginForSmall">
                <div className = "flexRow flexWrap">
                    {bask && dishes.map((dish) => 
                        <OneDish key = {dish.id} dish = {dish}  basket = {bask} dishClear = {clearBask} goodsArr = {dish.dish.ingredients} dishOff = {dishOffBask} state = {state.promiseData}  comment = {dish.dish.comment}/>)}
                </div>
                <div className = "flexRow flexCenter flexWrap">
                    <button onClick = {() => clearBask()}>Перехотілося</button>
                    <button onClick = {() => {
                        createList(bask)
                        clearBask()
                        history.push("/shop-list/")}}>Давайте список</button>
                </div>
            </div>
        }
        {dishes.length === 0 && 
            <div className="createDishForm paddingOver">
                <p>
                    Ой, ви ще не обрали жодного блюда. 
                    Перейдіть до списка рецептів, або....(далі буде)

                </p>
                <button className = "flexCenter"><Link to = "/dishes-list/">До списка блюд</Link></button>
                
            </div>}
        </>
    )
}
const mapStateToProps = state => ({
    dishes: objToArr(state.dishesBask),
    state: state,
    bask: state.dishesBask
    
});

const mapDispatchToProps = dispatch => bindActionCreators({
    dishOffBask: asyncDishDelete,
    clearBask: asyncClearDishes,
    createList: actionStandartList
}, dispatch);

const CBasket = connect(mapStateToProps, mapDispatchToProps)(Basket);
export default CBasket;