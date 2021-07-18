import { useState } from 'react';
import {connect} from 'react-redux';
import {goodAdd} from "../redux"
import {bindActionCreators, } from 'redux';
import {COneIngredient} from "./index";
import {ingredients, dish, objToArr} from "../tools";





const DishForm = (data) => {

    const [numberGoods, changeNumber] = useState([0]);
    const [dishTitle, changeTitle] = useState(null);
    const [dishType, changeType] = useState("1");



    
    
    return(
        <div>
            <h3>Створення нового блюда</h3>

            <form>

            <input type="text"  placeholder="Назва кулінарного шедевра"onChange = {(e) => changeTitle(e.target.value)}/>
            <span>Тип блюда</span>
            <select onChange = {(e) => changeType(e.target.value)}> 
                <option value="1">Перша страва</option>
                <option value="2">Друга страва</option>
                <option value="3">М'ясне</option>
                <option value="4">Салат</option>
                <option value="5">Десерт</option>
                <option value="6">Гарнір</option>
                <option value="7">Швидке готування</option>
                <option value="8">Інше</option>
            </select>


                <div>
                    <h5>Що потрібно</h5>

                    {numberGoods.map((number) => <COneIngredient key = {number} id = {number}/>)}

                    <button onClick = {(e) => { 
                        e.preventDefault();
                        changeNumber([...numberGoods, numberGoods.length])}}>Додати інгредієнт</button>


                </div>
                <button  type="submit" onClick = {(e) => {e.preventDefault()
                console.log(new dish(dishTitle, dishType, data.data))}}>Створити</button>
            </form>

            
                    <button onClick = {(e) => { e.preventDefault() 
                    console.log(data.data)}}>Checck</button>
        </div>
    )
}

const mapStateToProps = state => ({
    data: state && state.newGoods,

  });


  
  const mapDispatchToProps = dispatch => bindActionCreators({
    onAdd: goodAdd,
    // addDish: dish,
  }, dispatch);
  
  const CDishForm = connect(mapStateToProps, mapDispatchToProps)(DishForm);

export default CDishForm;