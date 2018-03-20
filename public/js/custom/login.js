window.onload = function () 
{

  document.getElementById('login').addEventListener('click', login);
  
  
  $("#email").keyup(function(event) {
    if (event.keyCode === 13) {
        login();
    }
  });
  $("#password").keyup(function(event) {
    if (event.keyCode === 13) {
        login();
    }
  });


}

function login() {
  console.log('click');

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  $.ajax({
    type: 'POST',
    url: '/api/login',
    datatype: 'json',
    crossDomain: true,
    data: {
      email: email,
      password: password
    },
    success: function (data) {

      if ((data.data).length == 1) {
        localStorage.setItem("u_id", data.data[0].id);
        window.location.href = "./admin.html";  
      }
      else {
        alert('Wrong credentials');
        location.reload();
      }

    }

  }
  );

}
