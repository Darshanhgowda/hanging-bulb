const btnOn = document.getElementById('buttonOn');
const btnOff = document.getElementById('bulb-off');
const icon = document.getElementById('icon');

var isBulbon = false;

function swithOnBulb() {
    isBulbon = !isBulbon;// true
    console.log(isBulbon)

    if(isBulbon){
        btnOff.style.backgroundColor = "blanchedalmond";//blanchedalmond
        btnOff.style.boxShadow = '0px 10px 20px #daa505, 0px 10px 60px #daa505, 0px 10px 80px #daa505, 0px 10px 200px #daa505, inset 20px 0px 60px #daad0a';
        icon.style.color = 'yellow';
    }else{
        btnOff.style.backgroundColor = "grey";
        icon.style.color = '#000';
        btnOff.style.boxShadow = 'inset 10px 0px 20px #4c4949,inset 10px 0px 40px #000, inset 20px 0px 60px #000';

    }
    
}