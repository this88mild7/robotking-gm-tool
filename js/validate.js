function isPossiblelength(message, limitLength) {
    if ($.trim(message).length == 0) {
        return false;
    }
    if (message.length > limitLength) {
        return false;
    }
    return true;
}

function isNaturalNum(message) {
    if ($.trim(message).length == 0) {
        return false
    }
    if (message.indexOf(".") >= 0) {
        return false;
    }
    if($.isNumeric(message)){
        return true;
    }else{
        return false;
    }
}

function isEmpty(message) {
    if ($.trim(message).length > 0) {
        return false;
    } else {
        return true;
    }
}
