const { MongoClient } = require("mongodb");

const url = "";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server!");
  const db = client.db(dbName);
  const collection = db.collection("User");

  // Inserting Data to DB
  const data = {
    firstName: "Vinay",
    lastName: "Sahu",
    city: "Korba",
    phoneNumber: "155262329",
  };

  // const insertResult = await collection.insertMany([data]);
  // console.log("Inserted documents =>", insertResult);

  const updateResult = await db.collection("User").updateOne(
    { firstName: "Vikas" },
    {
      $set: { "size.uom": "cm", status: "P" },
      $currentDate: { lastModified: true },
    }
  );
  console.log("Updated documents =>", updateResult);

  // Reading from DB
  // const findResult = await collection.find({}).toArray();
  // console.log("Found documents =>", findResult);

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
