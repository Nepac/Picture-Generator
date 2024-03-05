const imageArray = [
    "./images/octopus.png",
    "./images/crazy.png",
    "./images/bananna.png",
    "./images/crazy2.png",
    "./images/crazy3.png",
    ];
    
    const image = document.querySelector("img");
    const button = document.querySelector("button");
    
    window.onload = () => generateRandomPicture(imageArray);
    
    button.addEventListener("click", () => generateRandomPicture(imageArray));
    
    function generateRandomPicture(array){
        let randomNum = Math.floor(Math.random() * array.length); 
        image.setAttribute("src", array[randomNum]);
    }