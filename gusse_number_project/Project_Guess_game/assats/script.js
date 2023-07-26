'use strict';
const secreatnumber = Math.trunc(Math.random()*15)+1;
let score = 15;
const submitbtn = document.querySelector(".submit");
submitbtn.addEventListener('click',()=>{
    let high_score= document.querySelector('.highscore');
    let result = false;
    const guessnumber = Number(document.querySelector('.input_number').value);
    console.log(guessnumber);
    if(!guessnumber){
        document.querySelector('.result').textContent = '🛑🛑🛑NO Number!';
        score--;
    }else if(guessnumber===secreatnumber){
        document.querySelector('.result').textContent ='💯😍🟢🟢amazing correct';
        result=true;
        document.querySelector('.number').textContent=secreatnumber;
        document.querySelector('body').style.backgroundColor = 'green';
    }else if(guessnumber>secreatnumber){
        document.querySelector('.result').textContent = '😒😒😒ohhh no too high📈 '
        score--;
    }else if(guessnumber<secreatnumber){
        document.querySelector('.result').textContent = '😥😥😥ohhh no too low📉 '
        score--;
    }
    document.querySelector('.score').textContent = '👍😊 Score is :'+score;
    if(score>=10 &&result==true){
        high_score.textContent = '🥇 First Rank And '+score;
    }else
    if(score>5 &&result==true){
        high_score.textContent = '🥈 Second Rank And '+score;
    }
    else if(score>5 &&result==true){
        high_score.textContent = '🥉 Third Rank And Score '+score;
    }
    })

    document.querySelector('.again_btn').addEventListener('click',()=>{
        window.location.reload();
        document.querySelector('.input_number').value = '';
    })