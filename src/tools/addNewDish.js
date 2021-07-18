import {url} from "./index";

async function addDish(data) {

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
        });

    // const newData = await response.json()


}

export default addDish;