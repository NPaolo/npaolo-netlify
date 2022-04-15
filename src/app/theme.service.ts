import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
globalMode = 'light';
bgClass = 'light-bg';
homeCardClass = 'light-home-card';
cardClass = 'light-card';


  constructor() {
  }

  switchMode(mode: string) {
    this.globalMode = mode;
    switch (mode) {
      case 'light':
        this.bgClass = 'light-bg'
        this.homeCardClass = 'light-home-card';
        this.cardClass = 'light-card';
        break;
      case 'dark':
        this.bgClass = 'dark-bg'
        this.homeCardClass = 'dark-home-card';
        this.cardClass = 'dark-card';
        break;
      case 'color':
        this.bgClass = 'color-bg'
        this.homeCardClass = 'color-home-card';
        this.cardClass = 'color-card';
        break;
    }
  }
}