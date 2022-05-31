exports.charCount = function(str) {
    let repStr = str.replace(/ /g, "");
    let charArr = repStr.split("").sort();
    let letterMap = {};
    let mappedArr = [];
    
    charArr.forEach(function charMap(char) {
      letterMap[char] = (letterMap[char]|| 0) +1;
    });

    for (let letter in letterMap) {
      mappedArr.push([letter, letterMap[letter]]);
    };

    mappedArr.sort(function(a,b) {
      if (a[1] === b[1]) {
        return a[0] > b[0];
      };
      if (a[1] > b[1]) {return -1};
      if (a[1] < b[1]) {return 1};
    });

    return mappedArr;

}

/* solution isnt logically wrong but js sorts this paired array
 in a way that looks for a center by comparing the begining to the end. 
 it wont solve everything using this sort method
 */
