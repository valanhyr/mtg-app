import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() mediaUrl: string = '';
  @Input() altText: string = '';

  isVideo(): boolean {
    return this.mediaUrl.endsWith('.mp4') || this.mediaUrl.endsWith('.webm') || this.mediaUrl.endsWith('.ogg');
  }
}