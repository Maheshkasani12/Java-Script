// evenlisterns

let startbtn = document.querySelector('#bt-start');
let countbtn =document.querySelector("#bt-count");
let stopbtn = document.querySelector("#bt-stop");

let val=0;

startbtn.addEventListener("click",()=>{
    if(startbtn.innerText === "start"){
        startbtn.innerText= "Begin";
        startbtn.innerHTML='<span>Lets begin</span>'//content to button when click on it
        
    }
    else{
        startbtn.innerText = "start";
    }
})


//for count
countbtn.addEventListener("click",()=>{
    val++;
    console.log(val);
})


//when stop the count stop button get red color
stopbtn.addEventListener("click",()=>{
    // stopbtn.classList.add("btn-red");
    stopbtn.classList.toggle("btn-red");
})






/// to access the input field

let input = document.querySelector(".input");
input.addEventListener("input", () => {
    console.log(input.value);
})