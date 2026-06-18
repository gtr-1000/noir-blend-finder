const button = document.getElementById("recommend-btn");

button.addEventListener("click", () => {

    const intensity = document.querySelector(
        'input[name="intensity"]:checked'
    );

    const blendName = document.getElementById("blend-name");

    blendName.textContent = "BLEND: " + intensity.value.toUpperCase();

});
