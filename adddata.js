var addbtn=document.getElementById("btn");
btn.addEventListener('click', addRows);
var t=document.getElementById("tables");

function addRows()
{
    var row=document.createElement("tr");

    var data1=document.createElement("td");
    var data2=document.createElement("td");
    var data3=document.createElement("td");
    var data4=document.createElement("td");
    var data5=document.createElement("td");

    var name=document.getElementById("Name").value;
    var email=document.getElementById("Email").value;
    var phone=document.getElementById("Phone").value;
    var address=document.getElementById("Address").value;

    var text1=document.createTextNode(name);
    var text2=document.createTextNode(email);
    var text3=document.createTextNode(phone);
    var text4=document.createTextNode(address);
    var delbtn=document.createElement("button");

    delbtn.innerHTML="X";
    delbtn.addEventListener('click', deleteRows);

    data1.appendChild(text1);
    data2.appendChild(text2);
    data3.appendChild(text3);
    data4.appendChild(text4);
    data5.appendChild(delbtn);

    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);
    row.appendChild(data4);
    row.appendChild(data5);

    t.appendChild(row);

    function deleteRows()
    {
        t.removeChild(row);
    }
}


