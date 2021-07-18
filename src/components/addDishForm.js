import { useState } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, } from 'redux';
import {COneIngredient} from "./index";
import {dish, addDish} from "../tools";





const DishForm = (data) => {

    const [numberGoods, changeNumber] = useState([0]);
    const [dishTitle, changeTitle] = useState(null);
    const [dishType, changeType] = useState("1");
    const [comment, changeComment] = useState(null);



    
    
    return(
        <div className="createDishForm">
            <h2>Створення нового блюда</h2>



            <input type="text" className = "mainInput" placeholder="Назва кулінарного шедевра"onChange = {(e) => changeTitle(e.target.value)}/>
            <h4>Тип блюда</h4>
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

            <h4 className = "toIngr">Що потрібно:</h4>

                <div>

                    {numberGoods.map((number) => <COneIngredient key = {number} id = {number}/>)}

                    <button onClick = {(e) => { 
                        e.preventDefault();
                        changeNumber([...numberGoods, numberGoods.length])}}>Додати інгредієнт</button>


                </div>

                <textarea onChange = {(e) => changeComment(e.target.value)} placeholder="Як готувати? (за бажанням)"></textarea>

                <button  type="submit" onClick = {(e) => {e.preventDefault()
                addDish(new dish(dishTitle, dishType, data.data, comment))}}>Створити</button>


        </div>
    )
}

const mapStateToProps = state => ({
    data: state && state.newGoods,

  });


  
  const mapDispatchToProps = dispatch => bindActionCreators({
    // onAdd: goodAdd,
    // addDish: dish,
  }, dispatch);
  
  const CDishForm = connect(mapStateToProps, mapDispatchToProps)(DishForm);

export default CDishForm;