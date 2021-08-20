import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
modeBool = false

  constructor() {
  }

  switchMode() {
    this.modeBool = !this.modeBool;
    console.log(this.modeBool)
}
}