import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss'
})
export class CarrouselComponent {
  @Input() title: string = "";
  @Input() items: { type: string, url: string }[] = [];
  @Input() interval: number = 5000;
  currentIndex: number = 0;

  ngOnInit(): void {
    this.startAutoplay();
  }

  nextItem(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prevItem(): void {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  goToItem(index: number): void {
    this.currentIndex = index;
  }

  startAutoplay(): void {
    setInterval(() => {
      this.nextItem();
    }, this.interval);
  }
}
