// for the answer form
document.querySelector("#emailsubmit").addEventListener("click", function() {
    let subject = document.querySelector("#exampleFormControlInput2");
    let message = document.querySelector("#exampleFormControlTextarea1");

    if (subject.value == "" || message.value == "") {
        alert("Please fill out all of the form before submitting!");
        return;
    }

    subject = subject.value.replaceAll(" ", "%20")
    message = message.value.split("\n")
    for (let i = 0; i < message.length; i++) {
        message[i] = message[i].replaceAll(" ", "%20")
    }
    message = message.join("%0D%0A")

    window.open(`mailto:mpark1994@outlook.com?subject=${subject}&body=${message}`);
})
