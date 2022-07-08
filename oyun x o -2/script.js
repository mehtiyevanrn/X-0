let arr = [];
let count;
let x = "X";
let o = "O";
let player1;
let player2;
let point1 = 0;
let point2 = 0;

start();
function start() {
    count = 1;
    player1 = player1 == undefined ? prompt("player1 -i daxil edin", x) : player1;
    player2 = player2 == undefined ? prompt("player2 -i daxil edin", o) : player2;
    let ply1 = document.getElementById("ply1");
    let ply2 = document.getElementById("ply2");
    ply1.innerHTML = player1 + " : " + point1;
    ply2.innerHTML = player2 + " : " + point2;
    Arr();
    table();
}

function table() {
    let tbl = "";
    let table = document.getElementById("tbl");
    for (i = 0; i < 3; i++) {
        tbl += `<tr>`
        for (j = 0; j < 3; j++) {
            tbl += `<td onclick="Click(${i}, ${j})">${arr[i][j] == undefined ? "" : arr[i][j]}</td>`
        };
    };
    table.innerHTML = tbl
};

function Arr() {
    for (i = 0; i < 3; i++) {
        arr[i] = [];
    };
};

function Click(i, j) {
    if (arr[i][j] == undefined) {
        if (count % 2 == 0) {
            arr[i][j] = o;
        } else {
            arr[i][j] = x;
        };
        count++;
        table();
        yoxla();
    }
}
function yoxla() {
    for (let k = 0; k < 3; k++) {
        if (arr[k][0] != undefined && arr[k][0] == arr[k][1] && arr[k][1] == arr[k][2]) {
            finish(arr[k][0])
        }
    }
    for (let k = 0; k < 3; k++) {
        if (arr[0][k] != undefined && arr[0][k] == arr[1][k] && arr[1][k] == arr[2][k]) {
            finish(arr[0][k])
        }
    }
    if (arr[0][0] != undefined && arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
        finish(arr[0][0])
    }
    if (arr[0][2] != undefined && arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]) {
        finish(arr[0][2])
    }
    if (count == 10) {
        setTimeout(() => {
            alert("berabere qaldi")
        }, 300);
        start();
    }
}
function finish(item) {
    let winner = item == x ? "player1 qalib" : "player2 qalib";
    item == x ? point1++ : point2++;

    setTimeout(() => {
        alert(winner);
    }, 300);
    start();
}