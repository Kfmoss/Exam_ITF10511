let mybutton = document.getElementById("progress_value");

// When the user scrolls down 20px from the top of the document, show the button


window.onscroll = function(){scrollFunction()};

// under 20px the button is not longer visible.

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
scrollFunction.addEventListener("click", ()=>{
  topFunction();
})

