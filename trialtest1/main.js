let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImg");
let images = document.querySelectorAll(".thumbnail");
let closeBtn = document.querySelector(".close");
let prevbtn=document.querySelector(".prevbtn");
let nextbtn=document.querySelector(".nextbtn");
let currentIndex = 0;

images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        currentIndex = images.indexOf(img);
    });
});

closeBtn.onclick=function(){
    modal.style.display = "none";
}


prevbtn.onclick = function() {
        currentIndex = (currentIndex-1+images.length)%images.length;
        modalImg.src = images[currentIndex].src;
}

nextbtn.onclick = function() {
        currentIndex = (currentIndex + 1+images.length)%images.length;
        modalImg.src = images[currentIndex].src;
}