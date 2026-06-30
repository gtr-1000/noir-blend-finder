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

    if (intensity.value === "light" &&  method.value === "french"){
        recommendation = "AURORA";}
    else if (intensity.value === "light" && method.value === "espresso"){
        recommendation = "KRIN";}
    else if (intensity.value === "light" && method.value === "v60"){
        recommendation = "FLUE";}
    else if (intensity.value === "medium" && method.value === "v60"){
        recommendation = "VELVET";}
    else if (intensity.value === "medium" && method.value === "espresso"){
        recommendation = "LORT";}
    else if (intensity.value === "medium" && method.value === "french"){
        recommendation = "MAGIF";}
    else if (intensity.value === "strong"  && method.value === "espresso"){
        recommendation = "ECLIPSE";}
    else if (intensity.value === "strong" && method.value === "french"){
        recommendation = "RITUAL";}
    else if (intensity.value === "strong" && method.value === "v60"){
        recommendation = "VIKING";}
    else if (intensity.value === "very strong" && method.value === "french"){
        recommendation = "VL200";}
    else if (intensity.value === "very strong" && method.value === "espresso"){
        recommendation = "WARRIORS";}
    else {
        recommendation = "CHARM";}


    blendName.textContent = recommendation;
    
    
});
