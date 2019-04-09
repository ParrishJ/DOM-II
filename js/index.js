// Your code goes here

const topHead = document.querySelector(".logo-heading");

topHead.addEventListener('mouseover', function(event){
    topHead.style.color = "#17A2B8";
});

topHead.addEventListener('mouseleave', function(event){
    topHead.style.color = "black";
});

document.addEventListener('keyup', function(event){
    alert("You released a key!");
});


document.addEventListener('wheel', function(event){
    alert("Weeeeeeee!");
});

window.addEventListener('load', function(event){
    alert("Welcome!");    
});

const pageBody = document.querySelector("body");

window.addEventListener('resize', function(event){
    pageBody.style.backgroundColor = "#17A2B8";
});

pageBody.addEventListener('keydown', function(event){
    pageBody.style.backgroundColor = "red";
});

document.addEventListener('contextmenu', function(event){
    pageBody.style.backgroundColor = "white";
})


const btmBtns = document.querySelectorAll(".btn");
btmBtns[0].addEventListener('click', function(event){
    alert('You clicked the button within the box!');
    event.stopPropagation();
})

const destinationBox = document.querySelectorAll(".content-pick");
destinationBox[0].addEventListener('click', function(event){
    alert('you clicked the box!');
})

const navs = document.querySelector(".nav");
navs.addEventListener('click', function(event){
    event.preventDefault();
})



