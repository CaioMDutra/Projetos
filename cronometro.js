let mseconds = 0;
let seconds = 0;
let minuts = 0;
let interval;

function twonum(digits){
    if(digits<10){
        return("0"+digits)
    }else{
        return(digits)
    }
    
}

function start(){
    counter()
    interval=setInterval(counter,100/6)    
}

function parcial(){
    document.getElementById("freeze").innerText =twonum(minuts)+":"+twonum(seconds)+":"+twonum(mseconds)
}

function pause(){
    clearInterval(interval)
    
}

function stop(){
    clearInterval(interval)
    mseconds=0
    seconds=0
    document.getElementById("watch").innerText ="00:00"
    document.getElementById("freeze").innerText =""
}

function counter(){
    mseconds++
    if(mseconds==60){
        seconds++
        mseconds=0
        if(seconds==60){
            minuts++
            seconds=0

        }

    }
    document.getElementById("watch").innerText =twonum(minuts)+":"+twonum(seconds)+":"+twonum(mseconds)
}