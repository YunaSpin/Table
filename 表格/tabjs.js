function addList(){
    // console.log("zheli");
    var tab = document.getElementById("tab");

    var number = document.createElement("input");
    number.type = "text";
    number.value = "输入学号";
    var td1 = document.createElement("td");
    td1.appendChild(number);

    var uname = document.createElement("input");
    uname.type = "text";
    uname.value = "输入姓名";
    var td2 = document.createElement("td");
    td2.appendChild(uname);

    var age = document.createElement("input");
    age.type = "text";
    age.value = "输入年龄";
    var td3 = document.createElement("td");
    td3.appendChild(age);

    var birthday = document.createElement("input");
    birthday.type = "date";
    var td4 = document.createElement("td");
    td4.appendChild(birthday);

    var sexopboy = document.createElement("option");
    sexopboy.innerText = "男";
    var sexopgirl = document.createElement("option");
    sexopgirl.innerText = "女";
    var selsex = document.createElement("select");
    selsex.appendChild(sexopboy);
    selsex.appendChild(sexopgirl);
    selsex.value = null;
    var td5 = document.createElement("td");
    td5.appendChild(selsex);

    var resume = document.createElement("input");
    resume.type = "file";
    resume.id = "resume";
    var td6 = document.createElement("td");
    td6.appendChild(resume);

    var delet = document.createElement("button");
    delet.innerText = "删除";
    delet.id = "butdel";
    delet.addEventListener("click", function (){
        var td = delet.parentElement;
        var tr = td.parentElement;
        console.log(tr);
        tr.parentElement.removeChild(tr);
    }, false);
    var td7 = document.createElement("td");
    td7.id = "deletop";
    td7.appendChild(delet);

    var tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);

    tab.appendChild(tr);
}