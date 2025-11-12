const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";

// 2. Client initialization is simpler
const client = new MongoClient(uri);

async function run() {
  try {
    // 3. Connect to the local server
    await client.connect();
    
    // 4. Specify the database and collection
    const db = client.db("MernApp"); // You can name this database anything
    const collection = db.collection("students"); // You can name this collection anything

    console.log("Successfully connected to local MongoDB!");

    // --- Insert a Document ---
    console.log("\n--- Inserting Document ---");
    const insertResult = await collection.insertOne({
      name: "Local Student",
      email: "local@example.com",
      major: "Database Admin"
    });
    console.log(`Inserted document with ID: ${insertResult.insertedId}`);

    // --- Find a Document ---
    console.log("\n--- Finding Document ---");
    const findResult = await collection.findOne({ name: "Local Student" });
    
    if (findResult) {
      console.log("Found document:");
      console.log(findResult);
    } else {
      console.log("Document not found.");
    }

  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    // 5. Always close the connection
    await client.close();
    console.log("\nConnection to MongoDB closed.");
  }
}

console.log("Connecting to local MongoDB...");
run();