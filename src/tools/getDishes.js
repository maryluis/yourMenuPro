import axios from "axios";
import { url} from "./";



async function getDishes() {
    const dishes = await axios.get(url);
    return dishes;
}


export default getDishes;