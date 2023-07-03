const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let ans = document.querySelector("#btnhexa");
ans.addEventListener('click' , function(){
    const button = document.getElementById("colorchange");
    const color =document.querySelector(".color");
    // const body1 = document.querySelector(".container-main");
    button.addEventListener('click', function(){
        let hexaCode = '#';
        for(let i=0 ; i<6;i++){
            hexaCode += hex[addrendomnumber()];
        }
        color.textContent= hexaCode;
        document.body.style.backgroundColor = hexaCode;
    })
    function addrendomnumber(){
        return Math.floor(Math.random()*hex.length);
    }
})
const simple = ["red" , "green" , "black" , "pink" ,"rgb(0, 191, 255)","rgb(255, 255, 255)","rgba(255, 99, 71, 0.2)"];
let ans1 = document.querySelector("#btnrgb");
ans1.addEventListener('click' , function(){
    const button1 = document.getElementById("colorchange");
    const color1 =document.querySelector(".color");
    // const body1 = document.querySelector(".container-main");
    button1.addEventListener('click', function(){
        let simpleCode = addrendomnumber1();
        document.body.style.backgroundColor = simple[addrendomnumber1()];
        color1.textContent= simple[addrendomnumber1()];
    })
    function addrendomnumber1(){
        return Math.floor(Math.random()*simple.length);
    }
})