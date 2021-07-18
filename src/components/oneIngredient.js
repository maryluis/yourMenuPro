import { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {goodAdd} from "../redux"
import {bindActionCreators, } from 'redux';




const OneIngredient = ({ onAdd, id}) => {



    const [name, changeTittle] = useState(null);
    const [howMany, changeNumber] = useState(null);
    const [ofWhat, changeWhat] = useState("гр");
    const [goodType, changeType] = useState("1");

    useEffect( () => { 
        onAdd(name, id, howMany, ofWhat, goodType);
        }, [name, id, onAdd, howMany, ofWhat, goodType]);

    


    return (
        <div className = "oneIngrForm">

            <input type="text"  placeholder = "Назва інгредінту" onChange = {(e) => changeTittle(e.target.value)}/>
            <input type="number" placeholder="скільки" onChange = {(e) => changeNumber(e.target.value)}/>
            <span className = "spaceBetween">
                <span>чого</span>
                <select onChange = {(e) => changeWhat(e.target.value)}> 
                    <option>гр</option>
                    <option>шт</option>
                    <option>банка</option>
                    <option>зубчиів</option>
                    <option>пачка</option>
                    <option>ст.л</option>
                    <option>пляшка</option>
                    <option>голівка</option>
                </select>
            </span>

            <span className = "spaceBetween">
                <span>тип продукту</span>
                <select onChange = {(e) => changeType(e.target.value)}> 
                    <option value="1">Овочі\фрукти</option>
                    <option value="2">М'ясо</option>
                    <option value="3">Молочний продукт</option>
                    <option value="4">Консерви</option>
                    <option value="5">Крупи</option>
                    <option value="6">Спеції</option>
                    <option value="7">Інше</option>
                </select>
            </span>
      
        </div>
    )
}

const mapStateToProps = state => ({
    state: state,
    count: state.count,
  });


  
  const mapDispatchToProps = dispatch => bindActionCreators({
    onAdd: goodAdd,
  }, dispatch);
  
  const COneIngredient = connect(mapStateToProps, mapDispatchToProps)(OneIngredient);

  export default COneIngredient;