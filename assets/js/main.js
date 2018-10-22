function nowTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = control(m);
    s = control(s);

    var hour = 360 *(h/12);
    var minute = 360 *(m/60);
    var second = 360 *(s/60);

    document.getElementById("second").style.transform = 'rotate('+second+'deg)';
    document.getElementById("minuteHand").style.transform = 'rotate('+minute+'deg)';
    document.getElementById("scorpion").style.transform = 'rotate('+hour+'deg)';

    var t = setTimeout(nowTime, 500);
}
function control(i){
    if(i<10){
        i = "0" + i;
    }
    return i;
}
