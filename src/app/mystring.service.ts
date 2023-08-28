import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MystringService {

  constructor() { }
  

  heros=[
    {name:'spiderman',weapon:'spiderweb'},
    {name:'thor',weapon:'hammer'},
    {name:'avenger',weapon:'sword'}
  ]
  public getHeros(){
    //clrnm='yellow';
    return this.heros;
  }
}
