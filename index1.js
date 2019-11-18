var func = function(array){
  return "В массиве находятся " + array.length + " элементов!";
};

var multiply = function(x, y){
  return `${x} умножить на ${y} равно ${x*y}`;
}

var value = 451;
module.exports.func = func;
module.exports.multiply = multiply;
module.exports.value = value;
