import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterModule,TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  dropdownOpen = false;
  visible = false;
  isScrolled = false;
  isMobile = false;

  selectedLang = 'uz';
  languages = [
    { code: 'uz', name: 'Uzbek', flag: 'assets/media/flags/uzbekistan.svg' },
    { code: 'ru', name: 'Russian', flag: 'assets/media/flags/russia.svg' },
  ];

  constructor(private translateService: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'uz';
    this.selectedLang = savedLang;
    this.translateService.use(savedLang);
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  get selectedFlag(): string {
    return this.languages.find(lang => lang.code === this.selectedLang)?.flag ?? '';
  }

  getLangName(code: string): string {
    return this.languages.find(lang => lang.code === code)?.name ?? '';
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectLanguage(lang: any): void {
    this.selectedLang = lang.code;
    this.dropdownOpen = false;
    localStorage.setItem('lang', lang.code);
    this.translateService.use(lang.code);
  }

  toggleMenu(): void {
    this.visible = !this.visible;
  }

  closeMenu(): void {
    this.visible = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.pageYOffset > 100;
  }
}
