chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse){
        switch(request.action){
            case 'matrix':
                sendResponse(getItem(request.key));
                console.log(request.key);
                break;

            case 'getName':
                sendResponse('name');
                break;
            }
    }
);


function getItem(key){ return getStorage().getItem(key);}

function setItem(key, map){ return getStorage().setItem(key, map);}

function removeItem(key){ return getStorage().removeItem(key);}

function getStorage(){ return window.localStorage;}

