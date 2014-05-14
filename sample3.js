if(myVar){
    alert(myVar);

    var tbl = document.getElementsByTagName("table").item(1);

    var passKey = new Array(3);
    var passBox = new Array(3);

    //console.log(tbl.nodeType);
    //console.log(tbl.tagName);
    //console.log(tbl.rows.length);

    for(var i = 0; i < passKey.length; i++){
        passKey[i] = tbl.rows[i + 4].cells[0].firstChild.data;
    }

    //console.log(tbl.rows[4].cells[0].firstChild.data);
    //console.log(tbl.rows[5].cells[0].firstChild.data);
    //console.log(tbl.rows[6].cells[0].firstChild.data);

    //textBoxの取得にかなり苦労したので今後の変更で参考にできるかもという願いのもと2種類の取得の仕方
    passBox[0] = document.getElementsByName("message3").item(0);
    passBox[1] = tbl.rows[5].cells[2].childNodes[1];
    passBox[2] = tbl.rows[6].cells[2].childNodes[1];

    console.log(passBox[1].value.length);


    for(var i = 0; i < passKey.length; i++){
        setPass(passBox[i], 'matrix', passKey[i]);
    }
}

function setPass(elem, action, key){

    chrome.extension.sendRequest({"action":action, "key":key}, function(response){

        console.log(elem.value);

        setValue(elem, response);

        console.log(elem.value);
    });
    
}

function setValue(elem, value){
    
    elem.value = value;

    console.log(isSetPass());
    if(isSetPass()){
        document.getElementsByName("OK").item(0).click();
    }

}

function isSetPass(){
    var isSet = true;
    for(var i = 0; i < passBox.length; i++){
        isSet = isSet && (passBox[i].value.length != 0);
    }
    return isSet;
}
