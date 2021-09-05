function feez(a, b, c) {
  let arr = a.split(" ");
  let result = [];
  b--;

  for (let i = 0; i < arr.length; i++) {
		let newWord;

    if (arr[i].length > b) {
      
      let word = Array.from(arr[i]);
      word[b] = c;
      newWord = word.join("");
      result.push(newWord);
    }
		else result.push(arr[i])
  }
  console.log(result.join(" "));
  return result;
}

feez("This is the first sentence", 4, "new");
