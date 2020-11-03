const sentence = "hello there from lighthouse labs";

let numTimes = -1;
const interval = setInterval(() => {
  numTimes++;
  process.stdout.write(sentence[numTimes]);
  if (numTimes === sentence.length - 1) {
    process.stdout.write("\n");
    return clearInterval(interval);
  }
}, 50);
