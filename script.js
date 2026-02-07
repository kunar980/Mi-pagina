function send() {
  fetch("https://abcd-12-34.ngrok.io/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      channel_id: "1434517615467827231",
      message: document.getElementById("msg").value
    })
  })
  .then(res => res.json())
  .then(data => alert("Mensaje enviado"));
}