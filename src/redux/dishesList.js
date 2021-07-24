
function dishesListReducer(state = {},{type,  data}) {
    if(type === "PUT_STANDART_LIST") {
        return { ...data};
    }
    return state;
}


const actionStandartList = (data) => ({type: "STANDART_LIST", data});
const actionPutStandartList = (data) => ({type: "PUT_STANDART_LIST", data});

export {dishesListReducer, actionPutStandartList, actionStandartList};
