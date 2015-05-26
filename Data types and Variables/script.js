var justString = "Chew, baka!"
var randomNumber = 4; // It's a joke from one of Evlogi's lectures. Never make this kind of variable!
var isTrue = true;

function solveFirst(){
    document.getElementById("outputOne").innerHTML = justString + "<br>" + randomNumber + "<br>" + isTrue;
};
// Very noobish approach but still works.
function hideFirst(){
    document.getElementById("outputOne").innerHTML = "";
}

var joeyPickUp = '\'How you doin\'?\', Joey said.';

function solveSecond(){
    document.getElementById("outputTwo").innerHTML = joeyPickUp;
};

function hideSecond(){
    document.getElementById("outputTwo").innerHTML = "";
}

function solveThird(){
    document.getElementById("outputThree").innerHTML = justString + ' has typeof: ' + typeof justString + "<br>" +
        randomNumber + ' has typeof: ' + typeof randomNumber + "<br>" + isTrue + ' has typeof: ' + typeof isTrue;
};

function hideThird(){
    document.getElementById("outputThree").innerHTML = "";
}

var imNull = null;
var imUndefined;

function solveFourth(){
    document.getElementById("outputFour").innerHTML = imNull + ' has typeof: ' + typeof imNull + "<br>" +
        imUndefined + ' has typeof: ' + typeof imUndefined;
};

function hideFourth(){
    document.getElementById("outputFour").innerHTML = "";
}

function superSecretStuff(){
    window.open("https://www.youtube.com/watch?v=Xu3FTEmN-eg")
}
