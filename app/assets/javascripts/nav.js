$(document).ready(function() {

  // TODO: Finish this. Figure out highlight
  var nav = $(".nav.nav-pills li a")

  nav.addClass('active')

  nav.click(function(e){
    console.log(this.text + " pressed as a variable.")

    console.log(nav.parent())

    nav.parent().removeClass('active');

    var $parent = $(this).parent();
    if (!$parent.hasClass('active')) {
        $parent.addClass('active');
    }
    e.preventDefault();
  });

});
