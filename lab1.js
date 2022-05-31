const questionOne = function questionOne(arr) {
    // Implement question 1 here

    let a = arr[0]; // initializing 3 arr values to be multiplied then added
    let b = arr[1];
    let c = arr[2];
    // sum of the squares of all numbers
    addingsquares = (a * a) + (b * b) + (c * c);
    return addingsquares;

}


const questionTwo = function questionTwo(num) { 
    // Implement question 2 here

    if (num < 0) {
        value = 0;
    }
    else if (num == 1) {
        value = 1;
    }
    else {
        value = questionTwo(num - 1) + questionTwo(num - 2);
    }
    return value;

}

const questionThree = function questionThree(text) {
    // Implement question 3 here

    let x = 0;

    for (i = 0; i <= text.length - 1; ++i){
        if (text.charAt(i) == "a") { 
            x = x + 1;
        }
        if (text.charAt(i) == "e") {
            x = x + 1;
        }
        if (text.charAt(i) == "i") {
            x = x + 1;
        }
        if (text.charAt(i) == "o") {
            x = x + 1;
        }
        if (text.charAt(i) == "u") {
            x = x + 1;
        }
    }
    return x; //returning # of values for vowels in the string value (text)
}   
    

const questionFour = function questionFour(num) {
    // Implement question 4 here
    let f = 0;
    let x = 1;

    if (num == 1) {
        f = 1;
    }
    if (num == 0) {
        f = 1;
    }
    if (num < 0) {
        f=NaN;
    } 
    // loop through values less than or equal to num to return factorial for num provided
    for (i = 1; i <= num; ++i){ 
        x = x * i;
    }
    // factorial equal to coutner x
    f = x
    return f;


}

module.exports = {
    firstName: "Eric", 
    lastName: "Knapp", 
    studentId: "10473686",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};





