Array.prototype.myUniq = function () {
  let result = [];
  this.forEach(el => {
    if (result.includes(el)) {

    } else {
      result.push(el);
    }
  });
  return result;
};

Array.prototype.myTwoSum = function () {
    let result = [];
    for(let i = 0; i < this.length - 1; i++){
      for(let j = i + 1; j < this.length; j++){
        if (this[i] + this[j] === 0){
          result.push([i,j]);
        }
      }
    }
    return result;
};
