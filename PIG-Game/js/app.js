const score0 = document.querySelector('#score-0');
const score1 = document.querySelector('#score-1');
const diceshow = document.querySelector('.dice');
const restart = document.querySelector('.btn-new');
const hold = document.querySelector('.btn-hold');
const btnroll = document.querySelector('.btn-roll');
const currfirst = document.querySelector('#current-0');
const currsecond = document.querySelector('#current-1');
const player1 = document.querySelector('.player-0-panel');
const player2 = document.querySelector('.player-1-panel');
const inputValue = document.querySelector('.btn__input');
const playerPanels = document.querySelectorAll('.player-0-panel, .player-1-panel');
const activeClass = 'active';
const value = inputValue.value;
score1.textContent="0";
score0.textContent="0";
diceshow.classList.add('hidden');
let score = [0,0];
let curruntscore = 0;
let activPlayer = 0;
const switchPlayer = ()=>{
    document.getElementById(`current-${activPlayer}`).textContent = 0;
    curruntscore=0;
    activPlayer = activPlayer === 0 ? 1:0;
    curruntscore += curruntscore;
    playerPanels.forEach(panel => panel.classList.toggle(activeClass));
     player1.classList.toggle(activPlayer);
     player2.classList.toggle(activPlayer);
}
btnroll.addEventListener('click', ()=>{
    let dice = Math.trunc(Math.random() * 6 ) + 1;
    console.log(dice);
    diceshow.classList.remove('hidden');
     diceshow.src = `dice-${dice}.png`;

     if(dice !== 1){
        curruntscore += dice;
        document.getElementById(`current-${activPlayer}`).textContent = curruntscore;
     }else{
        switchPlayer();
     }
})
hold.addEventListener('click' , ()=>{
       score[activPlayer] += curruntscore;
       document.getElementById(`score-${activPlayer}`).textContent = score[activPlayer];

       if(score[activPlayer] >= value){
        // document.querySelector(`player-${activPlayer}-panel`).classList.add('player winner');
        document.querySelector('#name-'+activPlayer).textContent = 'WINNER !';
       }                                                                          
       switchPlayer();
})
restart.addEventListener('click',()=>{
    window.location.reload();
    // inputValue.value='';
})
 // Get the value entered in the input element
console.log('Fetched Value:', value); 