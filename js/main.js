/*page loader*/ 
window.onload = function(){
  var contenedor = document.getElementById('contenedor_carga');
  contenedor.style.visibility = 'hidden';
  contenedor.style.opacity = 0;
}
/*model skills*/

/**/

document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });

  window.sr = ScrollReveal();
  
  sr.reveal('.icono', {
    duration: 3000,
    origin: 'bottom',
    distance: '100px',
  });
  
  sr.reveal('.itemleft', {
    duration: 3000,
    origin: 'left',
    distance: '100px',
  });
  
  sr.reveal('.itemright', {
    duration: 3000,
    origin: 'right',
    distance: '-100px',
  });
  

  /*texto contenedor 2*/ 
  // function([string1, string2],target id,[color1,color2])    
 consoleText(["Hola! soy Matias Gines", "Soy desarrollador de Software"], 'text',['withe','lightblue']);

 function consoleText(words, id, colors) {
   if (colors === undefined) colors = ['#fff'];
   var visible = true;
   var con = document.getElementById('console');
   var letterCount = 1;
   var x = 1;
   var waiting = false;
   var target = document.getElementById(id)
   target.setAttribute('style', 'color:' + colors[0])
   window.setInterval(function() {
 
     if (letterCount === 0 && waiting === false) {
       waiting = true;
       target.innerHTML = words[0].substring(0, letterCount)
       window.setTimeout(function() {
         var usedColor = colors.shift();
         colors.push(usedColor);
         var usedWord = words.shift();
         words.push(usedWord);
         x = 1;
         target.setAttribute('style', 'color:' + colors[0])
         letterCount += x;
         waiting = false;
       }, 1000)
     } else if (letterCount === words[0].length + 1 && waiting === false) {
       waiting = true;
       window.setTimeout(function() {
         x = -1;
         letterCount += x;
         waiting = false;
       }, 1000)
     } else if (waiting === false) {
       target.innerHTML = words[0].substring(0, letterCount)
       letterCount += x;
     }
   }, 120)
   window.setInterval(function() {
     if (visible === true) {
       con.className = 'console-underscore hidden'
       visible = false;
 
     } else {
       con.className = 'console-underscore'
 
       visible = true;
     }
   }, 400)
 }
  /*/texto contenedor 2*/

  document.querySelector(".about-btn").addEventListener("click", () => {
    document.querySelector(".txt-p").classList.toggle("showTxt");
  });