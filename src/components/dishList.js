import { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionGetDishes, actionStandartList, asyncDishAdd, clearDishes, asyncDishDelete } from '../redux';
import { OneDish } from '.';
import { bindActionCreators } from 'redux';
import { objToArr } from '../tools';



    const DishList = ({dishes, createList, clearBask, getData, bask, state, dishToBask, dishOffBask}) => {

         useEffect( () => { 
             getData()
        }, [getData]);

    return(
         <div className = "dishList flexRow flexWrap marginForSmall" >
        {/* {isLoading && <div className="spinner-grow text-secondary spinnetWidth" role="status"/>} */}
        {dishes && dishes.map((dish) => 
                <OneDish key = {dish.id} dish = {dish}  basket = {bask} dishClear = {clearBask} goodsArr = {dish.dish.ingredients} dishOff = {dishOffBask} state = {state.promiseData.dishes} putDish = {dishToBask} comment = {dish.dish.comment}/>)}
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
    dishToBask: asyncDishAdd,
    dishOffBask: asyncDishDelete,
    clearBask: clearDishes,
    createList: actionStandartList
}, dispatch);

const CDishList = connect(mapStateToProps, mapDispatchToProps)(DishList);

export default CDishList;