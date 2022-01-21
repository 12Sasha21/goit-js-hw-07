import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryMarkup = createImgGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href='${original}'>
            <img
              class="gallery__image"
              src='${preview}'
              data-source='${original}'
              alt='${description}'
            />
          </a>
        </div>
    `;
    })
    .join("");
}

gallery.addEventListener("click", onOpenModal);

function onOpenModal(ev) {
  ev.preventDefault();

  if (ev.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src=${ev.target.dataset.source}>`
  );
  instance.show();

  window.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(ev) {
    if (ev.code === "Escape") {
      instance.close();
    }
  }
}