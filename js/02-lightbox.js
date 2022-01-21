import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = createImgGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href='${original}'>
        <img class="gallery__image" src='${preview}' alt='${description}' />
      </a>
    `;
    })
    .join("");
}
console.log(galleryItems);

gallery.addEventListener("click", onOpenModal);

function onOpenModal(ev) {
  ev.preventDefault();

  if (ev.target.nodeName !== "IMG") {
    return;
  }

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  lightbox.open();
}
