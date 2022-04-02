const testScores = {
    "bob": 50,
    "john": 10,
    "joe": 90
};

function getStudentScore(student) {
    return testScores[student];
}

function setStudentScore(student, score) {
    testScores[student] = score;
}