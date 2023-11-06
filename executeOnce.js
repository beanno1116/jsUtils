

/* */

function executeOnce(fn){
  let didRun = false;
  let fnRet;
  debugger;
  return function runFunctionOnce(){
    debugger;
    if (didRun) return `Original return data from first function call: ${fnRet}`;
    fnRet = fn.apply(this,arguments);
    didRun = true;
    return fnRet;
  }
}

/* experimental */
function* executeOnceGenerator(fn){
  yield fn.apply(this,arguments);  
}

function fullName(fName,lName){
  return fName + " " + lName;
}


const fullNameExample = () => {

  console.log("calling using executeOnce() first call");

  const getFullName = executeOnce(fullName);

  console.log(getFullName("ben","klima"));


  console.log("calling using executeOnce() second call attempt");
  console.log(getFullName("ben","klima"));

  console.log("calling using executeOnce() third call attempt");
  console.log(getFullName("ben","klima"));

}
// fullNameExample();







