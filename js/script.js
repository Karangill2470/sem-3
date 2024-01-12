document.addEventListener('mousemove', function (event) {
    const rotatingImage = document.getElementById('rotatingImage');
    
    // Calculate the rotation based on the mouse position
    const rotationValue = `rotate(${event.clientX / window.innerWidth * 360}deg)`;
    
    // Apply the rotation to the image
    rotatingImage.style.transform = rotationValue;
  });











  const cards = document.querySelectorAll(".card");

 cards.forEach((card,index)=>{
  card.addEventListener("click", ()=> {
    const state  = Flip.getState(cards);

    const isCardActive = card.classList.contains("active");
    cards.forEach((otherCard, otherIdx)=>{
      otherCard.classList.remove("active");
      otherCard.classList.remove("is-inactive");
      if(!isCardActive && index !== otherIdx) {
        otherCard.classList.add("is-inactive");
      }
    })
  })
 })