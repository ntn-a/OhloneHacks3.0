function getStudentName(i, className) {
    document.getElementById("dat"+i).innerHTML = className[i][0];
}

function getStudentScore(i, className) {
    document.getElementById("sco"+i).innerHTML = className[i][1];
}

var class2 = [
    ["Derik", 100], ["Kyle", 90], ["Lana", 90],
    ["Jeter", 80], ["Ruth", 70], ["George", 80],
    ["Mike", 85], ["Daniel", 90], ["Larry", 90],
    ["Monica", 90]
];

for (let i = 0; i < 10; i++){
    getStudentName(i, class2);
}

for (let i = 0; i < 10; i++){
    getStudentScore(i, class2);
}