const sentence = "hello there from lighthouse labs";
console.log("");

const timeOutLoop = function() {
  console.log("\n");
};

for (let i = 0; i <= sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    if (i >= sentence.length) {
      timeOutLoop();
    }
  },i * 50);
}

