function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    emailjsa.send("service_1uf1zp2", "template_izx8j2c", parms).then(alert("Email Sent!!"))
}