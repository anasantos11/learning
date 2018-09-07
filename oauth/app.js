var token = '';
var code = '';
var clienteId = '2030589643652951'; // Application ID - Substitua pelo seu APP ID
var url = "http://localhost:8080/"; // URL da sua página - Substitua pela sua


function getSpotifyVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) { return pair[1]; }
  }
  return (false);
}


function getCode() {
  $.ajax({
    url: "https://www.facebook.com/v3.1/dialog/oauth?",
    data: {
      "client_id": clienteId,
      "redirect_uri": url
    },
    type: "GET",
    crossDomain: true,
    success: function (response) {
      var resposta = response;
      debugger;
      return response;
    },
    error: function (error) {
      var erro = error;
      debugger;
      return null;
    }
  })
}

token = getSpotifyVariable('access_token');
if (!token) {
  code = getSpotifyVariable('code');
  if (!code) {
    window.location = "https://graph.facebook.com/oauth/authorize?client_id=" + clienteId + "&redirect_uri=" + url;
  } else {
    debugger;
    window.location = "https://graph.facebook.com/v3.1/oauth/access_token?client_id=" + clienteId + "&redirect_uri=" + url + "&code=" + code + "&client_secret=" + "027551e060534e25e5ad5e137e36649f"
  }
}


