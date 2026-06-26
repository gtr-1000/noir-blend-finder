const button = document.getElementById("recommend-btn");

button.addEventListener("click", () => {

    const intensity = document.querySelector(
        'input[name="intensity"]:checked'
    );

    const method = document.querySelector( 

        'input[name="method"]:checked' 

    );

    const blendName = document.getElementById("blend-name");

    let recommendation = "";

    blendName.textContent = recommendation;

    if (intensity.value === "light" &&  method.value === "french"){
        recommendation = "AURORA";}
    if (intensity.value === "light" && method.value === "espresso"){
        recommendation = "KRIN";}
    if (intensity.value === "light" && method.value === "v60"){
        recommendation = "FLUE";}
    if (intensity.value === "medium" && method.value === "v60"){
        recommendation = "VELVET";}
    if (intensity.value === "medium" && method.value === "espresso"){
        recommendation = "LORT";}
    if (intensity.value === "medium" && method.value === "french"){
        recommendation = "MAGIF";}
    if (intensity.value === "strong"  && method.value === "espresso"){
        recommendation = "ECLIPSE";}
    if (intensity.value === "strong" && method.value === "french"){
        recommendation = "RITUAL";}
    if (intensity.value === "strong" && method.value === "v60"){
        recommendation = "VIKING";}
    if (intensity.value === "very strong" && method.value === "french"){
        recommendation = "VL200";}
    if (intensity.value === "very strong" && method.value === "espresso"){
        recommendation = "WARRIORS";}
    if (intensity.value === "very strong" && method.value === "v60"){
        recommendation = "CHARM";}

    
    
});
