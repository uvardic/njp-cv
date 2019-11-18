import {NgModule} from '@angular/core';
import {ContactComponent} from './contact.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ContactComponent],
  exports: [ContactComponent],
  imports: [
    FormsModule
  ]
})
export class ContactModule {}
