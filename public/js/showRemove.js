$.ajax({
    url:"/",
    type:"post",
    success(msg){
        console.log("请求成功")
        foramtting(msg)
    }
})

// 渲染函数
function foramtting(dataList){
    const tbody = document.getElementById("tbody");
    let str = "";
    dataList.forEach((element) => {
        str += `
            <tr>
                <td>${element.name}</td>
                <td>${element.sex}</td>
                <td>${element.chinese}</td>
                <td>${element.mathematics}</td>
                <td>${element.english}</td>
        `
    });
    tbody.innerHTML = str;
}

const name = document.getElementsByName("name")[0]
const but = document.querySelector("input[type='button']")
but.onclick = function(){
    $.ajax({
        url:"/removeStudent",
        type:"post",
        data:{
            name:name.value
        },
        success(msg){
            console.log(msg)
            $.ajax({
                url:"/",
                type:"post",
                success(msg){
                    console.log("请求成功")
                    foramtting(msg)
                }
            })
        }
    })
}
