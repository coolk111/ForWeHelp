let current_id = 1;
let main;
let scheduleID;
let playFlag = true; // 設計用來防止一直點擊 Play button，造成捲軸捲動越來越快

window.onload = function() {
    main = document.getElementById("main");
    play();
};

function answer_area(on_off) {
    let answer = document.getElementsByClassName("answer");
    for(let i=0; i<answer.length; i++) {
        answer[i].style.display = on_off;
    }
}

function autoPlay() {
    // The "scrollHeight" property returns the height of an element including padding,
    // but excluding borders, scrollbars, or margins.
    if(main.scrollTop >= (main.scrollHeight - main.clientHeight)) {
        main.scrollTop = 0;
    }
    main.scrollTop++;
}

function play() {
    main.style.overflow = "hidden";
    answer_area("block");
    if (playFlag) {
        scheduleID = window.setInterval(autoPlay, 50);
        playFlag = false;
    }
}

function pause() {
    clearInterval(scheduleID);
    playFlag = true;
}

function stop() {
    main.style.overflow = "auto";
    clearInterval(scheduleID);
    main.scrollTop = 0;
    answer_area("none");
    let answer_1 = document.getElementById("answer-1");
    answer_1.style.display = "block";
    current_id = 1;
    playFlag = true;
}

function ans(number) {
    let open_answer_id = document.getElementById("answer-" + number);
    let close_answer_id = document.getElementById("answer-" + current_id);

    if(open_answer_id.style.display != "block") {
        open_answer_id.style.display = "block";
        if(number != current_id) { // 點擊不同問題，要關閉之前問題的答案區塊
            close_answer_id.style.display = "none";
            current_id = number; // 把最新點開的問題號碼，更新到 current_id
        }
    }
    else {
        open_answer_id.style.display = "none";
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
        main.style.boxShadow = "0px 0px 10px #ffffff";
        document.body.style.backgroundColor = "black";
    }
    else {
        mode.innerText = "Dark";
        mode.style.backgroundColor = "pink";
        mode.style.color = "white";
        main.style.boxShadow = "0px 0px 10px #000000";
        document.body.style.backgroundColor = "white";
    }
}