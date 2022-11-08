import './style.scss'

import { drawGalleryItem } from './item'
import items from './items'

const galleryElement = document.querySelector('#gallery');

items.map(item => galleryElement.appendChild(drawGalleryItem(item)));