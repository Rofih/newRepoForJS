function getTestScores(testScores){
    let result = testScores.filter((num)=> {
        return num >= 70;
    });
    return result;
};
function getGrades(examGrades){
    let result = examGrades.map((num)=> {
        return num + 5;
    });
    return result;
};
function getSquaredIntegers(lst_integers){
    let result = lst_integers.map((num)=> {
        return num**2;
    });
    return result;
};
module.exports = {getTestScores,getGrades,getSquaredIntegers};