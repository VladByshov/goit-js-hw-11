import { getImageByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import { clearGallery } from './js/render-functions';
import { showLoader } from './js/render-functions';
import { hideLoader } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const searchInput = form.elements['search-text'].value.trim();

  if(searchInput === '') {
    iziToast.show({
      message: 'Please enter a search query!',
      backgroundColor: `#EF4040`,
      messageColor: `#ffffff`,
      position: `topRight`,
      maxWidth: `432px`,
    });
    return;
  }
  clearGallery();
  showLoader();

  getImageByQuery(searchInput).then(data =>{
    console.log(data.hits);
    if(!data.hits || data.hits.length === 0) {
      iziToast.show({
        message:
          ' Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: `#EF4040`,
        messageColor: `#ffffff`,
        position: `topRight`,
        maxWidth: `432px`,
      })
      hideLoader();
      return;
    }
    createGallery(data.hits);
    hideLoader();
  }).catch(e => {
    hideLoader();
    console.log(e);
  });
});