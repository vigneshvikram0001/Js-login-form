let x= document.getElementById("form1");
let y= document.getElementById("form2");
let z= document.getElementById("ani");

function sign(){
    x.style.left="-350px";
    y.style.left="0px";
    z.style.left="50%";
}
function log(){
    x.style.left="0px";
    y.style.left="350px";
    z.style.left="0%";
}

function alert1(){
    a.target.value ="";
    alert("You have Logged in");
}

function alert2(){
    a.target.value ="";
    alert("You Data has been added successfully");
}

let a= document.getElementsByName("input-clear");
