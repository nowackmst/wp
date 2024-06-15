function changeImage(imageId) {
  var imageElement = document.getElementById(imageId);
  var currentSrc = imageElement.src;
  var alternateSrc = imageElement.getAttribute('data-alternate-src');
  
  imageElement.src = alternateSrc;
  imageElement.setAttribute('data-alternate-src', currentSrc);

  setTimeout(function() {
    var tempSrc = imageElement.src;
    imageElement.src = imageElement.getAttribute('data-alternate-src');
    imageElement.setAttribute('data-alternate-src', tempSrc);
  }, 1000);
}