import {Component} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  handleSubmit(firstName: NgModel, lastName: NgModel, email: NgModel, message: NgModel) {
    if (!email || !message) {
      console.error('Email and message are required!');
      return;
    }

    console.log({
      firstName,
      lastName,
      email,
      message
    });
  }

}
