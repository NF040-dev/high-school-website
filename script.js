$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 2000, function(){
          window.location.hash = hash;
        });
      } 
    });
  });
  
  /*function loader(){
    document.querySelector('.loader-container').classList.add('active');
  }
  
  function fadeOut(){
    setTimeout(loader, 4000);
  }*/