import Database from 'better-sqlite3';
const db = new Database("./data/exam.db", { verbose: console.log });

export function createTables() {
    const sql = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS missions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        cost INTEGER NOT NULL,
        duration INTEGER NOT NULL,
        start_date TEXT NOT NULL,
        description TEXT,
        media TEXT
      );
    `;

    db.exec(sql);
}

/* Andmebaasid
funktsioonid
   siselogimine - select 
   missiooni editimine - update
   missiooni loomine -insert into
   kustutsmine - delete
   ühe missiooni kohta - select from where
   kõikide missioonide kohta - select from
Kasutajad
   kasutaja nimi, parool, 
Misioonid
   nimi, maksumus, kestvus, alguse kuupäev, kirjeldused(esimese lõigu pealkiri, sisu)
   9pildifaili [faili nimi-text] colum +logo
	
vaated    
   sisselogimise vaade
   admini vaade=kõikide misioonide vaade
       nupp-loo uus missioon - iga misiooni kõrval nupp kustutsmiseks
   missiooni loomise vaade & edit */