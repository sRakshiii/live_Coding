var hour = 0;
var min = 0;
var sec = 0;
var count=0
var timer = false;

function start() {
    timer =true;
    stoptimer();
}

function stop(){
    timer=false;
}

function reset(){
    timer=false;
    hour=0;
    min=0;
    sec=0;
    let h= hour<10 ? "0"+ hour:hour;
    let m= min<10 ? "0"+ min:min;
    let s= sec<10 ? "0"+ sec:sec;
    document.getElementById("hr").innerHTML=h;
    document.getElementById("min").innerHTML=m;
    document.getElementById("sec").innerHTML=s;

}

function stoptimer(){
    if(timer == true){
        count=count+1;
        if(count==100){
            sec=sec+1;
            count=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hour=hour+1;
            min=0;
            sec=0;
        }

        let h= hour<10 ? "0"+ hour:hour;
        let m= min<10 ? "0"+ min:min;
        let s= sec<10 ? "0"+ sec:sec;

        document.getElementById("hr").innerHTML=h;
        document.getElementById("min").innerHTML=m;
        document.getElementById("sec").innerHTML=s;
        setTimeout("stoptimer()",10);
    }

}