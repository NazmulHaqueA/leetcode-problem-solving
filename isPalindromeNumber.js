function isPalindrome(num) {
  let original = num;
  let reversed = 0;
  while (num != 0) {
    reminder = num % 10;
    reversed = reversed * 10 + reminder;
    num = parseInt(num/10);
  }
  if (original === reversed) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(147));
console.log(isPalindrome(16461));
