import { DataType } from '../../../data-type/data-type';
import { VideoPilt } from '../video-pilt/video-pilt';

export function Video(videoInf: DataType["data"]): HTMLElement {

  // Üks video -------------------------
  const wrapper = document.createElement('div');
  wrapper.classList.add('video-block');

  // ------------------------- EELVAATE AKEN -------------------------
  let popup: HTMLElement | null = null;

  wrapper.addEventListener('mouseenter', () => {    // Hiir on video peal
    if (popup) return;
    popup = Eelvaade(wrapper, videoInf.canonicalUrl);
  });

  wrapper.addEventListener('mouseleave', () => {    // Hiir lahkus video pealt
    if (popup) {
      popup.remove();
      popup = null;
    }
  });

  // ------------------------- VIDEO URL AVAMINE -------------------------
  wrapper.addEventListener('click', () => {
    if (videoInf.canonicalUrl) {
      window.location.href = videoInf.canonicalUrl; // Avab video
    }
  });

  // ------------------------- VIDEO PILT -------------------------
  const photo = VideoPilt(videoInf.verticalPhotos);
  if (photo) wrapper.appendChild(photo);

  return wrapper;
}

function Eelvaade(wrapper: HTMLElement, previewUrl: string): HTMLElement {
  const popup = document.createElement('div');
  popup.classList.add('video-popup');

  // Eelvaate akna sisu -------------------------
  const previewFrame = document.createElement('iframe');
  previewFrame.classList.add('preview-popup');
  previewFrame.src = previewUrl;

  // Eelvaate aken-------------------------
  popup.appendChild(previewFrame);
  wrapper.appendChild(popup);

  // Positsioneerimine vasakule või paremale -------------------------
  const rect = wrapper.getBoundingClientRect();
  const spaceRight = window.innerWidth - rect.right;

  Object.assign(popup.style, {
    height: `${rect.height}px`,
    left: spaceRight > 300 ? `${rect.width + 5}px` : 'auto',
    right: spaceRight > 300 ? 'auto' : `${rect.width + 5}px`,
  });

  return popup;
}