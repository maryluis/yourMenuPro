import { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionGetDishes, asyncDishAdd, asyncDishDelete } from '../../redux';
import { OneDish } from '..';
import { bindActionCreators } from 'redux';
import { objToArr, sortObjToObj } from '../../tools';


    const PartOfList = ({dishArr, typeName, bask, clearBask, dishOffBask, dishToBask}) => {

        return(
            <div className="flexColumn flexCenter width createDishForm">
                <h3>{typeName}</h3>
                <div className="flexRow flexWrap">
                    {dishArr.map((dish) => 
                    
                    <OneDish key = {dish.id} dish = {dish}  basket = {bask} dishClear = {clearBask} 
                        goodsArr = {dish.ingredients} dishOff = {dishOffBask} 
                        putDish = {dishToBask} comment = {dish.comment}/> 

                        )}
                </div>
            </div>
        )
    }




    const DishList = ({dishes, types, dishesSort, clearBask, getData, bask, state, dishToBask, dishOffBask}) => {

         useEffect( () => { 
             getData()
        }, [getData]);

    return(
         <div className = "dishList flexRow flexWrap marginForSmall" >
        {dishesSort.length > 0 ?
            dishesSort.map((sort) => 
            
                <PartOfList dishArr = {sort.dish} key = {sort.id} 
                    typeName = {types[sort.id]} bask = {bask} 
                    clearBask = {clearBask} dishOffBask = {dishOffBask}
                    dishToBask = {dishToBask}/>)
            
            // dishes.map((dish) => 
            // <>
            //     <OneDish key = {dish.id} dish = {dish}  basket = {bask} dishClear = {clearBask} 
            //         goodsArr = {dish.dish.ingredients} dishOff = {dishOffBask} state = {state.promiseData.dishes} 
            //         putDish = {dishToBask} comment = {dish.dish.comment}/> 
            //         <button onClick={() => console.log(dishes)}>Check</button>
            //         </>)
   
            : <div className="spinner-grow text-secondary" role="status"/>
                }
        </div>
    )
}
const mapStateToProps = state => ({
    dishes: objToArr(state.promiseData.dishes),
    dishesSort: objToArr(sortObjToObj(state.promiseData.dishes, "type")),
    state: state,
    bask: state.dishesBask,
    types: state.typesOfDish
    
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getData: actionGetDishes,
    dishToBask: asyncDishAdd,
    dishOffBask: asyncDishDelete,
}, dispatch);

const CDishList = connect(mapStateToProps, mapDispatchToProps)(DishList);

export default CDishList;