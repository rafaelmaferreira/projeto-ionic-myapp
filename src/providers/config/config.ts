import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
let config_key_name = "config"

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    name : "",
    username: ""
  }

  constructor() {
  }

  getConfigData(): any {
    return localStorage.getItem(config_key_name) || {};

  }

  setConfigData(showSlide?: boolean, name?: string, username?: string){
  let config = {
    showSlide: false,
    name : "",
    username: ""
  };

  if(showSlide){
    this.config.showSlide = showSlide;
  }
    if(name){
      this.config.name = name;
    }
    if(username){
      this.config.username = username;
    }

    localStorage.setTime(config_key_name, JSON.stringify(this.config))
  }
}

