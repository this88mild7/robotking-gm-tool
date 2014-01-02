function isPossiblelength(message, limitLength){
    if($.trim(message).length == 0){
        return false;
    }
    if(message.length > limitLength){
        return false;
    }
    return true;
}

function isNaturalNum(message){
    var num_regx=/^[0-9]*$/;
    if($.trim(message).length ==0){ return false}
    
    if (message.indexOf(".") >= 0){
        return false;
    }
    // if(num_regx.test(message)){
        
    //     // 음수 체크
    //     // if(message.indexOf("-1") >= 0){
    //     //     return false;
    //     // }

    //     return true;
    // }else{
    //    return false;
    // }
    return true;
}

function isEmpty(message){
    if ($.trim(message).length > 0) {
        return false;
    }else{
        return true;
    }
}