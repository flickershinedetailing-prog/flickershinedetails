
// Simple enhancements and animations (no external libs)
document.addEventListener('DOMContentLoaded', function(){
  // Intro loader hide
  const intro = document.getElementById('intro-screen');
  setTimeout(()=>{ if(intro){ intro.style.opacity='0'; setTimeout(()=>intro.style.display='none',600); } }, 900);

  // Parallax background on scroll
  const parallax = document.querySelector('.parallax-bg');
  window.addEventListener('scroll', ()=> {
    if(parallax) parallax.style.transform = 'translateY(' + (window.scrollY * 0.15) + 'px) scale(1.08)';
  });

  // Particles simple generator
  const parts = document.querySelector('.particles');
  if(parts){
    for(let i=0;i<25;i++){
      const d = document.createElement('div');
      d.className = 'p';
      d.style.left = Math.random()*100 + '%';
      d.style.top = Math.random()*100 + '%';
      d.style.width = (4+Math.random()*8)+'px';
      d.style.height = d.style.width;
      d.style.background = 'rgba(200,150,40,'+(0.2+Math.random()*0.6)+')';
      d.style.position='absolute';
      d.style.borderRadius='50%';
      parts.appendChild(d);
    }
  }

  // Booking form submit (dummy)
  const form = document.getElementById('bookingForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks! Your booking request has been received. We will contact you soon.');
      form.reset();
    });
  }
});
