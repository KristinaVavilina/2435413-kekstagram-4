import { drawPictures } from './draw-pictures.js';
import { generateDataForPhoto } from './data.js';

const COUNT_PHOTOS = 25;
const photos = generateDataForPhoto(COUNT_PHOTOS);

drawPictures(photos);
