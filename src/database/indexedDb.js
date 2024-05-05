import {openDB} from 'idb';

const dbPromise = openDB('myDatabase',1,{
    upgrade(db) {
        const store = db.createObjectStore('myStore', {
            keyPath: 'id',
            autoIncrement: true,

        });
        store.createIndex('date','date');
    }
});

export default dbPromise;