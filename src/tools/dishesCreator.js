
function objToArr(obj) {

  let newArr = [];
  for(let key in obj) {
    newArr.push(obj[key]);
  } ;
  return newArr;
}




  function ingredients(name, howMany, ofWhat, type) {
    this.name = name;
    this.howMany = howMany;
    this.ofWhat = ofWhat;
    this.type = type;
}

function dish(name="", type, ingredients, comment){

  this.name = name;
  this.type = type;
  this.ingredients = ingredients;
  this.comment = comment;
}

export {ingredients, dish, objToArr};