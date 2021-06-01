const sentence = "hello there from lighthouse labs";
let animate = 0;
sentence = sentence + "\n";
for (const char of sentence) {
  animate += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000 + animate);
}; 


