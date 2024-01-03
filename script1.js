let result = new XMLHttpRequest();

result.open("GET", "https://restcountries.com/v3.1/all");

result.send();

 result.onload = function(){
    let res = JSON.parse(result.response);
    console.log(res);

    for(let i = 0; i<res.length; i++){
        console.log(res[i].flags);
        }
 }