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

const but = document.querySelector("input[type='button']")
const name = document.getElementsByName("name")[0];
const sex = document.getElementsByName("sex")[0]
const chinese = document.getElementsByName("chinese")[0]
const mathematics = document.getElementsByName("mathematics")[0]
const english = document.getElementsByName("english")[0]
but.onclick = function(){
    $.ajax({
        url:"/updateStudent",
        type:"post",
        data:{
            name:name.value,
            sex:sex.value,
            chinese:chinese.value,
            mathematics:mathematics.value,
            english:english.value
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