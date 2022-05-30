exports.charCount = function(str) {
    let repStr = str.replace(/ /g, "");
    let charArr = repStr.split("").sort();
    let letterMap = {};
    let mappedArr = [];
    
    charArr.forEach(function charMap(char) {
      letterMap[char] = (letterMap[char || 0]) +1;
    });

    for (let letter in letterMap) {
      mappedArr.push([letter, letterMap[letter]]);
    };

    mappedArr.sort(function(a,b) {
      return b[1] - a[1];
    });

    return mappedArr;

}