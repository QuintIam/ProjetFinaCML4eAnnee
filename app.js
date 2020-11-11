function getNumber(num){
    var input_var = document.getElementById('input');
    input_var.value+=num;
    
}
//trouver les signes d'operations
function getOperand(operand) {
    var input_var = document.getElementById('input');
    switch(operand){
        case'+':
            input_var.value += '+';
            break;

        case'-':
            input_var.value += '-';
            break;

        case'x':
            input_var.value += '*';
            break;

        case'/':
            input_var.value += '/';
            break;

        case'+/-':
        input_var.value += '-' + input_var.value;    
    }
}

// Suppression de l'ecran...
function clearScreen(){
document.getElementById('input').value="";
document.getElementById('answer').value="";
}

//Fonction d'espace
function backspace(){
    var input_var = document.getElementById('input');
    var x = input_var.value;
    if (x.length> 0){
        x = x.substring(0, x.length-1); //Supprimer la derniere caractere de l'ecran
        input_var.value = x;
    }
}
    function compute(){
        input_var = document.getElementById('input');
        ans =Math.floor(+eval(input_var.value));
        document.getElementById('answer').value = '' + ans;
    }
      var i = 0;
    function brackets(){
        var input_var = document.getElementById('input');
        if (i == 0){
            input_var.value += '(';
            i = 1;
        }else if (i == 1){
            input_var.value += ')';
            i = 0;
        }
    }
