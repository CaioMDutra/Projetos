let seconds = 0;
let minuts = 0;
let hours = 0;
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
    interval=setInterval(counter,1000)    
}

function parcial(){
    document.getElementById("freeze").innerText =twonum(hours)+":"+twonum(minuts)+":"+twonum(seconds)
}

function pause(){
    clearInterval(interval)
    
}

function stop(){
    clearInterval(interval)
    minuts=0
    seconds=0
    document.getElementById("watch").innerText ="00:00"
    document.getElementById("freeze").innerText =""
}

function counter(){
    seconds++
    if(seconds==60){
        minuts++
        seconds=0
        if(minuts==60){
            hours++
            minuts=0

        }

    }
    document.getElementById("watch").innerText =twonum(hours)+":"+twonum(minuts)+":"+twonum(seconds)
}