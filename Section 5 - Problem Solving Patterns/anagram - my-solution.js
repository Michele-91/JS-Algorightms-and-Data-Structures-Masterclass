//Given two strings, write a function to determine if the second string 
//is an anagram of the first. An anagram is a word, phrase, or name formed
//by rearranging the letters of anotehr, such as cinema, formed from iceman.

function anagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }
    let letterCounter1 = {};
    let letterCounter2 = {};
    for(let char of str1) {
        letterCounter1[char] = (letterCounter1[char] || 0) + 1;
    }
    for(let char of str2) {
        letterCounter2[char] = (letterCounter2[char] || 0) + 1;
    }
    for(let val in letterCounter1) {
        if(!(val in letterCounter2 )) {
            return false;
        }
        if(letterCounter2[val] !== letterCounter1[val]) {
            return false;
        }
    }
    return true;
}

anagram("", ""); //true
anagram("aaz", "zza"); //false
anagram("anagram", "nagaram"); //true
anagram("rat", "car"); //false
anagram("awesome", "awesom"); //false
anagram("qwerty", "qeywrt"); //true
anagram("texttwisttime", "timetwisttext"); //true