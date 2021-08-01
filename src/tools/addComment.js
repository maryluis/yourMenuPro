import {urlMess} from "./index";

async function addComment(data) {

    await fetch(urlMess, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
        });

    // const newData = await response.json()


}

export default addComment;