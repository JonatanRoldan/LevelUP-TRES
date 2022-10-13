function camaleon(){
    let x=Math.floor(Math.random()*256);
    let y=Math.floor(Math.random()*256);
    let z=Math.floor(Math.random()*256);
    color = `rgb(${x},${y},${z})`;
    let bg=document.getElementById('contenedor').style.background=color; 
}
