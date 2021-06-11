function login(event){
  let username = event.target.elements.username1.value;
  let password = event.target.elements.password1.value;
  let xml = new XMLHttpRequest();
  xml.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let xmlDoc = this.responseXML;
      let users = xmlDoc.getElementsByTagName('user');
      for(let i = 0; i < users.length; i++){
        if(users[i].children[1].textContent == username.toString() && users[i].children[2].textContent == password.toString()){
          console.log("authorized");
          window.localStorage.setItem("authorized", "true");
          window.location.href = "http://localhost:63342/ProjectTW/index.html";
        }
      }
      if(window.localStorage.getItem("authorized")==null){
        alert("Username or password is incorrect!\nPlease try again!");
      }
    }
  };
  xml.open("GET", "../ProjectTW/xml/users.xml", true);
  xml.send();
}
function register(event){
  let username = event.target.elements.username2.value;
  let password = event.target.elements.password2.value;
  let repPassword = event.target.elements.password22.value;
}
$('input[name=password2]').on("input", function(){
  let p1 = $('input[name=password2]');
  let p2 = $('input[name=password22]');
  if(p1[0].value == p2[0].value){
    p2.removeClass("wrong");
  }
});
$('input[name=password22]').on("input", function(){
  let p1 = $('input[name=password2]');
  let p2 = $('input[name=password22]');
  let btn = $('button[name=submit2]');

  if(p1[0].value != p2[0].value){
    p2.addClass("wrong");
    btn.prop('disabled', true);
  }else{
    p2.removeClass("wrong");
    btn.prop('disabled', false);

  }
});
//login
$('input[name$="1"]').each(function(){
  $(this).on("input", function(){
    let username = $('input[name=username1]');
    let password = $('input[name=password1]');
    let btn = $('button[name=submit1]');
    if(username[0].value != '' && password[0].value != ''){
      btn.prop("disabled", false);
    }else{
      btn.prop("disabled", true);
    }
  });
})
//register
$('input[name$="2"]').each(function(){
  $(this).on("input", function(){
    let username = $('input[name=username2]');
    let password = $('input[name=password2]');
    let password2 = $('input[name=password22]');
    let btn = $('button[name=submit2]');
    if(username[0].value != '' && password[0].value != '' && password2[0].value != ''){
      btn.prop("disabled", false);
    }else{
      btn.prop("disabled", true);
    }
  });
})
