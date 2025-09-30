document.addEventListener('DOMContentLoaded', () => {

  // FAQs toggle
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
  });

  // Popup
  const popup = document.getElementById('popup');
  document.getElementById('openPopup').addEventListener('click', () => {
    popup.style.display = 'flex';
  });
  document.getElementById('closePopup').addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Slider
  const slides = document.getElementById('slides');
  let index = 0;
  const totalSlides = slides.children.length;

  document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    slides.style.transform = `translateX(-${index * 300}px)`;
  });
  document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 300}px)`;
  });

  // Notification
  const notification = document.getElementById('notification');
  document.getElementById('showNotification').addEventListener('click', () => {
    notification.style.display = 'block';
    setTimeout(() => { notification.style.display = 'none'; }, 3000);
  });

});
