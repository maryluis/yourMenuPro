import { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionGetDishes, dishAdd, clearDishes, dishDelete } from '../redux';
import { OneDish } from '.';
import { bindActionCreators } from 'redux';
import { objToArr, standartList } from '../tools';



    const DishList = ({dishes, clearBask, getData, bask, state, dishToBask, dishOffBask}) => {
    useEffect(() => { 
        getData()

    }, [getData])
    return(
        <div className = "flexRow">
            {dishes && dishes.map((dish) => 
                <OneDish key = {dish.id} dish = {dish}  basket = {bask} dishClear = {clearBask} goodsArr = {dish.dish.ingredients} dishOff = {dishOffBask} state = {state.promiseData.dishes} putDish = {dishToBask} comment = {dish.dish.comment}/>)}
            <button onClick = {() => console.log(state)}>Check</button>
            <button onClick = {() => standartList(bask)}>List</button>
        </div>
    )
}
const mapStateToProps = state => ({
    dishes: objToArr(state.promiseData.dishes),
    state: state,
    bask: state.dishesBask
    
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getData: actionGetDishes,
    dishToBask: dishAdd,
    dishOffBask: dishDelete,
    clearBask: clearDishes
}, dispatch);

const CDishList = connect(mapStateToProps, mapDispatchToProps)(DishList);

export default CDishList;