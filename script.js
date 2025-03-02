document.getElementById("sendMessageButton").addEventListener("click", function() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    
    // Collect selected services
    let services = [];
    document.querySelectorAll("input[name='services']:checked").forEach((checkbox) => {
        services.push(checkbox.value);
    });
    
    let formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        services: services
    };
    
    console.log("Stored Data:", formData);
    alert("Your data is stored.");
});
