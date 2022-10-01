import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string) {
    const parsedLength = parseInt(value);
    if(!isNaN(parsedLength))
      this.length = parsedLength;
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    let generatedPassword = '';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()_+';
    this.password = '';

    if(this.includeLetters)
      generatedPassword += letters;

    if(this.includeNumbers)
      generatedPassword += numbers;

    if(this.includeSymbols)
      generatedPassword += symbols;

    for (let index = 0; index < this.length; index++) {
      console.log('on loop');
      let ind = Math.floor(Math.random() * generatedPassword.length);
      this.password += generatedPassword[ind];
    }
  }
}
