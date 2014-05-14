if(myVar){
    alert(myVar);

    var numElem = document.getElementsByName("usr_name").item(0);
    var passElem = document.getElementsByName("usr_password").item(0);

    document.getElementsByName("usr_name").item(0).value="";
    document.getElementsByName("usr_password").item(0).value="";

    setItem(numElem, "getInfo", "number");
    setItem(passElem, "getInfo", "password");

}


function setItem(elem, action, key){

    chrome.extension.sendRequest({"action":action, "key":key},function(response){

        setValue(elem, response);

    });

}


function setValue(elem, value){
    elem.value = value;

    if(isSetPass()){
        document.getElementsByName("OK").item(0).click();;
    }
}

function isSetPass(){
    return (numElem.value.length != 0) && (passElem.value.length != 0);
}
