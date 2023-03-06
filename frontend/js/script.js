const openInfo = document.querySelectorAll(".image");
console.log(openInfo)
const closeInfo = document.querySelector("#close-button");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

function open() {
    fade.style.display = 'block';
    modal.style.display = 'block';
}

function close() {
    fade.style.display = 'none';
    modal.style.display = 'none';
}

//NOT WORKING WITH DYNAMICALLY CREATED LIST ITEMS, ONLY STATIC ONES. TRY DEXTER 1 VS DEXTER 2

openInfo.forEach((el)=> {
    el.addEventListener("click", ()=>{
        el.closest(open());
    })
})

closeInfo.addEventListener("click", ()=>{
    close();
})