//bg color changing
 function changeStyle(){
  var element = document.getElementById("changeStyle");
  element.style.backgroundColor="lightblue";
 }

 //bg color changing of the button
// let elt = document.getElementById('changeStyle');    
// elt.addEventListener('click', function() {         
// elt.innerHTML = "C'est cliqué !";  
// elt.style.backgroundColor="red";            
// });
  

//Font size changing
function font(){
    var f = document.getElementById("fontch");
    f.style.fontSize = "30px";
    f.style.fontFamily="cursive"
}

//go to to another page
function nextPage(){
locationObj = document.location
document.location.href = './public/pages/contact.html'
console.log(document.location);
// Prints a Location object to the console
}

//mouseenter & over
let test = document.getElementById("hoverr");

// // Ce gestionnaire ne sera exécuté qu'une fois
// // lorsque le curseur se déplace sur la liste
 hoverr.addEventListener("mouseenter", function( event ) {
//   // on met l'accent sur la cible de mouseenter
   event.target.style.color = "green";

//   // on réinitialise la couleur après quelques instants
   setTimeout(function() {
    event.target.style.color = "";
  }, 500);
 }, false);

// Ce gestionnaire sera exécuté à chaque fois que le curseur
// se déplacera sur un autre élément de la liste
hoverr.addEventListener("mouseover", function( event ) {
  // on met l'accent sur la cible de mouseover
  event.target.style.color = "orange";

  // on réinitialise la couleur après quelques instants
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


//Disparaitre & apparaitre  des texte

function affiche() 
  {
  if (document.getElementById && document.getElementById('contenu') != null) 
    {
    document.getElementById('contenu').style.visibility='visible';
    document.getElementById('contenu').style.display='block';
    }
  }
 
function cache() 
  {
  if (document.getElementById && document.getElementById('contenu') != null) 
    {
    document.getElementById('contenu').style.visibility='hidden';
    document.getElementById('contenu').style.display='none';
    }
  }
 
cache(); 

//

function checkCookies() {
  // var text = "";

  if (navigator.cookieEnabled == true) {
    // text = "Cookies are enabled.";
    let nom = prompt("Enter your name:");
    alert("Hello " +nom+ " & welcome to my Website, you can enjoy here by bringing some changes into my page. Have fun " + nom+".");
    
  } else {
    //  text = "Cookies are not enabled.";
  }
  // document.getElementById("bienvenu").innerHTML = text;
}
  

//animation
function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 6);
  function frame() {
    if (pos == 75) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}










// function hide(){
//     let s1 = document.getElementById("but1" ).style.display="none";
//     let s3 = document.getElementById("but2" ).style.display="none";
   
// }
// function show(){
//     let s = document.getElementById("but1").style.display= "";
//     let s4 = document.getElementById("but2").style.display= "";
    
// }






