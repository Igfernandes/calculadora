document.addEventListener("DOMContentLoaded", function(event) {
    
    
    var calculadora = function (){
        var visor = document.getElementsByClassName('calcView')
        switch(this.value){
            case 'limpar':
                visor[0].value = null;
                break;
            case '*':
                visor[0].value += " x ";
                break;
            case '/':
                visor[0].value += " "+ this.value+" ";
                break;
            case '+':
                visor[0].value += " "+this.value+" ";
                break;
            case '-':
                visor[0].value += " "+this.value+" ";
                break;
            case '=':
                var valor = visor[0].value
                if(valor.indexOf('x') != null){
                    valor = valor.replace('x','*')
                }
                visor[0].value = eval(valor);
                break;
            default:
                visor[0].value += this.value;
                break;
        }
        

    }

    var button = document.getElementsByTagName('button')

    for(var btnItens of button){
        btnItens.addEventListener('click', calculadora)
    }
})