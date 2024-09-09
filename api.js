// API_URL="https://www.themealdb.com/api/json/v1/1/categories.php"
// x=fetch(API_URL)
// console.log(x);      out:Promise { <pending> }

// api url and html ul connction
const API_URL="https://www.themealdb.com/api/json/v1/1/categories.php"
const dishListEl = document.getElementById("dish-list")

// function for adding li with img with the use with data
function updateDom(data){
   data.categories.forEach((dish)=>{
    const li=document.createElement("li")
    li.innerHTML=`
    <img src='${dish.strCategoryThumb}'>
    <h3>${dish.strCategory}</h3>
    `
    dishListEl.appendChild(li)
   })
}
// data fetching
// ----------------
// data fecthing(fetch output is same as promise)
// ---------------------------------------------
// fetch(API_URL)
    // .then(function (response){
    //     return response.json()
    // })
    // .then(function (data){
    //     console.log("the data is",data);
    //     updateDom(data)
    // })
    // .then((response)=>updateDom(response.json()))    /* this work like  updatedom is in synchronus */
    
    
// data fecthing (same but write in arrow function)
// -----------------------------------------------
    // fetch(API_URL)
    // .then((response)=>response.json()).then((data)=>updateDom(data))

// data fetching with the help of async and await
// ----------------------------------------------
   async function getData(){
    response= await fetch(API_URL)
    responseData=await response.json()  /*in json covert also take time so that leads asynchronus */
    // updateDom(responseData)
    responseData && updateDom(responseData) /*if response data occur then only update to updateDom,the above line and this line as similiar but this line is make sure */
    }
    getData()