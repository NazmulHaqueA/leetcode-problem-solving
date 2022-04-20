var reverseWords = function (s) {
  let reverse = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    reverse = char + reverse;
  }
  return reverse.split(" ").reverse().join(" ");

  //  another way
  //  const stringArr = s.split(' ');
  //  const reversedArr = stringArr.map(str => str.split("").reverse().join(""));
  //  return reversedArr.join(' ');

  //   turn that solution to one line
  // return s.split(' ').map(v=>{return v.split('').reverse().join('')}).join(' ');
  
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("God Ding"));
