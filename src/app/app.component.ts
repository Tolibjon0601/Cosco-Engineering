import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  showIntroVideo = true;

  @ViewChild('introVideo') introVideoRef!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.introVideoRef?.nativeElement;

    if (video) {
      const tryPlay = () => {
        video.play()
          .then(() => {
            console.log('Video started successfully');
          })
          .catch((err) => {
            console.warn('Retrying video play in 300ms:', err);
            setTimeout(tryPlay, 300); // Retry every 300ms until allowed
          });
      };
      tryPlay();
    }
  }

  onVideoEnd(): void {
    this.showIntroVideo = false;
  }
}
