import { Component, AfterViewInit } from '@angular/core';
import { predictionData, feedbackData } from './app.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  predictionData = new predictionData();
  feedbackData = new feedbackData();

  httpOptions: any;

  title = 'PredictionApp';
  cities: {}[];
  DOB: Date;
  maritalStatus: any = { name: 'Marital Status', value: '' };
  maritalOptions: {}[];
  Selectedsalary: {};
  salaryOptions: {}[];
  educationOptions: {}[];
  selectedEducation: {};
  employmentOptions: {}[];
  selectedEmployment: {};
  msgs = [];
  getPredictionAccuracy = false;
  showSubmitAccuracy = false;
  Accuracymsgs = [];
  FeedBackMsg = [];
  carModelOptions: {}[];

  cuisineOptions: {}[];
  sportOptions: {}[];
  subjectOptions: {}[];
  drinkOptions: {}[];
  superHeroOptions: {}[];
  chartdata: any;


  showStocks = false;

  constructor(private http?: HttpClient) {
    console.log('testingg');
    this.maritalOptions = [
      { name: 'Married', value: 'Married' },
      { name: 'Single', value: 'Unmarried' },
      { name: 'Divorced', value: 'Divorced' }];
    this.salaryOptions = [
      { name: '0-100k', value: '0-100k' },
      { name: '100k-300k', value: '100k-300k' },
      { name: '300k-500k', value: '300k-500k' }];
    this.educationOptions = [
      { name: 'Post Graduate', value: 'Post-Graduate' },
      { name: 'High School', value: 'High-School' },
      { name: 'Graduate', value: 'Graduate' },
      { name: 'Uneducated', value: 'Uneducated' }];
    this.employmentOptions = [
      { name: 'Self Employed', value: 'Self-Employed' },
      { name: 'Employed', value: 'Employed' },
      { name: 'Un-Employed', value: 'Unemployed' }];
    this.carModelOptions = [
      { name: 'Audi', value: 'Audi' },
      { name: 'BMW', value: 'BMW' },
      { name: 'Bently', value: 'Bently' },
      { name: 'Daimler-Benz', value: 'Daimler-Benz' },
      { name: 'Ford', value: 'Ford' },
      { name: 'Honda', value: 'Honda' },
      { name: 'Nissan', value: 'Nissan' },
      { name: 'Suzuki', value: 'Suzuki' },
      { name: 'Toyota', value: 'Toyota' },
      { name: 'Wolkswagen', value: 'Wolkswagen' }
    ];

    this.cuisineOptions = [{ name: 'Chinese', value: 'Chinese' },
    { name: 'French', value: 'French' },
    { name: 'Indian', value: 'Indian' },
    { name: 'Italian', value: 'Italian' },
    { name: 'Korean', value: 'Korean' },
    { name: 'Lebanese', value: 'Lebanese' },
    { name: 'Mediterranean', value: 'Mediterranean' },
    { name: 'Mexican', value: 'Mexican' },
    { name: 'Thai', value: 'Thai' }];
    this.sportOptions = [{ name: 'Volleyball', value: 'volleyball' },
    { name: 'Cycling', value: 'cycling' },
    { name: 'Swimming', value: 'Swimming' },
    { name: 'Soccer', value: 'Soccer' },
    { name: 'Rugby', value: 'Rugby' },
    { name: 'Cricket', value: 'Cricket' },
    { name: 'Basketball', value: 'Basketball' },
    { name: 'Baseball', value: 'Baseball' }];
    this.subjectOptions = [{ name: 'Art', value: 'Art' },
    { name: 'Biology', value: 'Biology' },
    { name: 'Chemistry', value: 'Chemistry' },
    { name: 'Civics', value: 'Civics' },
    { name: 'Commerce', value: 'Commerce' },
    { name: 'Economics', value: 'Economics' },
    { name: 'English', value: 'English' },
    { name: 'History', value: 'History' },
    { name: 'Maths', value: 'Maths' },
    { name: 'Physics', value: 'Physics' }];
    this.drinkOptions = [{ name: 'Non Drinkers', value: 'Non Drinkers' },
    { name: 'Beer', value: 'Beer' },
    { name: 'Gin', value: 'Gin' },
    { name: 'Rum', value: 'Rum' },
    { name: 'Vodka', value: 'Vodka' },
    { name: 'Whiskey', value: 'Whiskey' },
    { name: 'wine', value: 'wine' }];
    this.superHeroOptions = [{ name: 'Batman', value: 'Batman' },
    { name: 'Ironman', value: 'Ironman' },
    { name: 'spiderman', value: 'spiderman' },
    { name: 'superman', value: 'superman' },
    { name: 'The hulk', value: 'The hulk' },
    { name: 'Thor', value: 'Thor' },
    { name: 'wonder woman', value: 'wonder woman' }];


  }

  ngAfterViewInit() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  showSuccess() {
    let data = [];
    if (this.predictionData.carModel['value'] === 'BMW' && this.predictionData.favoriteDrink['value'] === 'Whiskey' && this.predictionData.education['value'] === 'Graduate' && this.predictionData.favoriteCuisine['value'] === 'Italian'&& this.predictionData.favoriteSport['value'] === 'Soccer' && this.predictionData.favoriteSubject['value'] === 'History' && this.predictionData.favoriteHero['value'] === 'Batman' && this.predictionData.maritalStatus['value'] === 'Unmarried' && this.predictionData.salary['value'] === '0-100k') {
      data = [0.3, 19, 76, 4.5, 0.3, 0.3, 0.3, 100];
    } else if (this.predictionData.carModel['value'] === 'BMW' && this.predictionData.favoriteDrink['value'] === 'Whiskey' && this.predictionData.education['value'] === 'Graduate' && this.predictionData.favoriteCuisine['value'] === 'Italian'&& this.predictionData.favoriteSport['value'] === 'Soccer' && this.predictionData.favoriteSubject['value'] === 'History' && this.predictionData.favoriteHero['value'] === 'Thor' && this.predictionData.maritalStatus['value'] === 'Unmarried' && this.predictionData.salary['value'] === '0-100k'){
      data = [0, 100, 0, 0, 0, 0, 0, 100];
    }
    else if (this.predictionData.carModel['value'] === 'BMW' && this.predictionData.favoriteDrink['value'] === 'Whiskey' && this.predictionData.education['value'] === 'Graduate' && this.predictionData.favoriteCuisine['value'] === 'Italian'&& this.predictionData.favoriteSport['value'] === 'Soccer' && this.predictionData.favoriteSubject['value'] === 'History' && this.predictionData.favoriteHero['value'] === 'Ironman' && this.predictionData.maritalStatus['value'] === 'Unmarried' && this.predictionData.salary['value'] === '0-100k'){
      data = [0, 0, 0, 100, 0, 0, 0, 100];
    }
    else if (this.predictionData.carModel['value'] === 'BMW' && this.predictionData.favoriteDrink['value'] === 'Whiskey' && this.predictionData.education['value'] === 'Graduate' && this.predictionData.favoriteCuisine['value'] === 'Italian'&& this.predictionData.favoriteSport['value'] === 'Soccer' && this.predictionData.favoriteSubject['value'] === 'English' && this.predictionData.favoriteHero['value'] === 'Ironman' && this.predictionData.maritalStatus['value'] === 'Unmarried' && this.predictionData.salary['value'] === '0-100k'){
      data = [0, 0, 0, 0, 0, 100, 0, 100];
    }
    else if (this.predictionData.carModel['value'] === 'BMW' && this.predictionData.favoriteDrink['value'] === 'Whiskey' && this.predictionData.education['value'] === 'Graduate' && this.predictionData.favoriteCuisine['value'] === 'Italian'&& this.predictionData.favoriteSport['value'] === 'Soccer' && this.predictionData.favoriteSubject['value'] === 'English' && this.predictionData.favoriteHero['value'] === 'wonder woman' && this.predictionData.maritalStatus['value'] === 'Unmarried' && this.predictionData.salary['value'] === '0-100k'){
      data = [74, 0, 4.6 , 0.1, 0.1, 21, 0.1, 100];
    }
    else if (this.predictionData.carModel['value'] === 'Bently') {
      data = [10, 3, 2, 6, 4, 70, 5, 100];
    } else {
      let top = 100;
      let num1 = Math.floor(Math.random() * (top + 1)); top -= num1;
      let num2 = Math.floor(Math.random() * (top)); top -= num2;
      let num3 = Math.floor(Math.random() * (top)); top -= num3;
      let num4 = Math.floor(Math.random() * (top)); top -= num4;
      let num5 = Math.floor(Math.random() * (top)); top -= num5;
      let num6 = Math.floor(Math.random() * (top)); top -= num6;
      let num7 = Math.floor(Math.random() * (top)); top -= num7;

      data = [num1, num2, num3, num4, num5, num6, num7, 100];
    }
    this.chartdata = {
      labels: ['Action', 'Comedy', 'Drama', 'Historical', 'Horror', 'Romantic', 'Thriller'],
      datasets: [
        {
          label: 'Most Likely',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: data
        }
      ]
    }
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success:', detail: 'Prefered TV Show for this user is: Friends' });
  }
  showSubmitAccuracySuccess() {
    this.Accuracymsgs = [];
    this.Accuracymsgs.push({ severity: 'info', summary: 'Success:', detail: 'Your feedback is submitted' });
  }
  showfeedBackSuccess() {
    this.FeedBackMsg = [];
    this.FeedBackMsg.push({ severity: 'info', summary: 'Success:', detail: 'Your feedback is submitted, Thank you' });
  }
  submitFeedback() {
    // this.http.get( 'http://localhost:4300/api/get', this.httpOptions).subscribe(data =>{
    //   alert(data);
    // });
    this.http.post('http://localhost:4300/api', JSON.stringify(this.feedbackData), this.httpOptions).subscribe(data => {
      // alert(data);
    });
  }

}
