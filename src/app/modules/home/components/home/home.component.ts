import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterLink,TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent  implements AfterViewInit {
  slides = [
    {
      titleKey: 'slider.title1',
      buttonKey: 'slider.button'
      , image: 'assets/image/slider_3.jpg'
    },
    {
      titleKey: 'slider.title2',
      buttonKey: 'slider.button',
      image: 'assets/image/slider_1.jpg'
    },
    {
      titleKey: 'slider.title3',
      buttonKey: 'slider.button',
      image: 'assets/image/slider_2.jpg'
    },
  ];



  slidessecond = [
    {
      stats: 'projects.slides.0.stats',
      statsDescription: 'projects.slides.0.description',
      button: 'projects.button',
      image: 'assets/image/slider_4.jpg'
    },
    {
      stats: 'projects.slides.1.stats',
      statsDescription: 'projects.slides.1.description',
      button: 'projects.button',
      image: 'assets/image/slider_5.jpg'
    },
    {
      stats: 'projects.slides.2.stats',
      statsDescription: 'projects.slides.2.description',
      button: 'projects.button',
      image: 'assets/image/slider_6.jpg'
    }
  ];



ngAfterViewInit(): void {
  const swiperEl: any = document.querySelector('swiper-container');

  if (swiperEl) {
    swiperEl.params = {
      ...swiperEl.params,
      navigation: {
        nextEl: '#custom-next',
        prevEl: '#custom-prev',
      },
    };

    swiperEl.initialize();
  }
}


}
