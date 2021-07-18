import {url} from "./index";

async function addDish(data) {
    const response =   await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
        });

    const newData = await response.json()
    console.log(newData)

}

export default addDish;