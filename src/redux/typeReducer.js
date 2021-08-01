function dishesTypes(state) {
    if(state === undefined) {
        state = {
                    1: "Перші страви",
                    2: "Другі страви",
                    3: "М'ясне",
                    4: "Салати",
                    5: "Десерти",
                    6: "Гарніри",
                    7: "Швидкі страви",
                    8: "Інше"

                }
    }

    return state
}
export {dishesTypes}