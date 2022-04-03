function getStudentName(i, className) {
    document.getElementById("dat"+i).innerHTML = className[i][0];
}

function getStudentScore(i, className) {
    document.getElementById("sco"+i).innerHTML = className[i][1];
}

var class1 = [
    ["Bob", 100], ["Arianna", 90], ["John", 90],
    ["Mark", 80], ["Erica", 70], ["Paul", 80],
    ["Kanye", 85], ["Ringo", 90], ["Tracy", 90],
    ["Bruce", 90]
];

for (let i = 0; i < 10; i++){
    getStudentName(i, class1);
}

for (let i = 0; i < 10; i++){
    getStudentScore(i, class1);
}