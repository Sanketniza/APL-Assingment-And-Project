// eventsApp.js

const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(level, message) {
    const timestamp = new Date().toISOString();
    const logDetails = {
      level: level.toUpperCase(),
      message: message,
      timestamp: timestamp
    };

    const logString = `[${logDetails.timestamp}] [${logDetails.level}]: ${logDetails.message}`;
    
    console.log(logString);
    
    this.emit('logMessage', logDetails);
  }
}

const logger = new Logger();

logger.on('logMessage', (data) => {
  if (data.level === 'ERROR') {
    console.log(`  ---> [SYSTEM ALERT]: An error was reported. Action may be required.`);
  }
});

logger.once('logMessage', () => {
  console.log(`  ---> Logger instance has started logging.\n`);
});

console.log("--- Starting Application Log ---\n");

logger.log('info', 'Application started successfully.');
logger.log('warn', 'Low memory warning.');
logger.log('error', 'Failed to connect to the primary database.');
logger.log('info', 'Application shutting down.');

console.log("\n--- End of Application Log ---");