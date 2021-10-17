var imagenes =["/fotos/hero1.jpg","/fotos/hero2.jpg","/fotos/hero3.jpg"],
     cont = 0;

function carrousel(contenedor){
    contenedor.addEventListener("click", e=> {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;

        if (tgt == atras){
            console.log('atras')
            if (cont>0){
                img.src= imagenes[cont -1];
                cont--;
            }else{
                img.src = imagenes[imagenes.length-1];
                cont=imagenes.length-1;
            }
        }else if (tgt == adelante){
            console.log('adelante')
            if(cont<imagenes.length-1){
                img.src = imagenes[cont+1]
                cont++;
            } else{
                img.src = imagenes[0];
                cont = 0;
            }

        }
    } );
    }

document.addEventListener("DOMContentLoaded",()=>{
    let container = document.querySelector('.hero-container');
    carrousel(container);
});