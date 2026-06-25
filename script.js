const button = document.getElementById("recommend-btn");

button.addEventListener("click", () => {

    const intensity = document.querySelector(
        'input[name="intensity"]:checked'
    );

    const blendName = document.getElementById("blend-name");

    if (intensity.value === "light"){
        blendName.textContent = "AURORA";}
    if (intensity.value === "medium"){
        blendName.textContent = "VELVET";}
    if (intensity.value === "strong"){
        blendName.textContent = "ECLIPSE";}
    
});
