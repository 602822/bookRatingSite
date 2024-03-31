import SqLite from "react-native-sqlite-storage";

const db = SqLite.openDatabase(
  {
    name: "BookDatabase",
    location: "default",
  },
  () => {
    console.log("Database opened");
  },
  (error) => {
    console.log("Error opening database: ", error);
  }
);

db.transaction((tx) => {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, book_data TEXT);",
    [],
    () => console.log("Table created"),
    (error) => console.log("Error creating table:", error)
  );
});
