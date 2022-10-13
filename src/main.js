function camaleon(){
    let x=Math.floor(Math.random()*256);
    let y=Math.floor(Math.random()*256);
    let z=Math.floor(Math.random()*256);
    color = `rgb(${x},${y},${z})`;
    texto=document.getElementById("ColorString")
    texto.textContent=color;
    texto.style.color = `rgb(${z},${x},${y})`;
    document.getElementById('contenedor').style.background=color; 
}
