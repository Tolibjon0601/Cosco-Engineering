import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
declare const ymaps: any;


@Component({
  selector: 'app-contact',
  imports: [TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  coords: number[] = [41.291697, 69.208481]; // Yangi koordinata
  address = 'Chilonzor , Toshkent';
  name = "Qatortol ko'chasi";
  email = 'support@coscoengineering.uz';

  map: any;
  placemark: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // this.showBackToTop = window.pageYOffset > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    if ((window as any).ymaps) {
      (window as any).ymaps.ready(() => {
        this.initMap();
      });
    } else {
      console.error('Yandex Maps script not loaded!');
    }
  }

  initMap() {
    this.map = new ymaps.Map('yandex-map', {
      center: this.coords,
      zoom: 17,
      controls: ['zoomControl'],
    });

    const customLayout = ymaps.templateLayoutFactory.createClass(`
      <div style="text-align: center;">
        <div style="
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #34547A;
          box-shadow: 0 0 8px rgba(0,0,0,0.3);
          margin: 0 auto;
        ">
          <img src="assets/image/logo.png" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>
        <div style="background: #34547A; color: white; padding: 4px 8px; font-size: 12px; border-radius: 4px; margin-top: 6px; display: inline-block;">
          Офис
        </div>
      </div>
    `);

    const placemark = new ymaps.Placemark(
      this.coords,
      {},
      {
        iconLayout: customLayout,
        iconShape: {
          type: 'Circle',
          coordinates: [0, 0],
          radius: 35,
        },
      }
    );

    this.map.geoObjects.add(placemark);
  }
}
