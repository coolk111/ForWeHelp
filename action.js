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
    // clientWidth, clientHeight 是元素所包含的「子元素」的寬度及高度，其中包含了padding，但不包含邊界及捲軸。
    // scrollWidth/scrollHeight 也是元素所包含的「子元素」的「完整」寬度和高度，其中包含了超出捲軸之外的部分的寬度與高度。在沒有捲軸的情況下，這個值就等於 clientWidth/clientHeight。
    if(main.scrollTop >= (main.scrollHeight - main.clientHeight)) { // 捲軸能捲動的距離
        main.scrollTop = 0;
    }
    main.scrollTop++;
}

function play() {
    main.style.overflow = "hidden";
    answer_area("block");
    if (playFlag) {
        scheduleID = window.setInterval(autoPlay, 70);
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