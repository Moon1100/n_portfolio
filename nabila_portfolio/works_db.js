// Simple JS DB for storing image URLs using localStorage

const STORAGE_KEY = 'umi_works_images';

function getImages() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function addImage(url) {
  const images = getImages();
  images.push(url);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
}

// Expose functions globally for use in HTML
window.umiWorksDB = {
  getImages,
  addImage
}; 