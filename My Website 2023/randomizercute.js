const imageArray = [
    "./images/zebra.png",
    "./images/wizard.png",
    "./images/moon.png",
    "./images/samuraipanda.png",
    "./images/sheephouse.png",
    "./images/fox.png",
    "./images/forestrat.png",
    "./images/cafe.png",
    "./images/catflash.png",
    "./images/plantcat.png",
    "./images/cat.png",
    
    ];
    
    const image = document.querySelector("img");
    const button = document.querySelector("button");
    
    window.onload = () => generateRandomPicture(imageArray);
    
    button.addEventListener("click", () => generateRandomPicture(imageArray));
    
    function generateRandomPicture(array){
        let randomNum = Math.floor(Math.random() * array.length); 
        image.setAttribute("src", array[randomNum]);
    }