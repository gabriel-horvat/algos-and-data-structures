function shuffle(int) {
  const s = int.toString();
  let res = [];
  let i = 0;
  while (true) {
    let a = 0 + i;
    let b = s.length - 1 - i;
    if (a > b) {
      break;
    }
    res.push(s[a]);
    if (a === b) {
      break;
    }
    res.push(s[b]);
    i += 1;
  }
  return parseInt(res.join(""));
}
​
console.log(shuffle(123456));
console.log(shuffle(130));