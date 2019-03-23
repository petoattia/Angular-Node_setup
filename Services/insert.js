const sqlite3 = require('sqlite3').verbose();

// open the database


module.exports = function() {
    this.insertFeedback = function(data) {
        let db = new sqlite3.Database('../../plain;base64,Ojp7MjBEMDRGRTAtM0FFQS0xMDY5LUEyRDgtMDgwMDJCMzAzMDlEfQ==.db', sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Connected to the prediction database.');
        });

        console.log();
        let record = [
            [data.DOB, data.maritalStatus.value, data.salary.value, data.education.value, data.employment.value, data.favoriteTVShow, data.carModel.value, data.carModel.value, data.gender, data.favoriteCuisine, '', data.favoriteSport, '', '', data.favoriteGenre, data.favoriteSubject, data.favoriteDrink, data.favoriteHero]
        ];
        console.log(record);
        db.run('INSERT INTO PredictionTableUpdated ( DOB, M_STATUS, SALARY, EDU_DATA, EMP_DATA, FAV_TV, PREF_CAR, GENDER, FAV_CUIS, FAV_MUSIC, FAV_SPORT, FAV_COLR, NEWS_SOURCE, GEN_MOVIES, FAV_SUBJ, ALCOHOL, FAV_SUPERHERO) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [data.DOB, data.maritalStatus.value, data.salary.value, data.education.value, data.employment.value, data.favoriteTVShow, data.carModel.value, data.gender, data.favoriteCuisine, '', data.favoriteSport, '', '', data.favoriteGenre, data.favoriteSubject, data.favoriteDrink, data.favoriteHero], function(err) {
            if (err) {
                return console.log(err.message);
            }
            console.log(`A row has been inserted with rowid ${this.lastID}`);
            return (`A row has been inserted with rowid ${this.lastID}`);
        });

        db.close((err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Close the database connection.');
        });
    };
    this.parseBody = function(body) {
        let sqlQuery = '';

        // sqlQuery = "INSERT INTO PredictionTable ( ID, DOB, M_STATUS, SALARY, EDU_DATA, EMP_DATA, FAV_TV, PREF_CAR, GENDER, FAV_CUIS, FAV_MUSIC, FAV_SPORT, FAV_COLR, NEWS_SOURCE, GEN_MOVIES, FAV_SUBJ, ALCOHOL, FAV_SUPERHERO ) VALUES ( 'ID', 'DOB', 'M_STATUS', 'SALARY', 'EDU_DATA', 'EMP_DATA', 'FAV_TV', 'PREF_CAR', 'GENDER', 'FAV_CUIS', 'FAV_MUSIC', 'FAV_SPORT', 'FAV_COLR', 'NEWS_SOURCE', 'GEN_MOVIES', 'FAV_SUBJ', 'ALCOHOL', 'FAV_SUPERHERO')";
        return sqlQuery;
    }


}



// let sql = "SELECT DOB,M_STATUS FROM PredictionTable; ";

// db.all(sql, [], (err, rows) => {
//     if (err) {
//         console.log('peter error');
//         throw err;
//     }
//     // console.log('peter rows' + rows);
//     for (let index = 0; index < 2; index++) {
//         console.log(rows[index]);
//         console.log(rows[index].name);

//     }
//     // rows.forEach((row) => {
//     //     console.log(row.name);

//     // });
// });