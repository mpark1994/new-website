// for the answer form
document.querySelector("#emailsubmit").addEventListener("click", function() {
    let email = document.querySelector("#exampleFormControlInput1");
    let subject = document.querySelector("#exampleFormControlInput2");
    let message = document.querySelector("#exampleFormControlTextarea1");

    if (email.value == "" || subject.value == "" || message.value == "") {
        alert("Please fill out all of the form before submitting!");
        return;
    }

    subject = subject.value.replaceAll(" ", "%20")
    message = message.value.split("\n")
    for (let i = 0; i < message.length; i++) {
        message[i] = message[i].replaceAll(" ", "%20")
        message[i] = `Line${i + 1}-${message[i]}`
    }

    window.open(`mailto:${email.value}?subject=${subject}&body=${message}`);
})
