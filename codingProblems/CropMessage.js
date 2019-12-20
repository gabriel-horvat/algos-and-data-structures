function crop(message, K) {
  // Case 0: Total message is below limit
  if (message.length < K) {
    return message;
  }
​
  let i = K - 1;
  // Case 1: Limit falls exactly on the end of a word
  if (message[i + 1] === " ") {
    return message.slice(0, i + 1);
  }
​
  // Case 2: Limit falls exactly on a whitespace character
  if (message[i] === " ") {
    return message.slice(0, i);
  }
​
  // Case 3: Limit falls on a non-last letter of a word
  while (message[i] != " ") {
    i -= 1;
  }
  return message.slice(0, i);
}
​
console.log(crop("Codility We test coders", 14));
console.log(crop("Why not", 100));
console.log(crop("The quick brown fox jumps over the lazy dog", 39));