// reference: https://www.npmjs.com/package/idb 
import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


// accepts content & adds it to the database
export const putDb = async (content) => {
  console.log("POST to the database");

  // creates a connection to the database, using a specified version
  const jateDb = await openDB("jate", 1);

  // creates a new transaction, specifies the database and data privileges
  const tx = jateDb.transaction("jate", "readwrite");

  // opens the desired object store
  const store = tx.objectStore("jate");

  // uses ".add()" method on the store, passes in the content
  const request = store.put({ id: 1, value: content });

  // gets request confirmation
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};


// retrieves data from the database
export const getDb = async () => {
  console.log("GET from the database");

  // "
  const jateDb = await openDB("jate", 1);

  const tx = jateDb.transaction("jate", "readonly");

  const store = tx.objectStore("jate");

  // uses ".getAll()" method to get all data in the database
  const request = store.get(1);

  // gets request confirmation
  const result = await request;
  return result?.value;
};


initdb();