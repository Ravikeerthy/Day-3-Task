let obj1 = {name:"person1",age:5}
let obj2 = {age:5, name:"person1"}


let obj11 = sorting(obj1);
let obj22 = sorting(obj2);

if(obj11 === obj22){
    console.log("It is Equal");
}else{
    console.log("It is Not Equal");
}

function sorting(obj){
   
    return JSON.stringify(obj, Object.keys(obj).sort());
   
}
