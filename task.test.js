const {getTestScores,getGrades,getSquaredIntegers, calculateExpenses,getLetterGrades,getHealthyItems} = require ("./task")

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
});
test("calculate expenses", ()=> {
    let lst = {
        "groceries" : 150,
        "dinning out" : 100,
        "transportation" : 50,
        "entertainment" : 80,
    };
    let result = calculateExpenses(lst);
    let expected = 380;
    expect(expected).toBe(result);
});
test("claculate letter garde", ()=> {
    const scores = [95, 78, 85, 60, 45, 92];
    let result = getLetterGrades(scores);
    let expected = [ 'A', 'C', 'B', 'D', 'F', 'A' ];
    expect(expected).toEqual(result);
});
test("healthy items", ()=> {
    const shoppingList = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
        { name: 'Soda', category: 'Beverages', isHealthy: false }
    ];
    let result = getHealthyItems(shoppingList);
    let expected = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true }
      ];
    expect(expected).toEqual(result);
});