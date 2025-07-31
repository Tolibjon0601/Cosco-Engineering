import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-project',
  imports: [CommonModule,RouterLink,ImageModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ProjectComponent implements AfterViewInit {

  slidessecond = [
    {
      stats: "BOKS MAHORAT MAKTABI",
      statsDescription:
        "Cosco Engineering tomonidan loyihalashtirilgan va qurilgan mazkur sport inshooti barcha zamonaviy talablar asosida jihozlangan. Sportchilarning samarali mashg‘ulotlari va musobaqalarga tayyorgarligi uchun optimal sharoitlar yaratilgan.",
      button: "Batafsil",
      image: "assets/image/slider_5.jpg"
    },
    {
      stats: "QARSHI DAVLAT UNIVERSITETI YOTOXONASI",
      statsDescription:
        "Talabalar uchun mo‘ljallangan bu yotoqxona Cosco Engineering’ning qulaylik, xavfsizlik va funksionallikni birlashtirgan loyihasidir. Binoda barcha zarur kommunikatsiyalar, yoritish va havoni ventilyatsiya qilish tizimlari zamonaviy texnologiyalar asosida joriy etilgan.",
      button: "Bogʻlanish",
      image: "assets/image/slider_6.jpg"
    },
    {
      stats: "CHIRCHIQ DAVLAT PEDAGOGIKA UNIVERSITETI BINOSI",
      statsDescription:
        "Taʼlim sohasi uchun muhim ahamiyatga ega bo‘lgan mazkur obyekt Cosco Engineering tomonidan yuqori sifatli materiallar va ilg‘or qurilish texnologiyalari asosida bunyod etilgan. Binoda o‘quv jarayonlari uchun barcha sharoitlar yaratilgan.",
      button: "Bogʻlanish",
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
