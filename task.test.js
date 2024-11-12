const {getTestScores,getGrades,getSquaredIntegers} = require ("./task")

test("grades greater or equals to 70", ()=> {
    let testScores = [90,45,70,68,97,73,81,84];
    let result = getTestScores(testScores);
    let expected = [90,70,97,73,81,84];
    expect(expected).toEqual(result);
});
test("add grades by 5", ()=> {
    let examGrades = [85,92,75,95];
    let result = getGrades(examGrades);
    let expected = [90,97,80,100];
    expect(expected).toEqual(result);
});
test("square each number", ()=> {
    let lst_integers = [2,4,6,8,10];
    let result = getSquaredIntegers(lst_integers);
    let expected = [4,16,36,64,100];
    expect(expected).toEqual(result);
})