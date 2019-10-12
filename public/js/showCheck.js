const but = document.getElementById("but");
const name = document.getElementsByName("name")[0];
console.log(but)
but.onclick = function(){
    $.ajax({
        url:"/checkStudent",
        type:"post",
        data:{
            name:name.value
        },
        success(msg){
            console.log(msg)
        }
    })
}