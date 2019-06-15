var game, startButton;

window.onload = function(){
    var container = document.getElementById("container_2048");
    startButton = document.getElementById("start");
    startButton.onclick = function(){
        this.style.display = "none";
        game = game || new game_2048_setting(container);
        game.init();
    }
}
 
window.onkeydown = function(e){
    var keynum;
    event.preventDefault();
    if(window.event){       // IE
        keynum = e.keyCode;
    }
    else if(e.which){       // Netscape/Firefox/Opera
        keynum = e.which;
    }
    console.log(keynum);
    if(keynum >= 37 && keynum <= 40){
        if(game.over()){
            game.clean();
            startButton.style.display = "block";
            startButton.innerHTML = "Game over, replay?";
            return;
        }
        if(game.max()){
            game.clean();
            startButton.style.display = "block";
            startButton.innerHTML = "Congratulation, replay?";
            return;
        }
        game.move(keynum);
    }
}