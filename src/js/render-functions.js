import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// import '../css/styles.css'

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightBoxGallery = null;

export function createGallery(images) {
  let markup = images
      .map(
        ({
           webformatURL,
           largeImageURL,
           tags,
           likes,
           views,
           comments,
           downloads,
         }) => {
          return `
              <li class="list-item">
                <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" /></a>
                <div class="list-content">
                  <div class="list-content-item">
                    <h2 class="name">Likes</h2>
                    <p class="value">${likes}</p>
                  </div>
                  <div class="list-content-item">
                    <h2 class="name">Views</h2>
                    <p class="value">${views}</p>
                  </div>
                  <div class="list-content-item">
                    <h2 class="name">Comments</h2>
                    <p class="value">${comments}</p>
                  </div>
                  <div class="list-content-item">
                    <h2 class="name">Downloads</h2>
                    <p class="value">${downloads}</p>
                  </div>
                </div>
              </li>
            `;
        },
      )
      .join('');

  gallery.innerHTML = markup;
  if (lightBoxGallery) {
    lightBoxGallery.refresh();
  } else {
    lightBoxGallery = new SimpleLightbox('.gallery a', {
      captions: true,
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'inline-block';
}

export function hideLoader() {
  loader.style.display = 'none';
}