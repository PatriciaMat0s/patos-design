// scripts de funçao para activar som cada vez que se carrega uma página:

///// script 1, simples:
window.addEventListener("load", function() {
  document.getElementById("pageSfx").play();
});


// script 2, garantir que o som é rodado caso o autoplay seja bloqueado, com um click em qq sitio da página:
// Adaptado do ChatGPT:

function playSound() {
  const audio = document.getElementById("pageSfx");
  const playMessage = document.getElementById("playMessage");
  
// Attempt to play the audio
audio.play().catch(error => {
    // If autoplay is blocked, show message to prompt user action
    playMessage.style.display = "block";
    
    // Add click event to play sound on user interaction
    document.addEventListener("click", () => {
        audio.play();
        playMessage.style.display = "none"; // Hide message once audio plays
    }, { once: true });
});
}

// Run playSound when the page loads
window.addEventListener("load", playSound);

// fim script som




//Funºao para abrir pdfs a partir de click num botao:

function openPdf(pdfUrl) {
  window.open(pdfUrl, '_blank');
}






// Mouse balls animation by Renato Ribeiro: 
// https://codepen.io/renatorib/pen/xxWemq

$(document).ready(function(){
  
    var mousePos = {};
  
   function getRandomInt(min, max) {
     return Math.round(Math.random() * (max - min + 1)) + min;
   }
    
    $(window).mousemove(function(e) {
      mousePos.x = e.pageX;
      mousePos.y = e.pageY;
    });
    
    $(window).mouseleave(function(e) {
      mousePos.x = -1;
      mousePos.y = -1;
    });
    
    var draw = setInterval(function(){
      if(mousePos.x > 0 && mousePos.y > 0){
        
        var range = 15;
        
        var color = "background: rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+");";
        
        var sizeInt = getRandomInt(10, 30);
        size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
        
        var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
        
        var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 
  
        var style = left+top+color+size;
        $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
      }
    }, 1);
  });

//FIM mouse balls animation





// Script que coloca o formulário a enviar os dados introduzidos pelo visitante para o nosso email - by Sara Monteiro:
(function () {
  // public-key sibsituido por _HQBP74-h_IH_N5n5:
  emailjs.init("_HQBP74-h_IH_N5n5");
})();

document
  .getElementById("contactForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs  
    // service-id sibsituido por service_zlaobyn:
      .send("service_zlaobyn", "template_d1dz6c8", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      })
      .then(
        function (response) {
          alert("Success, message sent!!");
        },
        function (error) {
          alert("Failed to send your message. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  });