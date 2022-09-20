import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('div.gallery');
const cardMarkup = createGalleryPicMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', cardMarkup);

function createGalleryPicMarkup (items) {
    return items
      .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;
        })
      .join('');
  
};

const dataSource = galleryItems[0].original

new SimpleLightbox('.gallery a', { dataSource});

console.log(galleryItems);
