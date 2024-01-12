document.addEventListener('mousemove', function (event) {
    const rotatingImage = document.getElementById('rotatingImage');
    
    // Calculate the rotation based on the mouse position
    const rotationValue = `rotate(${event.clientX / window.innerWidth * 360}deg)`;
    
    // Apply the rotation to the image
    rotatingImage.style.transform = rotationValue;
  });