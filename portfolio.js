var buttonSound = document.querySelectorAll("li");
buttonSound.forEach(function (item) {
    item.addEventListener('mouseup', clickSound);
});

function clickSound(){
    document.getElementById('click-play').play();

}
