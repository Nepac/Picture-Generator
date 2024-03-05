const imageArray = [
"./images/cables.png",
"./images/monkey.png",
"./images/oldmanhat.png",
"./images/runoldman.png",
"./images/Skeleton.png",
"./images/dogfamily.png",
"./images/family.png",
"./images/doc.png",
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}