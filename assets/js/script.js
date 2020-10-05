$(function (){

  $("a").click(function(event){
    // alert(this.hash)
    if (this.hash !== "") {
      event.preventDefault();

      var gaco = this.hash;

      $("html, body").animate({
        scrollTop: $(gaco).offset().top
      }, 750, function(){

        window.location.hash = gaco;
      })
    }
  });
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})