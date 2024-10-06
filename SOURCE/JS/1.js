function updateImageBasedOnWindowSize(caminho,caminho2,caminho3,caminho4) {
    var windowWidth = window.innerWidth;

    var top = document.querySelector("#aba");

    if (windowWidth <= 386) {
        top.src = caminho;
    }else if(windowWidth <= 500){
        top.src = caminho2;
    }
    else if(windowWidth <= 670){
        top.src = caminho3;
    }
    else {
        top.src = caminho4;
    }
}

// Chama a função inicialmente para garantir que a imagem esteja correta quando a página carregar
function update(){
    updateImageBasedOnWindowSize("./SOURCE/STYLES/IMG/SITES/HOME/cel.png","./SOURCE/STYLES/IMG/SITES/HOME/tablet.png","./SOURCE/STYLES/IMG/SITES/HOME/notebook.jpg","./SOURCE/STYLES/IMG/SITES/HOME/descktop.jpg");
}
// Adiciona o evento de "resize" para verificar quando a janela for redimensionada
window.addEventListener('resize', update);
update();