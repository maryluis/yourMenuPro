import { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionGetDishes } from '../redux';
import { OneDish } from '.';
import { bindActionCreators } from 'redux';
import { objToArr } from '../tools';

const DishList = ({dishes, getData}) => {
    useEffect(() => { 
        getData()

    }, [getData])
    return(
        <div className = "flexRow">
            {dishes && dishes.map((dish) => 
                <OneDish key = {dish.id} title = {dish.dish.name} goodsArr = {dish.dish.ingredients} comment = {dish.dish.comment}/>)}
            <button onClick = {() => console.log(dishes[1])}>Check</button>
        </div>
    )
}
const mapStateToProps = state => ({
    dishes: objToArr(state.promiseData.dishes),
    
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getData: actionGetDishes,
}, dispatch);

const CDishList = connect(mapStateToProps, mapDispatchToProps)(DishList);

export default CDishList;