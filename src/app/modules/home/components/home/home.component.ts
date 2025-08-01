import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent  implements AfterViewInit {
  slides = [
    {
      title: 'Yirik inshootlardan tortib, uy-joygacha — har bir loyiha biz uchun muhim.',
      button: 'Batafsil maʼlumot',
      image: 'assets/image/slider_3.jpg'
    },
    {
      title: 'Cosco Engineering bilan orzularingizdagi binoni yarating.',
      button: 'Batafsil maʼlumot',
      image: 'assets/image/slider_1.jpg'
    },
    {
      title: 'Bizni tanlang – muhandislik, innovatsiya va tajriba bir joyda jam!',
      button: 'Batafsil maʼlumot',
      image: 'assets/image/slider_2.jpg'
    },


  ];


  slidessecond = [
    {
      stats: "TDP Universiteti",
      statsDescription:
        "Toshkent viloyati Chirchiq davlat pedagogika universitetining zamonaviy kampusi zamonaviy ta’lim standartlariga mos holda qurildi.",
      button: "Batafsil",
      image: "assets/image/slider_4.jpg"
    },
    {
      stats: "Boks maktabi",
      statsDescription:
        "Yosh sportchilarning salohiyatini rivojlantirish uchun barcha sharoitlarga ega bo‘lgan zamonaviy Boks mahorat maktabi qurib bitkazildi.",
      button: "Batafsil",
      image: "assets/image/slider_5.jpg"
    },
    {
      stats: "QarDU binosi",
      statsDescription:
        "Qarshi davlat universitetining yangi binosi — fan, innovatsiya va zamonaviy muhitni uyg‘unlashtirgan arxitekturaviy yechim.",
      button: "Batafsil",
      image: "assets/image/slider_6.jpg"
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
