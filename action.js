let current_id = 1;
let main;
let scheduleID;

window.onload = function() {
    let title_1 = document.getElementById("title-1");
    title_1.style.borderBottomLeftRadius= "0px";
    title_1.style.borderBottomRightRadius= "0px";

    let answer_1 = document.getElementById("answer-1");
    answer_1.style.display = "block";

    main = document.getElementById("main");
    play();
};

function autoPlay() {
    main.scrollTop++;
}

function play() {
    main.style.overflow = "hidden";
    scheduleID = window.setInterval(autoPlay, 50);
}

function pause() {
    main.style.overflow = "auto";
    clearInterval(scheduleID);
}

function stop() {
    main.style.overflow = "auto";
    clearInterval(scheduleID);
    main.scrollTop = 0;
}

function ans(number) {
    let open_title_id = document.getElementById("title-" + number);
    let open_answer_id = document.getElementById("answer-" + number);
    let close_title_id = document.getElementById("title-" + current_id);
    let close_answer_id = document.getElementById("answer-" + current_id);

    if(open_answer_id.style.display != "block"){
        open_answer_id.style.display = "block";
        if(number != current_id) {
            close_answer_id.style.display = "none";
            close_title_id.style.borderBottomLeftRadius = "10px"; 
            close_title_id.style.borderBottomRightRadius = "10px";
            current_id = number;
        }
        open_title_id.style.borderBottomLeftRadius = "0px"; 
        open_title_id.style.borderBottomRightRadius = "0px";
    }else{
        open_answer_id.style.display = "none";
        open_title_id.style.borderBottomLeftRadius = "10px"; 
        open_title_id.style.borderBottomRightRadius = "10px";
    }
}

function over(div_title) {
    div_title.style.backgroundColor = "rgb(226, 180, 255)";
}

function out(div_title) {
    div_title.style.backgroundColor = "pink";
}

function mode(){
    let mode = document.getElementById("mode");
    if(mode.innerText == "Dark") {
        mode.innerText = "Light";
        mode.style.backgroundColor = "white";
        mode.style.color = "black";
        document.body.style.backgroundColor = "black";
    }
    else {
        mode.innerText = "Dark";
        mode.style.backgroundColor = "pink";
        mode.style.color = "white";
        document.body.style.backgroundColor = "white";
    }
}