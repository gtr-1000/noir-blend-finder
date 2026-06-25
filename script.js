const button = document.getElementById("recommend-btn");

button.addEventListener("click", () => {

    const intensity = document.querySelector(
        'input[name="intensity"]:checked'
    );

    const method = document.querySelector( 

        'input[name="method"]:checked' 

    );

    const blendName = document.getElementById("blend-name");

    if (intensity.value === "light" &&  method.value === "french"){
        blendName.textContent = "AURORA";}
    if (intensity.value === "medium" && method.value === "v60"){
        blendName.textContent = "VELVET";}
    if (intensity.value === "strong"  && method.value === "espresso"){
        blendName.textContent = "ECLIPSE";}
    if (intensity.value === "strong" && method.value === "french"){
        blendName.textContent = "RITUAL";}
    if (intensity.value === "very strong" && method.value === "french"){
        blendName.textContent = "VL200";}
});
