// Write a function which takes in a string and returns counts of each characetr in the string.

charCount("aaaa");
/* {
    a: 4;
} */

charCount("hello");
/* {
    h: 1,
    e: 1,
    l: 2,
    o: 1  
} */

charCount("Your PIN number is 1234!")
/* {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    b: 1,
    e: 1,
    i: 2,
    m: 1,
    n: 2,
    o: 1,
    p: 1,
    r: 2,
    s: 1,
    u: 2,
    y: 1  
} */

function charCount(str) {
    //do something
    //return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
}

function charCount(str) {
    //make object to return at end
    //loop over string, for each character...
        //if the char is a number/letter AND is key in object, add 1 to count
        //if the char is a number/letter AND not in object, add it to the object and set value to 1
        //if char is something else (space, period, etc.) don't do anything
    //return object at end
}

function charCount(str) {
    //make object to return at end
    var result = {};
    //loop over string, for each character...
    for(var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        //if the char is a number/letter AND is key in object, add 1 to count
        if(result[char] > 0) {
            result[char]++;
        } 
        //if the char is a number/letter AND not in object, add it to the object and set value to 1
        else {
            result[char] = 1;
        }
    }
        //if char is something else (space, period, etc.) don't do anything
    //return object at end
    return result;
}

function charCount(str) {
    var obj = {};
    for(var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            if(obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1; 
            };
        }
    }
    return obj;
}

function charCount(str) {
    var obj = {};
    for(var char of str) {
        if(isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
        return false;
    }
    return true;
}