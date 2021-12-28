import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() mode: boolean;

  @Output() emitMode: EventEmitter<Boolean> = new EventEmitter();

  constructor(private x : Router, private ts: ThemeService) {}

  ngOnInit(): void {
  }

  switchMode() {
    this.ts.switchMode();
    this.mode = this.ts.modeBool;
    this.emitMode.emit(this.mode);
    }

    goHome(){
      this.x.navigate(['/'])
    }

}
