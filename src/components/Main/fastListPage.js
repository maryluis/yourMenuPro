import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { OneDish, CShopList, CToFastStart } from '..';
import { objToArr } from '../../tools';
import { asyncDishDelete, asyncDishAdd } from '../../redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router';



const FastListPage = ({dishes, bask, dishOffBask, dishAdd}) => {
    const history = useHistory();
    useEffect(() => !dishes.length && history.push('/'), [dishes, history])
    return(
        <div className = "flexColumn marginForSmall flexCenter">
            <h3 className="width createDishForm textCenter">Ми вам пропонуємо ці блюда</h3>
            <div className = "flexRow flexWrap">
                            {dishes.map((dish) => 
                            <OneDish key = {dish.id} dish = {dish}  basket = {bask} 
                                putDish={dishAdd} goodsArr = {dish.dish.ingredients} dishOff = {dishOffBask} 
                                comment = {dish.dish.comment}/>)}
            </div>
            <div className="width createDishForm paddingOver flexCenter">
                <h3 className = "textCenter">Якщо все подобається - ловіть список</h3>
                <CShopList/>
            </div>
            <div className = "width createDishForm paddingOver">
                <h3 className = "textCenter">Нічого не подобається? Спробуйте ще раз</h3>
                <CToFastStart classStyle="fastListBottom" />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    dishes: objToArr(state.fastDishList),
    state: state,
    bask: state.dishesBask,
    
});

const mapDispatchToProps = dispatch => bindActionCreators({
    dishOffBask: asyncDishDelete,
    dishAdd: asyncDishAdd,
    //clearBask: asyncClearDishes,
    //createList: actionStandartList
}, dispatch);

const CFastListPage = connect(mapStateToProps, mapDispatchToProps)(FastListPage);
export default CFastListPage;