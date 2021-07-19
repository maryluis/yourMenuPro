import { useEffect } from 'react';
import { connect } from 'react-redux';
import { actionGetDishes } from '../redux';
import { bindActionCreators } from 'redux';

const DishList = ({dishes, getData}) => {
    useEffect(() => { 
        getData()

    }, [getData])
    return(
        <div>
            <button onClick = {() => console.log(dishes)}>Check</button>
        </div>
    )
}
const mapStateToProps = state => ({
    dishes: state,
    
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getData: actionGetDishes,
}, dispatch);

const CDishList = connect(mapStateToProps, mapDispatchToProps)(DishList);

export default CDishList;