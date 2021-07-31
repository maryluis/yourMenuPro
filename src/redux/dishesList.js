
function dishesListReducer(state = {},{type,  data}) {
    if(type === "PUT_STANDART_LIST" || type === "PUT_FAST_LIST") {
        return { ...data};
    }
    return state;
}


const actionStandartList = (data) => ({type: "STANDART_LIST", data});
const actionPutStandartList = (data) => ({type: "PUT_STANDART_LIST", data});

const actionFastList = (data) => ({type: "FAST_LIST", data});
const actionPutFastList = (data) => ({type: "PUT_FAST_LIST", data});


export {dishesListReducer, actionPutStandartList, actionStandartList, actionPutFastList, actionFastList};
