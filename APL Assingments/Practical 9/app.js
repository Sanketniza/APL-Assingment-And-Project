const fs = require('fs');

console.log('Starting asynchronous file operations...');

fs.readFile('./fileA.txt', 'utf8', (err1, data1) => {
  if (err1) {
    console.error('Error reading fileA.txt:', err1);
    return;
  }
  
  console.log('Successfully read fileA.txt');
  
  fs.readFile('./fileB.txt', 'utf8', (err2, data2) => {
    if (err2) {
      console.error('Error reading fileB.txt:', err2);
      return;
    }
    
    console.log('Successfully read fileB.txt');
    
    const combinedData = `--- Combined Content ---\n${data1}\n${data2}`;
    
    fs.writeFile('./combined.txt', combinedData, (err3) => {
      if (err3) {
        console.error('Error writing to combined.txt:', err3);
        return;
      }
      
      console.log('Successfully combined files into combined.txt!');
    });
  });
});

console.log('... Node.js continues running while files are read.');