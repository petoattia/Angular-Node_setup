export class predictionData{
    model = 'predictionData';
    DOB: Date;
    maritalStatus: any = { name: 'Marital Status', value: '' };
    salary ={};
    education = {};
    employment = {};
    Male = '';
    Female = '';
    gender ='';
    predictionAccuracy = '';
    favoriteTVShow = '';
    carModel = {};
    favoriteCuisine = {};
    favoriteSport = {};
    favoriteGenre = {};
    favoriteSubject = {};
    favoriteDrink = {};
    favoriteHero = {};

    clear(){
        // this.DOB ='';
        this.maritalStatus = { name: 'Marital Status', value: '' };
        this.salary ={};
        this.education = {};
        this.employment = {};
        this.Male = '';
        this.Female = '';
        this.gender ='';
        this.predictionAccuracy = '';
        this.favoriteTVShow = '';
        this.carModel = {};
        this.favoriteCuisine = {};
        this.favoriteSport = {};
        this.favoriteGenre = {};
        this.favoriteSubject = {};
        this.favoriteDrink = {};
        this.favoriteHero = {};
    }
}

export class feedbackData{
    model = 'feedbackData';
    DOB: Date;
    maritalStatus: any = { name: 'Marital Status', value: '' };
    salary ={};
    education = {};
    employment = {};
    Male = '';
    Female = '';
    gender ='';
    predictionAccuracy = '';
    favoriteTVShow = '';
    carModel = {};
    favoriteCuisine = '';
    favoriteSport = '';
    favoriteGenre = '';
    favoriteSubject = '';
    favoriteDrink = '';
    favoriteHero = '';

    clear(){
        // this.DOB ='';
        this.maritalStatus = { name: 'Marital Status', value: '' };
        this.salary = {};
        this.education = {};
        this.employment = {};
        this.carModel = {};
        this.Male = '';
        this.Female = '';
        this.gender ='';
        this.predictionAccuracy = '';
        this.favoriteTVShow = '';
        this.favoriteCuisine = '';
        this.favoriteSport = '';
        this.favoriteGenre = '';
        this.favoriteSubject = '';
        this.favoriteDrink = '';
        this.favoriteHero = '';
    }
    
}