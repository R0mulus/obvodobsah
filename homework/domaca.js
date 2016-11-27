/**
 * Created by Jozef Balint on 27.11.2016.
 *
 */

function calculateCircumference(){

    var state = true;

    var element = document.getElementById("tdA").getElementsByTagName("div");
    if(element[0] != undefined){
        document.getElementById("tdA").removeChild(element[0]);
    }

    var element2 = document.getElementById("tdB").getElementsByTagName("div");
    if(element2[0] != undefined){
        document.getElementById("tdB").removeChild(element2[0]);
    }

    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);


    if (!Number.isFinite(sideA) || sideA <= 0)
    {
        var divErrorA = document.createElement("div");
        var node = document.createTextNode("Wrong value!");
        divErrorA.appendChild(node);
        document.getElementById("tdA").appendChild(divErrorA);
        divErrorA.className = "divErrorMsg";
        state = false;
    }

    if (!Number.isFinite(sideB) || sideB <= 0)
    {
        var divErrorB = document.createElement("div");
        var node2 = document.createTextNode("Wrong value!");
        divErrorB.appendChild(node2);
        document.getElementById("tdB").appendChild(divErrorB);
        divErrorB.className = "divErrorMsg";
        state = false;
    }

    var area = document.getElementById("area");
    var circumference = document.getElementById("circumference");

    if(state == true){

        var result = 2* (sideA + sideB);
        circumference.value = result.toFixed(2);

    }else{
        circumference.value = "";
        area.value = "";
    }


}

function calculateArea(){

    var state = true;

    var element = document.getElementById("tdA").getElementsByTagName("div");
    if(element[0] != undefined){
        document.getElementById("tdA").removeChild(element[0]);
    }

    var element2 = document.getElementById("tdB").getElementsByTagName("div");
    if(element2[0] != undefined){
        document.getElementById("tdB").removeChild(element2[0]);
    }

    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);


    if (!Number.isFinite(sideA) || sideA <= 0)
    {
        var divErrorA = document.createElement("div");
        var node = document.createTextNode("Wrong value!");
        divErrorA.appendChild(node);
        document.getElementById("tdA").appendChild(divErrorA);
        divErrorA.className = "divErrorMsg";
        state = false;
    }

    if (!Number.isFinite(sideB) || sideB <= 0)
    {
        var divErrorB = document.createElement("div");
        var node2 = document.createTextNode("Wrong value!");
        divErrorB.appendChild(node2);
        document.getElementById("tdB").appendChild(divErrorB);
        divErrorB.className = "divErrorMsg";
        state = false;
    }

    var area = document.getElementById("area");
    var circumference = document.getElementById("circumference");

    if(state == true){
        var result = 2* (sideA + sideB);
        area.value = result.toFixed(2);
    }else{
        area.value = "";
        circumference.value = "";
    }
}
