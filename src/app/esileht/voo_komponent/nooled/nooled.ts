export function Nooled(voog: HTMLElement): HTMLElement {
  const video_voog = voog.querySelector('.videod') as HTMLElement;

  const arrows = document.createElement('div');
  arrows.classList.add('nooled');

  // -------------------------NOOLED-------------------------

  // Vasakpoolne nool-------------------------
  const arrowLeft = document.createElement('div');
  arrowLeft.classList.add('arrow-left');

  const imgLeft = document.createElement('img');
  imgLeft.src = 'Assets/arrow_left.svg';
  arrowLeft.appendChild(imgLeft);

  // Parempoolne nool-------------------------
  const arrowRight = document.createElement('div');
  arrowRight.classList.add('arrow-right');

  const imgRight = document.createElement('img');
  imgRight.src = 'Assets/arrow_right.svg';
  arrowRight.appendChild(imgRight);


  // -------------------------Horisontaalne liikumine-------------------------


  video_voog.addEventListener('scroll', () => {
    const scrollLeft = video_voog.scrollLeft;
    const scrollWidth = video_voog.scrollWidth;
    const clientWidth = video_voog.clientWidth;

    // Vasak nool – peida kui alguses
    arrowLeft.style.display = scrollLeft <= 0 ? 'none' : 'flex';

    // Parem nool – peida kui lõpus
    const onLõpus = Math.ceil(scrollLeft + clientWidth) >= scrollWidth;
    arrowRight.style.display = onLõpus ? 'none' : 'flex';
  });

  // PAREMALE-------------------------
  arrowRight.addEventListener('click', () => {
    const jääk = video_voog.scrollWidth - video_voog.clientWidth - video_voog.scrollLeft;
    const kaugus = Math.min(jääk, video_voog.clientWidth);

    /*scrollWidth = kogu sisu laius
      clientWidth = nähtav ala
      scrollLeft = kui kaugele juba ollakse keritud
      jääk = kui palju saab veel paremale liikuda
      Math.min(...) = liigume ühe täisekraani võrra, aga mitte üle ääre*/

    video_voog.scrollBy({
      left: kaugus,
      behavior: 'smooth'
    });
  });

  // VASAKULE-------------------------
  arrowLeft.addEventListener('click', () => {
    const jääkVasakule = video_voog.scrollLeft;
    const kaugus = Math.min(jääkVasakule, video_voog.clientWidth);

    video_voog.scrollBy({ left: -kaugus, behavior: 'smooth' });
  });

  // Nooled ühte div'i-------------------------

  arrows.appendChild(arrowLeft);
  arrows.appendChild(arrowRight);

  return arrows;
}
