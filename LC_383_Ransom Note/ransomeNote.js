// Total time complexity is = O(n) + O(m) = O(n+m)
var canConstruct = function (ransomNote, magazine) {
  var noteArr = ransomNote.split(" ");
  var magazineArr = magazine.split(" ");
  var magazineObj = {};
  //Linear time complexity O(n)
  magazineArr.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });
  var noteIsPossible = true;

  //Linear time complexity O(m) 
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    } else {
      noteIsPossible = false;
    }
  });
  return noteIsPossible;
};

console.log(canConstruct('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'));