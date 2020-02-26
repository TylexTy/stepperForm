function step2() {
    const x = document.getElementById("password-form")
    x.style.display = "block";
    document.getElementById("circle1").style.backgroundColor = "rgb(155,154,154)";
    document.getElementById("circle2").style.backgroundColor = "#1F8BF3";
    document.getElementById("email-form").style.display = "none";
    document.getElementById("line1").style.display = "none";
    document.getElementById("line2").style.display = "block";
}

function goBack() {
    const x = document.getElementById("password-form")
    x.style.display = "none";
    document.getElementById("circle2").style.backgroundColor = "rgb(155,154,154)";
    document.getElementById("circle1").style.backgroundColor = "#1F8BF3";
    document.getElementById("email-form").style.display = "block";
    document.getElementById("line2").style.display = "none";
    document.getElementById("line1").style.display = "block";
}

function step3() {
    const x = document.getElementById("finished-form")
    x.style.display = "block";
    document.getElementById("circle2").style.backgroundColor = "rgb(155,154,154)";
    document.getElementById("circle3").style.backgroundColor = "#1F8BF3";
    document.getElementById("password-form").style.display = "none";
    document.getElementById("line2").style.display = "none";
}