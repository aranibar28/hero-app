import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number = 1;
  @Output() heroSelected = new EventEmitter<number>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  verHeroe() {
    this.heroSelected.emit(this.index);
  }
}
