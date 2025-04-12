const { MongoClient } = require("mongodb");

const url = 'mongodb+srv://namastedev:IrMM3WXoe6nEqff9@namastenode.0cxsjfz.mongodb.net/';

const databaseName = "Testing";

const client = new MongoClient(url);

async function main() {
  await client.connect(); 
  console.log("Connected successfully to server");
  let db = client.db(databaseName);
  let collection = db.collection("User");

  let findUser = await collection.find({ firstName: 'Kalash' }).toArray();
  if(findUser.length == 0) {
    let data = {
      firstName: "Kalash",
      lastName: "Pandey",
      city: "Mumbai",
      phoneNo: "984567858"
    }
    let result = await collection.insertMany([data])
    console.log(result);
  }
  console.log(findUser);

  return "done"
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
