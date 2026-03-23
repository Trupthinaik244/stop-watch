let timerdisplay=document.querySelector('.timerdisplay');

let startbtn= document.getElementById('startbtn');
let stopbtn= document.getElementById('stopbtn');
let resetbtn= document.getElementById('resetbtn');
  

let msec= 60;
let secS= 0;
let minS= 0;

let timerId=null;
startbtn.addEventListener('click',function(){
    if(timerId!==null){
        clearInterval(timerId);

    }
    timerId=setInterval(startTimer,10);
});

stopbtn.addEventListener('click',function(){
    clearInterval(timerId);

});
resetbtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerdisplay.innerHTML='00:00:00';
    msec=secS=minS=0;
    
});
function startTimer(){
    msec++;
    if(msec==100){
        msec=0;
        secS++;
        if(secS==60){
            secS=0;
            minS++;
        }
    }
    let msecString=msec<10?'0'+msec:msec;
    let secString=secS<10?'0'+secS:secS;
    let minsecString=minS<10?'0'+minS:minS;
    timerdisplay.innerHTML=`${minsecString}:${secString}:${msecString}`;
}