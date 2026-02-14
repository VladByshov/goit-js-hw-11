import axios from 'axios';
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '54656491-d198bfb98120e598fae018f1a';
const form = document.querySelector('.form');

axios.defaults.baseURL = BASE_URL;
form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const res = new FormData(form).get('search-text');
  console.log(res);
  function request(endpoint) {
    return axios({
      url: `/?key=${API_KEY}`,
      method: 'get',
      params: {
        q: endpoint,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
      .then(response => response.data)
      .catch(error => console.log(error));
  }

  function fetchImages(input) {
    return request(input);
  }

  function loadImages() {
    return fetchImages(res).then(({ hits }) => {
      console.log(hits);
      return hits
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
                  <div>
                    <h2 class="likes">Likes</h2>
                    <p class="count-likes">${likes}</p>
                  </div>
                  <div>
                    <h2 class="views">Views</h2>
                    <p class="count-views">${views}</p>
                  </div>
                  <div>
                    <h2 class="comments">Comments</h2>
                    <p class="count-comments">${comments}</p>
                  </div>
                  <div>
                    <h2 class="downloads">Downloads</h2>
                    <p class="count-downloads">${downloads}</p>
                  </div>
                </div>
              </li>
            `;
          }
        )
        .join('');
    });
  }

  function render(markup) {
    const galleryList = document.querySelector('.gallery');
    galleryList.innerHTML = markup;
    let simpleLightBox = new SimpleLightbox('.gallery a');
  }

  loadImages().then(render);
}