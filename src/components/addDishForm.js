import { useState } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, } from 'redux';
import {COneIngredient} from "./index";
import {dish, addDish, checkInclude} from "../tools";
import {useHistory} from 'react-router-dom';






const DishForm = (data) => {

    const [numberGoods, changeNumber] = useState([0]);
    const [dishTitle, changeTitle] = useState("");
    const [dishType, changeType] = useState("1");
    const [comment, changeComment] = useState(null);
    const history = useHistory();



    
    
    return(
        <div className="createDishForm marginBottom">
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
                    <div className = "btnCenter" >
                        <button onClick = {(e) => { 
                            e.preventDefault();
                            changeNumber([...numberGoods, numberGoods.length])}}>Додати інгредієнт</button>
                    </div>


                </div>
                

                <textarea onChange = {(e) => changeComment(e.target.value)} placeholder="Як готувати? (за бажанням)"></textarea>

                <button disabled = {dishTitle.length < 2 || !data.data || checkInclude(data.data, ['title', 'howMany'])} type="submit" onClick = {
                    async (e) => {
                        e.preventDefault();
                        let goods = {...data.data}
                        for(let key in goods) {
                            if(goods[key].title.length === 0 || goods[key].howMany.length === 0) {
                                delete goods[key]
                            }
                        }
                       await addDish(new dish(dishTitle, dishType, goods, comment))
                        history.push("/dishes-list/")}}>Створити</button>


        </div>
    )
}

const mapStateToProps = state => ({
    data: state && state.newGoods,

  });


  
  const mapDispatchToProps = dispatch => bindActionCreators({
  }, dispatch);
  
  const CDishForm = connect(mapStateToProps, mapDispatchToProps)(DishForm);

export default CDishForm;