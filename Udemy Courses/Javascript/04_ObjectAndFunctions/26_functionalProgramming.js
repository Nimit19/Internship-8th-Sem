function mapForEach(arr, fun) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fun(arr[i]));
  }
  return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(val){
    return val * 2;
});
console.log(arr2);

var arr3 = mapForEach(arr1, function(val){
    return val > 2;
});
console.log(arr3);

var checkPastLimit = function(limiter, val){
    return val > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this,1));
console.log(arr4);

function checkPastLimitSimplified(limiter){
    return function(limit,val){
        return val > limit;
    }.bind(this,limiter);
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);
