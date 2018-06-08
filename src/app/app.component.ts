import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myMaterial';

  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;

  username: string = '';
  userNameDisplay: string = '';
  showSpinner2: boolean = false;

  showAnswer(){
    this.showSpinner = true;

    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 1500)
  }

  showUserName(){
    this.showSpinner2 = true;

    setTimeout(() => {
      this.userNameDisplay = this.username;
      this.showSpinner2 = false;
    }, 1500)

  }


}
