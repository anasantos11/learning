var token = '';
var clienteId = '2030589643652951'; // Application ID - Substitua pelo seu APP ID
var url = "https://app-apds.azurewebsites.net/"; // URL da sua página - Substitua pela sua

function getToken() {
  $.ajax({
    url: "https://graph.facebook.com/v3.1/oauth/access_token",
    data: {
      "client_id": clienteId,
      "redirect_uri": url
    },
    type: "GET",
    success: function (response) {
      var resposta = response;
      debugger;
    },
    error: function (error) {
      var erro = error;
      debugger;
    }
  })
}

getToken();

