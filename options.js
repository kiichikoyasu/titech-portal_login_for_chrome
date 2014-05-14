var idInfoTbl = document.getElementsByTagName("table").item(0);

var numElem = idInfoTbl.rows[0].cells[1];
console.log(numElem);
var num = localStorage.getItem("number");
if(num != null){
    numElem.firstChild.value = num;
}

var passElem = idInfoTbl.rows[1].cells[1];
console.log(passElem);
var pass = localStorage.getItem("password");
if(pass != null){
    passElem.firstChild.value = pass;
}

var matrixTbl = document.getElementsByTagName("table").item(1);
console.log(localStorage.getItem("[E,3]"));

for(var i = 1, len = matrixTbl.rows.length; i < len; i++){
    var cols = matrixTbl.rows[i].cells.length;
    for(var j = 1; j < cols; j++){
        //getMatrixElement(i, j);
        var matrixElem = getMatrixElement(i, j);
        if(matrixElem != null){
            matrixTbl.rows[i].cells[j].firstChild.value = matrixElem;
        }
    }
}

var decButton = document.getElementById("decide");
console.log(decButton);
decButton.onclick = function(){update()};


function update(){
    console.log("click");

    var num = numElem.firstChild.value;
    if(num != null){
        localStorage.setItem("number", num);
    }

    var pass = passElem.firstChild.value;
    if(pass != null){
        localStorage.setItem("password", pass);
    }

    for(var i = 1, len = matrixTbl.rows.length; i < len; i++){
        var cols = matrixTbl.rows[i].cells.length;
        for(var j = 1; j < cols; j++){
            var matrixElem = matrixTbl.rows[i].cells[j].firstChild.value;
            if(matrixElem != null){
                setMatrixElement(i, j, matrixElem);
            }
        }
    }

}

function getMatrixElement(row, col){

    var str = makeKey(row, col);

    return localStorage.getItem(str);
}

function setMatrixElement(row, col, matrixElem){

    var str = makeKey(row, col);

    localStorage.setItem(str, matrixElem);
}

function makeKey(row, col){
    var str = '';
    str += '[';
    str += digitToAlpha(col);
    str += ',';
    str += row;
    str += ']';

    //console.log(str);

    return str;
}

function digitToAlpha(digit){
    var alphabet;
    switch(digit){
        case 1: alphabet = 'A'; break;
        case 2: alphabet = 'B'; break;
        case 3: alphabet = 'C'; break;
        case 4: alphabet = 'D'; break;
        case 5: alphabet = 'E'; break;
        case 6: alphabet = 'F'; break;
        case 7: alphabet = 'G'; break;
        case 8: alphabet = 'H'; break;
        case 9: alphabet = 'I'; break;
        default: alphabet = 'J'; break;
    }
    return alphabet;
}
