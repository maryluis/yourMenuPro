

function checkInclude(obj, check) {

    let checker = [];
    for (let key in obj) {
        let smallChecker = [];
        for (let i of check) {
            if (obj[key][i]) {
                smallChecker.push(false);
            } else {
                smallChecker.push(true);
            }

        } 
        if (smallChecker.indexOf(true) !== -1 ) {
            checker.push(true);
        } else {
            checker.push(false);
        }
    }
    if( checker.indexOf(false) !== -1) {
        return false;
    } else {
        return true;
    }
}
export {checkInclude};