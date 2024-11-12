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
function calculateExpenses(num){
    let total = 0;
    for(const property in num){
        total += num[property];
    }
    return total;
};
function getLetterGrades(lst_scores){
    let result = lst_scores.map((num)=> {
        let answer = [];
        let grade = "";
        if (num >= 90 && num <= 100){
            grade = "A";
        }
        if (num >= 80 && num <= 89){
            grade = "B";
        }
        if (num >= 70 && num <= 79){
            grade = "C";
        }
        if (num >= 60 && num <= 69){
            grade = "D";
        }
        if (num < 60){
            grade = "F";
        }
        return grade;
    });
    return result;
};
function getHealthyItems(obj){
    let healthyItems = [];
    obj.forEach((num)=> {
        for(const property in num){
            if(num[property] === true){
                    healthyItems.push(num);
            }
        }
    });
    return healthyItems;

};
module.exports = {getTestScores,getGrades,getSquaredIntegers,calculateExpenses,getLetterGrades,getHealthyItems};