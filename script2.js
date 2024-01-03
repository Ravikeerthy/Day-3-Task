let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all");

request.send();

request.onload = function(){
    let res = JSON.parse(request.response);
    console.log(res);

    for(let i = 0; i<res.length; i++){
        // console.log(res[i].population);
        // console.log(res[i].name);
        // console.log(res[i].region);
        console.log(res[i].subregion);
        }
}