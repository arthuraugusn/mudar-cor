'use strict';
const aplicar = document.getElementById('aplicar');

function mudarCor(){
    const cor = document.getElementById('cor').value;
    let color = cor.toUpperCase();
    if(color == 'AZUL'){
        body.style.background= '#0000FF';
        document.getElementById('h1').style.color= '#FFFFFF';
    }else if(color == 'AMARELO'){
        body.style.background= '#FFFF00';
        document.getElementById('h1').style.color= '#000000';
    }else if(color == 'VERDE'){
        body.style.background = '#008000';
    }else if(color == 'VERMELHO'){
        body.style.background= '#FF0000';
        document.getElementById('h1').style.color= '#FFFFFF';
    }else if(color == 'BRANCO'){
        body.style.background= '#FFFFFF';
        document.getElementById('h1').style.color= '#000000';
    }else if(color == 'PRETO'){
        body.style.background= '#000000';
        document.getElementById('h1').style.color= '#FFFFFF';
    }
/*     switch(cor.toUpperCase()){
        case 'AZUL':
            body.style.background= '#0000FF';
            break;
        case 'AMARELO':
            body.style.background= '#FFFF00';
            break;
        case 'VERDE':
            body.style.background = '#008000';
            break;
        case 'VERMELHO':
            body.style.background= '#FF0000';
            break;
    } */
}

cor.addEventListener('change', mudarCor);
/* document.addEventListener('keypress', (event) =>{
    if(event.keyCode == 13){
        mudarCor();
    }
}) */
