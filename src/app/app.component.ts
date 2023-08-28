import { Component } from '@angular/core';
import { MystringService } from './mystring.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  showheros=true;

constructor(public herosvc:MystringService){
  
}
}
