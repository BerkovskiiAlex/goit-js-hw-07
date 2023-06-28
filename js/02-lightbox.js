/** @format */

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulInsert = document.querySelector(".gallery");

function addGallery(galleryItems) {
  const result = galleryItems
    .map((image) => {
      return `<li class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="large-image.jpg" alt="${image.description}"></a></li>`;
    })
    .join("");
  ulInsert.insertAdjacentHTML("beforeend", result);
}

addGallery(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionDelay: 250,
});
