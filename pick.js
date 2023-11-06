

function pick(obj,keys){
  
  return keys.reduce((acc,key) => {
    
    if (obj.hasOwnProperty(key)) {
    
      acc[key] = obj[key];
    
    }
    
    return acc;

  },{});
}

const pickExample = () => {

  var exObj = {
    first: "ben",
    middle: "alan",
    last: "klima",
    age: 40,
    sex: 'M'
  }

  var keysToPick = [
    "first",
    "middle",
    "last"
  ]

  var objectFromKeys = pick(exObj,keysToPick);

  console.log(objectFromKeys);

}