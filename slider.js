let next = document.getElementById("next")
let previous = document.getElementById("previous")
let img = document.getElementById("img")
let value = 0
let Change=[
    {
        name : "img",
    },
    {
        name : "img2"
    }
]
next.addEventListener("click", function(){
    value = (value + 1) % Change.length
    changeme(Change[value])
})
previous.addEventListener("click", function(){
    value = (value - 1) % Change.length
    changeme(Change[value])
})
function changeme(Change) {
    img.src="img/"+Change.name+".jpg"
}