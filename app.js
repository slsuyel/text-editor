function change(ID, value){
    document.getElementById(ID).style.textAlign = value;
}

function clearStyle(){
 const text =document.getElementById('text-valu').value;
 document.getElementById('text-valu').style.fontStyle = "normal";
 change('text-valu',"left");
 document.getElementById('text-valu').style.fontWeight = "400";
 document.getElementById('text-valu').style.color = "black";

}

document.getElementById('btn-right').addEventListener('click',function(){
change('text-valu',"right")
})
document.getElementById('btn-center').addEventListener('click',function(){
    change('text-valu',"center")
})
document.getElementById('btn-left').addEventListener('click',function(){
    change('text-valu',"left")
})

document.getElementById('btn-bold').addEventListener('click',function(){
document.getElementById('text-valu').style.fontWeight = "900";
})

document.getElementById('btn-italic').addEventListener('click',function(){
document.getElementById('text-valu').style.fontStyle = "italic";
})


document.getElementById('color-code').addEventListener('change',function(e){
    const text = document.getElementById('text-valu');
    text.style.color = e.target.value; 
})
document.getElementById('clear-btn').addEventListener('click',function(){
    document.getElementById('text-valu').value = ''
    clearStyle()
})