var x = document.querySelectorAll(".d1>div")
for(let i = 0 ;i<x.length;i++){
    x[i].onclick = function (){
        var r =parseInt(Math.random()*255);
        var g = parseInt(Math.random()*255);
        var b = parseInt(Math.random()*255);
        var color = "rgb("+r+","+g+","+b+")"
        x[i].style.backgroundColor=color
    }
}
