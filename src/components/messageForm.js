import { useState } from "react"

const MessageForm = () => {
    const [name, changeName] = useState(null);
    const [comment, changeComment] = useState(null);

    return(
    <div className="createDishForm marginBottom">
        <h4>Є побажання, пропозиціі чи зауваження?</h4>
        <input type="text" className = "mainInput" placeholder="Ваше ім'я"onChange = {(e) => changeName(e.target.value)}/>
        <textarea onChange = {(e) => changeComment(e.target.value)} placeholder="Комментар"></textarea>

        <button onClick={() => console.log(`${name}: ${comment}`)}>Надіслати</button>
    </div>
    )}

export default MessageForm;