const typewriter = function(sentence) {
  let animate = 0;
  sentence = sentence + "\n";
  for (let i = 0;i < sentence.length; i++) {
    animate += 50;
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, 1000 + animate);
  };
}
 
typewriter("hello there from lighthouse labs");

