let button = document.querySelector('#btn');
let myDiv = document.querySelector('#my_div');
for(let i =0 ; i<6 ;i++){
    let myP = document.createElement('p');
    myDiv.appendChild(myP);
}
console.log(myDiv);
document.querySelector('#width').addEventListener('input',event=>{
    console.log(event.originalTarget.value)
    button.style.width = event.originalTarget.value+"px";
    myDiv.children[0].innerHTML ="width: "+ event.originalTarget.value+"px"+";"
});
document.querySelector('#height').addEventListener('input', event=>{
    button.style.height = event.originalTarget.value+"px";
    myDiv.children[1].innerHTML ="height: "+ event.originalTarget.value+"px"+";"
})
document.querySelector('#line-height').addEventListener('input', event=>{
    button.style.lineHeight = event.originalTarget.value+"px";
    myDiv.children[2].innerHTML ="line-height: "+ event.originalTarget.value+"px"+";"
});
console.log(button)
let r = 0 ; let v =0; ; let b = 0  ; let rC = 0 ; let vC =0; ; let bC = 0 ; let xC =0 ; let yC =0; let brC =0;let rB = 0 ; let vB =0; ; let bB = 0 ; let bS = "solid"; let bT = 0

document.querySelector('#rouge').addEventListener('input',function(){
    changerValeurColor();
})
document.querySelector('#vert').addEventListener('input',function(){
    changerValeurColor();
})
document.querySelector('#bleu').addEventListener('input',function(){
    changerValeurColor();
})
document.querySelector('#rougeC').addEventListener('input',function(){
    changerValeurShadow();
})
document.querySelector('#vertC').addEventListener('input',function(){
    changerValeurShadow();
})
document.querySelector('#bleuC').addEventListener('input',function(){
    changerValeurShadow();
})
document.querySelector('#offset-x').addEventListener('input',function(){
    changerValeurShadow();
})
document.querySelector('#offset-y').addEventListener('input',function(){
    changerValeurShadow();
})
document.querySelector('#blur-radius').addEventListener('input',function(){
    changerValeurShadow();
})
document.querySelector('#rougeB').addEventListener('input',function(){
    changerValeurBorder();
})
document.querySelector('#vertB').addEventListener('input',function(){
    changerValeurBorder();
})
document.querySelector('#bleuB').addEventListener('input',function(){
    changerValeurBorder();
})
document.querySelector('#b_style').addEventListener('input',function(){
    changerValeurBorder();
})
document.querySelector('#b_taille').addEventListener('input',function(){
    changerValeurBorder();
})
function changerValeurShadow(){
    rC = document.getElementById("rougeC").value;
    vC = document.getElementById("vertC").value;
    bC = document.getElementById("bleuC").value;
    xC = document.getElementById("offset-x").value+"px";
    yC = document.getElementById("offset-y").value+"px";
    brC = document.getElementById("blur-radius").value+"px";

    button.style.boxShadow = xC+" " +yC+" " +brC+" " +"rgb("+rC+","+vC+","+bC+")" //"10px 20px 30px rgb(22,26,60)" ;
    myDiv.children[4].innerHTML = "box-shadow: "+  button.style.boxShadow;
    // console.log(xC +" " + yC+" " + brC+" " +"rgb("+rC+","+vC+","+bC+")")
    console.log(xC+" " +yC+" " +brC+" " +"rgb(22,26,60)")
     console.log(String(xC+" " + yC+" " +brC+" " + "rgb("+rC+","+vC+","+bC+")"))
console.log( button.style.boxShadow)
}
function changerValeurColor(){
    r = document.getElementById("rouge").value;
    v = document.getElementById("vert").value;
    b = document.getElementById("bleu").value;
    console.log(r,v,b)
    button.style.backgroundColor = "rgb("+r+","+v+","+b+")";
    myDiv.children[3].innerHTML = " background-color: "+"rgb("+r+","+v+","+b+")"+";"
    
}
function changerValeurBorder(){

    rB = document.getElementById("rougeB").value;
    vB = document.getElementById("vertB").value;
    bB = document.getElementById("bleuB").value;
    bs = document.getElementById('b_style').value;
    bT = document.getElementById('b_taille').value+"px";
    button.style.border =  bT+" "+bs+" "+"rgb("+rB+","+vB+","+bB+")";
    myDiv.children[5].innerHTML = "brder: "+  button.style.border;


}
