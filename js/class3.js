function getStudentName(i, className) {
    document.getElementById("dat"+i).innerHTML = className[i][0];
}

function getStudentScore(i, className) {
    document.getElementById("sco"+i).innerHTML = className[i][1];
}

var class3 = [
    ["Tom", 100], ["Beth", 90], ["Charlie", 90],
    ["Chris", 80], ["Will", 70], ["Cassie", 80],
    ["Katie", 85], ["Michael", 90], ["Jordan", 90],
    ["Larry", 90]
];

for (let i = 0; i < 10; i++){
    getStudentName(i, class3);
}

for (let i = 0; i < 10; i++){
    getStudentScore(i, class3);
}