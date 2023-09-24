const getColor = () =>{
    const rendomColor = Math.floor( Math.random()*16777215);
    const colorCode = "#" + rendomColor.toString(16);
    document.body.style.backgroundColor = colorCode;
    document.querySelector(".Color-code").innerHTML = colorCode;
}
const btn = document.querySelector(".btn");
btn.addEventListener("click" ,getColor
 
)
getColor();