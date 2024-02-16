const images = ["https://raw.githubusercontent.com/nomadcoders/javascript-for-beginners/5874df713ba5476174c5df78dc886198c38ef8dc/img/0.jpeg", "https://img.freepik.com/free-vector/watercolor-oil-painting-background_52683-107025.jpg?w=1800&t=st=1707820466~exp=1707821066~hmac=d6a55406d7e23b27fe1d006254698e12371ce3c87618324e4ba04ed491404107", "https://blog.kakaocdn.net/dn/eFxmqN/btquZFlxvLG/IKittvt0eFXbhGhj2MuJOK/img.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");
const bgImage = document.querySelector(".background-image");

bgImage.src = `${chosenImage}`;

//document.body.appendChild(bgImage);
