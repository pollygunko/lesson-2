function isPalindrome(str) {
    let strLen = str.length;
    let result = '';
    for (let i = 0; i < strLen; i++) {
        if (str[i] === str[strLen - 1 - i]) { //Сравниваем все элементы от начала строки со всеми элементами с конца строки
            result = '\"' + txt1 + '\"' + ' is palindrome';
        } else {
            result = '\"' + txt1 + '\"' + ' is NOT palindrome';
            return result;
        }
    }
    return result;
}
let txt1 = "kayak";
//let txt2 = "book";
test = isPalindrome(txt1);
//test2 = isPalindrome(txt2);

console.log(test);
//console.log(test2);