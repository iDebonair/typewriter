const sentence = "hello there from lighthouse labs \n";
let timing = 0;

for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write(char);
}, timing);
timing += 50;

}
