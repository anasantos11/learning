var token = '';
var clienteId = '2030589643652951'; // Application ID - Substitua pelo seu APP ID
var url = "https://app-apds.azurewebsites.net/oauth"; // URL da sua página - Substitua pela sua

function getToken() {
  $.ajax({
    url: "https://www.facebook.com/v3.1/dialog/oauth?",
    data: {
      "client_id": clienteId,
      "redirect_uri": url,
      "state": "st=state123abc,ds=123456789"
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

