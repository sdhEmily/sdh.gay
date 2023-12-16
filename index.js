$.getJSON("https://api.countabc.xyz/hit/sdh.gay/visits", function(response) {
    $("#views").text(response.value);
});

function discord() {
  navigator.clipboard.writeText('.emiily_');
  alert('Discord Username copied to clipboard.');
}

let openUrl = function(url) {
  window.open(url, '_blank').focus();
}
  
