var domain = "";
var api = {
    getId: domain + "/service/Management.asmx/GetId",
    getUserInfo: domain + "/service/Management.asmx/GetUserInfo",
    getPilotInfo: domain + "/service/Management.asmx/GetPilotInfo",
    getOwnWeapon: domain + "/service/Management.asmx/GetOwnWeapon",
    getOwnParts: domain + "/service/Management.asmx/GetOwnParts",
    getFriendInfo: domain + "/service/Management.asmx/GetFriendInfo",
    getShopInfo: domain + "/service/Management.asmx/GetShopInfo",
    getMessageInfo: domain + "/service/Management.asmx/GetMessageInfo",
    getPartsCode: domain + "/service/Management.asmx/GetPartsCode",
    getWeaponCode: domain + "/service/Management.asmx/GetWeaponCode",
    getPilotCode: domain + "/service/Management.asmx/GetPilotCode",
    getEnemyInfo: domain + "/service/Management.asmx/GetEnemyInfo",
    getEnemyCode: domain + "/service/Management.asmx/GetEnemyCode",
    getSaleEvent: domain + "/service/Management.asmx/GetSaleEvent",
    getSaleCode: domain + "/service/Management.asmx/GetSaleCode",
    getAdminWork: domain + "/service/Management.asmx/GetAdminWork",
    getLogInfo: domain + "/service/Management.asmx/GETLogInfo",
    setParts: domain + "/service/Management.asmx/SetParts",
    setWeapon: domain + "/service/Management.asmx/SetWeapon",
    sendMessage: domain + "/service/Management.asmx/SendMessage",
    sendMessageToAllUser: domain + "/service/Management.asmx/SendMessageToAllUser",
    setBanUser: domain + "/service/Management.asmx/SetBanUser",
    setPilot: domain + "/service/Management.asmx/SetPilot",
    setEnemyInfo: domain + "/service/Management.asmx/SetEnemyInfo",
    setUserInfo: domain + "/service/Management.asmx/SetUserInfo",
    setSaleEvent: domain + "/service/Management.asmx/SetSaleEvent",
    setCreateAccount: domain + "/service/Management.asmx/SetCreateAccount",
    setEquipInfo: domain + "/service/Management.asmx/SetEquipInfo",
    delWeapon: domain + "/service/Management.asmx/DelWeapon",
    delParts: domain + "/service/Management.asmx/DelParts",
    delPilot: domain + "/service/Management.asmx/DelPilot",
    delMessageInfo: domain + "/service/Management.asmx/DelMessageInfo",
    delUserInfo: domain + "/service/Management.asmx/DelUserInfo",
    loginGm: domain + "/service/Management.asmx/Login",
    postCodeTable: domain + "/service/Management.asmx/PostCodeTable"
}

var methodList = [
    {
        name: "캡슐 충전",
        value: "setChargeCapsule"
    }
    , {
        name: "블루칩 충전",
        value: "setChargeChip"
    }
    , {
        name: "코인 충전",
        value: "setChargeCoin"
    }
]

var ajaxDatatype = "jsonp";

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function AddTag(value, tag) {
    return "<" + tag + ">" + value + "</" + tag + ">";
}

function setCookie(minutes, value) {
        var date = new Date();
        var m = minutes;
        var role = ""
        date.setTime(date.getTime() + (m * 60 * 1000));
        $.cookie("gmid", value, {
            expires: date
        });
        if (value == "view") {
            role = "View";
        }else{
            role = "Admin";
        }

        $.cookie("role", role, {
            expires: date
        });
    }

function logOut(){
    $.cookie("gmid", '');
    $.cookie("role", '');
    location.href = "login.html";
}
