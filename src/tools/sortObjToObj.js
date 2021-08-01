


function sortObjToObj(obj, something) {
    let newObj = {};
    for(let key in obj){
        if(!newObj[obj[key][something]]){
            newObj[obj[key][something]] = [];
        }
        let oneDish = {};
        oneDish.id = key;
        oneDish.dish = obj[key];
        newObj[obj[key][something]].push(oneDish)
    }
    return newObj;
}


export default sortObjToObj;