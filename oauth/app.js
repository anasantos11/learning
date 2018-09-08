var token = '';
var code = '';
var urlCode = "https://github.com/login/oauth/authorize?";
var urlToken = "https://github.com/login/oauth/access_token?";
var clienteId = '794e8e44a1f6e0ee3f58';
var clientSecret = '75ebbeece39f01cb2e43e35f2685448c76ae3585';
var url = "https://app-apds.azurewebsites.net/oauth/";
var dadosGitHub = "";

function getVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) { return pair[1]; }
  }
  return (false);
}

function getToken() {
  $.ajax({
    url: "https://github.com/login/oauth/access_token",
    data: {
      "client_id": clienteId,
      "redirect_uri": url,
      "client_secret": clientSecret,
      "code": code
    },
    type: "POST",
    headers: {
      "Accept": "application/json"
    },
    crossDomain: true,
    success: function (response) {
      token = response.access_token;
      getApi();
    },
    error: function (error) {
      document.getElementById("dados").innerHTML = "O seguinte problema ocorreu: " + JSON.stringify(error, null, '\t');
    }
  })
}

function getApi() {
  $.ajax({
    url: "https://api.github.com/user",
    data: {
      "access_token": token
    },
    type: "GET",
    crossDomain: true,
    success: function (response) {
      dadosGitHub = response;
      document.getElementById("dados").innerHTML = JSON.stringify(dadosGitHub, null, '\t');
      $("div").show();
    },
    error: function (error) {
      document.getElementById("dados").innerHTML = "O seguinte problema ocorreu: " + JSON.stringify(error, null, '\t');
    }
  })
}

token = getVariable('access_token');
if (!token) {
  code = getVariable('code');
  if (!code) {
    window.location = urlCode + "client_id=" + clienteId + "&redirect_uri=" + url;
  } else {
    getToken();
  }
}


