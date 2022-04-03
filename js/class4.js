function getStudentName(i, className) {
    document.getElementById("dat"+i).innerHTML = className[i][0];
}

function getStudentScore(i, className) {
    document.getElementById("sco"+i).innerHTML = className[i][1];
}

var class4 = [
    ["Bird", 100], ["Mark", 90], ["Rose", 90],
    ["Tia", 80], ["Ruby", 70], ["Sebastian", 80],
    ["Lewis", 85], ["Sarah", 90], ["May", 90],
    ["Dana", 90]
];

for (let i = 0; i < 10; i++){
    getStudentName(i, class4);
}

for (let i = 0; i < 10; i++){
    getStudentScore(i, class4);
}