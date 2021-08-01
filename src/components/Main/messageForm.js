import { useState } from "react";
import {addComment} from "../../tools";
import { useHistory } from "react-router";

const MessageForm = () => {
    const [name, changeName] = useState(null);
    const [comment, changeComment] = useState(null);
    const history = useHistory();

    return(
    <div className="createDishForm marginBottom">
        <h4>Є побажання, пропозиціі чи зауваження?</h4>
        <input type="text" className = "mainInput" placeholder="Ваше ім'я"onChange = {(e) => changeName(e.target.value)}/>
        <textarea onChange = {(e) => changeComment(e.target.value)} placeholder="Комментар"></textarea>

        <button disabled={!name || !comment} onClick={() => { 
            let obj = {};
            obj.name = name;
            obj.comment = comment;
            addComment(obj);
            history.push('/success/')
            }}>Надіслати</button>
    </div>
    )}

export default MessageForm;