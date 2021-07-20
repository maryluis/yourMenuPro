


function goodsCreator(state, {type, title,  id, howMany, ofWhat, goodType,}) {

    if(state === undefined) {
        state = {};
    }
    if(type === 'ADD_GOOD') {
        state = {
            ...state,
            [id]: {title: title,
                    howMany: howMany,
                    ofWhat: ofWhat,
                    goodType: goodType},
            
        }
    }


    return state;
}


const goodAdd = (title, id, howMany, ofWhat, goodType, type,) => ({
    type: 'ADD_GOOD',
    id,
    title,
    howMany,
    ofWhat,
    goodType

});

export {goodsCreator, goodAdd};