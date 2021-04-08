const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListRef = document.querySelector('#gallery');
const galleryListItem = [];

images.forEach(image => galleryListItem.push(
    `<li class = 'galleryListItem'>
        <img class = 'galleryListItemImg' src = '${image.url}' alt = '${image.alt}' width = 500px height = 500px/>
    </li>`
));

galleryListRef.insertAdjacentHTML('afterbegin', `${galleryListItem.join('')}`)

const galleryListItemRef = document.querySelectorAll('.galleryListItem');
galleryListRef.classList.add('centered-flex')