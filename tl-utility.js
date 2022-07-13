const tlFind = (arr, element) => {
        if(Array.isArray(arr))
        {
            for(var i=0; i<arr.length; i++){
                if(arr[i] === element){
                  return arr[i];
                }
            }
            return -1;
        } 
};

const tlFindIndex = (arr, element) => {
       if(Array.isArray(arr))
        {
            for(var i=0; i<arr.length; i++){
                if(arr[i] === element){
                  return i;
                }
            }
            return -1;
        } 
};

const tlContain = (arr, element) => {
    if(Array.isArray(arr))
     {
         for(var i=0; i<arr.length; i++){
             if(arr[i] === element){
               return true
             }
         }
         return false;
     } 
};

const tlMin = (arr) => {
    var len = arr.length, min = Infinity;
    if(Array.isArray(arr))
    {
      while (len--) {
        if (arr[len] < min) {
          min = arr[len];
        }
      }
      return min;
    }
};

const tlMax = (arr) => {
    var len = arr.length, max = -Infinity;
    if(Array.isArray(arr))
    {
      while (len--) {
        if (arr[len] > max) {
          max = arr[len];
        }
      }
      return max;
    }
};

module.exports= {
    tlFind,
    tlFindIndex,
    tlContain,
    tlMin,
    tlMax
};


