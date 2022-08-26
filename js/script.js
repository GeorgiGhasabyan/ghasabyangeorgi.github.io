// const obj = {
//     name:'grig',
//     lname: ' magzhanyan'
// }
// const str = JSON.stringify(obj)
// console.log(str);
// ///objecte veracum e texti


// const parse = JSON.parse (str)
// console.log(parse);
// ////texte veracum e objecti




// var  myVar;
// let i = 0


// var inp = document.getElementById("inp")
// var go = document.getElementById("btn")




// function start (){
//     myVar = setInterval(tiv,20);
// }
// function tiv(){
//     i++
//     document.getElementById("div").innerHTML = i;
//     if(i==inp.value){
//         stop()
//     }
// }

// function stop(){
//     clearInterval(myVar)
// }




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










function game() {
    with (document) {
        var gndak = (querySelectorAll("#div_1>img"));
        for (let i = 0; i < gndak.length; i++) {
            var leftGa = parseInt(Math.random() * 750);
            var rightGa = parseInt(Math.random() * 750);
            var topGa = parseInt(Math.random() * 450);
            var bottomGa = parseInt(Math.random() * 450);
            var result = "left:" + leftGa + "px;right;" +rightGa+"px;top:"+topGa+"px;bottom:"+bottomGa+"px;";
            gndak[i].style=result;
        }
    }
}