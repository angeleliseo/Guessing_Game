document.getElementById("btnPlay").addEventListener("click",function (){
    playGame(document.getElementById("txtGuess").value);
});
document.getElementById("btnRestart").addEventListener("click", function(){
    myGame.restart();
    document.getElementById("txtGuess").value ="0";
    
});