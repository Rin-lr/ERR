export function VideoPilt(photos: any): HTMLImageElement | null {
  if (!Array.isArray(photos) || photos.length === 0) return null;
  const photoType = photos[0].photoTypes?.[60];
  if (!photoType?.url) return null;

  const img = document.createElement('img');
  img.src = photoType.url;
  img.alt = 'Video pilt';
  img.classList.add('Video_pilt');
  return img;
}
