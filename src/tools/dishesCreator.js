
function objToArr(obj) {
  debugger
  let newArr = [];
  for(let key in obj) {
    newArr.push(obj.key);
  } ;
  return newArr;
}




  function ingredients(name, howMany, ofWhat, type) {
    this.name = name;
    this.howMany = howMany;
    this.ofWhat = ofWhat;
    this. type = type;
}

function dish(name="", type, ingredients){

  this.name = name;
  this.type = type;
  this.ingredients = ingredients;
}

export {ingredients, dish, objToArr};