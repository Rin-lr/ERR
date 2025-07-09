// Angular -------------------------
import { Component, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';

// API service -------------------------
import { ApiService } from '../api-service/api-service';
import { DataType } from '../../data-type/data-type';

// Komponendid -------------------------
import { Teema as TeemaKomponent} from '../../esileht/voo_komponent/teema/teema';
import { Video as VideoKomponent } from '../../esileht/voo_komponent/video/video';
import { VideoPilt as PiltKomponent } from '../../esileht/voo_komponent/video-pilt/video-pilt';
import { Nooled } from '../../esileht/voo_komponent/nooled/nooled';

@Component({
  selector: 'app-api-data',
  imports: [CommonModule],
  templateUrl: './api-data.html',
  styleUrl: './api-data.css'
})
export class ApiData implements OnInit {
  apiData: DataType[] = [];                             // API täpsete andmetüüpidega

  constructor(private apiService: ApiService) { }       // Injekteerin API teenuse konstruktoris

  // -------------------------API info ja struktuur-------------------------
  ngOnInit(): void {
    this.apiService.getImg().subscribe({                // Kutsun välja API, et võtta andmeid.
      next: data => {
        this.apiData = data.data.category.frontPage;    // Salvestan andmeid muutujasse "apiData".
        this.Teema(this.apiData, this.Video.bind(this));
      },
      error: error =>
        console.error('Viga API-ga:', error)            // VIGA API andmete võtmisel.
    });
  }

  // -------------------------TEEMA-------------------------
  Teema(teemaInf: DataType[], processVideo: (video: DataType["data"], container: HTMLElement) => void) {

    teemaInf.forEach(page => {
      const teema = page.header;                        // Teema pealkiri
      const videoInf = page.data;                       // Selle teema videod

      if (teema?.trim()) {                              // Kontrollin, et pealkiri eksisteerib ja pole tühi
        if (Array.isArray(videoInf) && videoInf.length > 0) {
          const Teema_pealkiri = TeemaKomponent(page);  // Kuvan teema .html failis

          // HTML komponendid-------------------------
          const Video_voog = htmlKomponend(Teema_pealkiri, videoInf.length);

          // Töötlen iga video eraldi-------------------------
          videoInf.forEach(video => processVideo(video, Video_voog));
        }
      }
    });
  }

  // -------------------------VIDEO-------------------------
  Video(videoInf: DataType["data"], container: HTMLElement) {
    if (videoInf.heading?.trim()) {                     // Kui video pealkiri eksisteerib
      const Video_Pealkiri = VideoKomponent(videoInf);  // Kuvan video .html failis

      if (container) {
        container.appendChild(Video_Pealkiri);
      }

      const photos = videoInf.verticalPhotos;           // Leian pilte
      this.Video_Pilt(photos, container);               // Lisa pildid samasse teema konteinerisse
    }
  }

  // -------------------------VIDEO-PILT-------------------------
  Video_Pilt(photos: any, container: HTMLElement) {
    if (!Array.isArray(photos) || photos.length > 0) {
      const firstPhoto = photos[0];                     // Võtan esimese foto masiivist
      const photoType = firstPhoto.photoTypes?.[60];    // Kasutan fototüüp 60

      if (photoType?.url) {
        const img = PiltKomponent(photoType.url);       // Kuvan video pilti .html failis

        if (img && container) {                         // Kontrollin, et 'img' ei ole null enne kui lisada DOM-i
          container.appendChild(img);
        }

        //console.log('Foto URL:', photoType.url);
      } else {
        //console.warn('Foto puudub või võti 60 puudu');  // Kui puudub
      }
    }
  }
}

// ------------------------- HTML -------------------------
function htmlKomponend(teemaPealkiriElem: HTMLElement, videoCount: number): HTMLElement {
  const container = document.querySelector('.api-container');

  const Video_voog = document.createElement('div');
  Video_voog.classList.add('videod');

  const voog = document.createElement('div');
  voog.classList.add('voog');
  voog.appendChild(Video_voog);

  const arrows = Nooled(voog);
  voog.insertBefore(arrows, Video_voog);

  if (container) {
    teemaPealkiriElem.appendChild(voog);
    container.appendChild(teemaPealkiriElem);
  }

  return Video_voog; // ← koht, kuhu videod lisatakse
}