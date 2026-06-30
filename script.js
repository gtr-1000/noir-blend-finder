const coffees = {
    "strong-espresso": "ECLIPSE",
    "strong-french": "RITUAL",
    "strong-v60": "VIKING",

    "medium-espresso": "LORT",
    "medium-french": "MAGIF",
    "medium-v60": "VELVET",

    "light-espresso": "KRIN",
    "light-french": "AURORA",
    "light-v60": "FLUE",

    "very strong-espresso": "WARRIORS",
    "very strong-french": "VL200",
    "very strong-v60": "CHARM",
};

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

    
    
    if (!intensity || !method){
        recommendation= "Please select all options";}

    else {
        const key = intensity.value + "-" + method.value;
        recommendation = coffees[key];}


    blendName.textContent = recommendation;
    
    
});


