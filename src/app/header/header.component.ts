import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() mode: string;

  @Output() emitMode: EventEmitter<String> = new EventEmitter();

  constructor(private x : Router, private ts: ThemeService) {}

  ngOnInit(): void {
  }

  setMode(event) {
    this.mode = event;
    this.ts.switchMode(event);
    this.mode = this.ts.globalMode;
    this.emitMode.emit(this.mode);
    }

    goHome(){
      this.x.navigate(['/'])
    }

}
