


const images = [
    "./Assets/Images/carouspngel-1.",
    "./Assets/Images/carousel-2.png",
    "./Assets/Images/carousel-3.jpg",
    "./Assets/Images/carousel-4.png",
    "./Assets/Images/carousel-5.png",
    "./Assets/Images/carousel-6.png",
    "./Assets/Images/carousel-7.gif",
    "./Assets/Images/carousel-8.jpg"

  ];
  
  let currentIndex = 0;
  const carouselImage = document.getElementById('carousel-image');
  
  // Function to change the image
  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image, loop back to first at the end
    carouselImage.src = images[currentIndex];
  }
  
  // Change image every 5 seconds (5000 ms)
  setInterval(changeImage, 5000);
  