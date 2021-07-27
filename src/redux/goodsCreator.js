


function goodsCreator(state, {type, data}) {

    if(state === undefined) {
        state = {};
    }
    if(type === 'ADD_GOOD') {

        state = {
            ...state,
            [data.data.id]: {title: data.data.title,
                    howMany: data.data.howMany,
                    ofWhat: data.data.ofWhat,
                    goodType: data.data.goodType},
            
        }
    }


    return state;
}


const goodAdd = (data) => ({

    type: 'ADD_GOOD',
    data: data

});
const asyncGoodAdd = (title, id, howMany, ofWhat, goodType, type,) => ({
    type: 'ASYNC_ADD_GOOD', data:{
    id,
    title,
    howMany,
    ofWhat,
    goodType
    }
});

export {goodsCreator, goodAdd, asyncGoodAdd};