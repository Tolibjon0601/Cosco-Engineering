import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-project',
  imports: [CommonModule,RouterLink,ImageModule,TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ProjectComponent implements AfterViewInit {

  slidessecond = [
    {
      stats: "projectsProject.slides.0.title",
      statsDescription: "projectsProject.slides.0.description",
      image: "assets/image/slider_5.jpg"
    },
    {
      stats: "projectsProject.slides.1.title",
      statsDescription: "projectsProject.slides.1.description",
      image: "assets/image/slider_6.jpg"
    },
    {
      stats: "projectsProject.slides.2.title",
      statsDescription: "projectsProject.slides.2.description",
      image: "assets/image/slider_4.jpg"
    }
  ];


  ngAfterViewInit(): void {
    const swiperEl: any = document.querySelector('swiper-container');

    swiperEl.navigation = {
      nextEl: document.getElementById('custom-next'),
      prevEl: document.getElementById('custom-prev'),
    };

    swiperEl.initialize(); // bu MUHIM!
  }




}
