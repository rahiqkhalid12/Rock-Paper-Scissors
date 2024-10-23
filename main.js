function imageshow() {
    var image = document.getElementById("rule-image");
    var exitButton = document.getElementById("exit-button");

    image.style.display = "block"; 
    exitButton.style.display = "block";
};

function imagehide() {
    var image = document.getElementById("rule-image");
    var exitButton = document.getElementById("exit-button");

    image.style.display = "none"; 
    exitButton.style.display = "none";
};

const buttons= Array.from(document.getElementsByClassName('selectable'));
const user_result= document.querySelector('#user-result');
const ai_result= document.querySelector('#AI-result');
const won_text= document.querySelector('#won-text');
const the_game= document.querySelector('.game-container');
const display_result= document.querySelector('.winner');
const display_score= document.querySelector('#score');
const reset= document.querySelector('#reset');

const winer_combo=[
    {
        'selected':'rock',
        'beats' : 'scissors',
        'icon' : '<i class="fa-regular fa-hand-back-fist"></i>'
    },
    {
        'selected':'paper',
        'beats' : 'rock',
        'icon' : '<i class="fa-regular fa-hand"></i>'
    },
    {
        'selected':'scissors',
        'beats' : 'paper',
        'icon' : '<i class="fa-regular fa-hand-scissors"></i>'
    }
];

let player_score=0;

function ai_selected() {
    const randomindex= Math.floor(Math.random() * winer_combo.length);
    return winer_combo[randomindex];
};

buttons.forEach(button => {
    button.addEventListener('click', e=>{
        switch(e.currentTarget.id){
            case 'rock':
                calculatewinner(winer_combo[0], ai_selected())
                break;
            case 'paper':
                calculatewinner(winer_combo[1], ai_selected())
                break;
            case 'scissors':
                calculatewinner(winer_combo[2], ai_selected())
                break;
        }
    });
});

function updateUI(user, ai , outcome) {
    user_result.innerHTML = user.icon;
    user_result.classList.add(`${user.selected}`);

    ai_result.innerHTML = ai.icon;
    ai_result.classList.add(`${ai.selected}`);

    won_text.innerHTML = outcome;
    the_game.classList.add('hide');
    display_result.classList.remove('hide');
};

function calculatewinner(user, ai) {
    if(user.beats == ai.selected){
        display_score.innerHTML= player_score+=1;
        updateUI(user,ai,'You Won!');
        return;
    }
    if(user.selected == ai.selected){
        updateUI(user,ai,'Draw');
        return;
    }
    updateUI(user,ai,'You Lost!');
};

reset.addEventListener('click',()=>{
    the_game.classList.remove('hide');
    display_result.classList.add('hide');
    user_result.className = 'selectable';
    ai_result.className = 'selectable';
});