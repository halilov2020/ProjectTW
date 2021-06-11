$(document).ready(function() {
  $('.sign-out-link').click(function(){
    window.localStorage.removeItem("authorized");
    window.location.reload();
  });
});
