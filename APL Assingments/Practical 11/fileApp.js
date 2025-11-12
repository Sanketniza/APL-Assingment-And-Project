const fs = require('fs');
const readline = require('readline');

const fileName = 'my-notebook.txt';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log('\n--- Node.js File Manager ---');
  console.log('1. Write to File (Overwrites)');
  console.log('2. Read File');
  console.log('3. Update File (Appends)');
  console.log('4. Delete File');
  console.log('5. Exit');
  
  rl.question('Please enter your choice (1-5): ', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Enter content to write: ', (content) => {
          try {
            fs.writeFileSync(fileName, content, 'utf8');
            console.log(`[SUCCESS] File "${fileName}" was CREATED/OVERWRITTEN.`);
          } catch (err) {
            console.error('Error writing file:', err);
          }
          showMenu();
        });
        break;
      
      case '2':
        try {
          const data = fs.readFileSync(fileName, 'utf8');
          console.log(`\n--- Content of ${fileName} ---`);
          console.log(data);
          console.log('--- End of File ---');
        } catch (err) {
          console.log(`[ERROR] Could not read "${fileName}". Does it exist?`);
        }
        showMenu();
        break;
        
      case '3':
        rl.question('Enter content to append: ', (content) => {
          try {
            fs.appendFileSync(fileName, `\n${content}`, 'utf8');
            console.log(`[SUCCESS] Content was UPDATED (appended) to "${fileName}".`);
          } catch (err) {
            console.error('Error updating file:', err);
          }
          showMenu();
        });
        break;
        
      case '4':
        try {
          fs.unlinkSync(fileName);
          console.log(`[SUCCESS] File "${fileName}" was DELETED.`);
        } catch (err) {
          console.log(`[ERROR] Could not delete "${fileName}". Does it exist?`);
        }
        showMenu();
        break;
        
      case '5':
        console.log('Exiting...');
        rl.close();
        break;
        
      default:
        console.log('[ERROR] Invalid choice. Please enter a number from 1 to 5.');
        showMenu();
        break;
    }
  });
}

showMenu();