//PASSWORD LENGHT COMBOBOX LOAD

function loadcombo(){

    var  combolength = document.getElementById("pwdlength");
    

    for(var i=8; i<41; i++){
        var option = document.createElement("option");
        option.text = i;
        combolength.add(option);
    }

};


//DOM VARIABLES DECLARATIONS
var numbers = document.getElementById("numbers");
var lowercase = document.getElementById("lowercase");
var uppercase = document.getElementById("uppercase");
var chars = document.getElementById("chars");
var exchars = document.getElementById("exchars");
var pwdlength = document.getElementById("pwdlength");
var resultspw = document.getElementById("resultspw");
var generatebtn = document.getElementById("generatebtn");
var btncopy = document.getElementById("btn-copy");

//PASSWORD GENERATOR'

function getRandomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
 }

 function getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
   }

   function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
 }


 function getRandomSymbol(){
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random()*symbol.length)];
}


const randomFunc = {
    upper : getRandomUpperCase,
    lower : getRandomLowerCase,
    number : getRandomNumber,
    symbol : getRandomSymbol
};

generatebtn.addEventListener('click', () => {

    const length =+ pwdlength.value;
    const hasUpper = uppercase.checked;
    const hasLower = lowercase.checked;
    const hasNumber = numbers.checked;
    const hasSymbol = chars.checked;

    resultspw.value = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});


//Generate Password Function
function generatePassword(upper, lower, number, symbol, length){
    let generatedPassword = "";

    const typesCount = upper + lower + number + symbol;

    console.log(typesCount);

    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    }

    for(let i=0; i<length; i+=typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);


    return finalPassword;
   
}


btncopy.addEventListener('click', () => {

    resultspw.select();
    document.execCommand("copy");
    // $('#copied').show();
    // $('#copy').hide();

});

$('#btn-copy').on('mousedown', function() {
    setTimeout( () => {
        $('#copy').hide();
        $('#copied').show();
    }, 10);
}).on('mouseup mouseleave', function() {
    setTimeout( () => {
        $('#copied').hide();
        $('#copy').show();
    }, 500);
});



loadcombo();