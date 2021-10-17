var imagenes =["/fotos/hero1.jpg","/fotos/hero2.jpg","/fotos/hero3.jpg"],
     cont = 0;

const skills=[{
    "name": "Python",
    "value": 95},
    {
        "name": "Java",
        "value": 90
    },
    {
        "name": "Javascript",
        "value": 60
    },
    {
        "name": "HTML",
        "value": 65
    },
    {
        "name": "CSS",
        "value": 70
    }
    
]   

const skillSection = document.getElementById("skillsection");
const progressBars = document.querySelectorAll(".progressbar")
const nombre = document.getElementById("name");
const mail = document.getElementById("mail");
const msj = document.getElementById("msj");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");


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

function showProgress(){
    console.log("show");
    progressBars.forEach(progressBar =>{
        for (let i= 0; i < skills.length; i++) {

            let value = skills[i]
            if(progressBar.id==skills[i].name){
                progressBar.style.width = `${skills[i].value}%`;
                progressBar.style.opacity = 1;
                progressBar.innerHTML = `${skills[i].value}%`;
            }
            
        }
    })
}
function hideProgress(){
    console.log("hide");
    progressBars.forEach(progressBar=>{
        progressBar.style.width = 0;
        progressBar.style.opacity = 0;
    })

}
window.addEventListener('scroll', ()=>{
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if(sectionPos< screenPos){
        showProgress();
    }else{
        hideProgress();
    }
})

form.addEventListener("submit", (e)=>{
    let mensajes = [];

    const regex = /^[0-9]*$/;

    if((nombre.value.length<3) || (regex.test(nombre.value))){
        mensajes.push("Ingrese un nombre real")
    }

    if(mail.value.indexOf("@")==-1){
        mensajes.push("Ingrese una dirección de correo válida")
    }
    if(msj.value == " "){
        mensajes.push("Debe ingresar un mensaje")
    }
    if (mensajes.length>0){
        e.preventDefault();
        errorElement.innerText = mensajes.join(", ")
    }else{
        
        console.log(`Nombre: ${nombre.value}`);
        console.log(`Correo Electrónico: ${mail.value}`);
        console.log(`Mensjae: ${msj.value}`);
        alert("Su mensaje fue enviado exitosamente");
        
    }
    
})


