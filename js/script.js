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




//  nav links 

gsap.registerPlugin(Flip);

const links = document.querySelectorAll("nav ul li a");
const activeNav = document.querySelector(".active-nav");

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Reset color for all links
        gsap.to(links, { color: "#252525" });

        // Set color for the clicked link
        gsap.to(link, { color: "#385ae0" });

        // Move the activeNav under the clicked link
        const state = Flip.getState(activeNav);
        activeNav.style.width = `${link.clientWidth}px`; // Adjust width if necessary
        Flip.from(state, {
            duration: 0.5,
            absolute: true,
            ease: "power2.out",
            onComplete: () => {
                link.appendChild(activeNav);
            },
        });
    });
});

