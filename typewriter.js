const sentence = "hello there from lighthouse labs\n";
let animate = 0;
for (const char of sentence) {
  animate += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000 + animate);
}; 

