document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })

  const list = document.querySelector('.list');
  const items = document.querySelectorAll('.item');
  const nextBtn = document.getElementById('nextbtn');
  const backBtn = document.getElementById('backbtn');
  let text1 = document.querySelector('.text1');
  let text2 = document.querySelector('.text2');
  let index = 0;

  function showSlide() {
    list.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(() => {
    text1.textContent = "Responsive Designs";
  }, 3000);

  setInterval(() => {
    text1.textContent = "Rich Ui/Ux";
  }, 6000);

  setInterval(() => {
    text1.textContent = "Safe Authentication";
  }, 9000);

  setInterval(() => {
    text2.textContent = "Automations & Emails";
  }, 4000);

  setInterval(() => {
    text2.textContent = "Good maintenace";
  }, 8000);

  setInterval(() => {
    text2.textContent = "Artistry & creativity";
  }, 12000);

  function moveNext() {
    index = (index + 1) % items.length;
    showSlide();
  }

  let moveInterval = setInterval(() => {
    moveNext();
  }, 3000);

  function moveBack() {
    backBtn.addEventListener('click', () => {
      index = (index - 1 + items.length) % items.length;
      showSlide();
    });
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % items.length;
    showSlide();
    setTimeout(() => {
      clearInterval(moveInterval);
    }, 1000);
  });

  backBtn.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    showSlide();
    setTimeout(() => {
      clearInterval(moveInterval);
    }, 1000);
  });

  

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  window.addEventListener('scroll', function () {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
      }

      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }

  const newsletterForm = document.querySelector('.footer-newsletter form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = this.querySelector('input[type="email"]').value;
      if (!email) {
        alert('Please enter your email address');
        return;
      }

      alert('Thank you for subscribing to our newsletter!');
      newsletterForm.reset();
    });
  }

  const backToTopButton = document.querySelector('.back-to-top');
  if (backToTopButton) {
    backToTopButton.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(item => {
    item.addEventListener('touchstart', function () {
      portfolioItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.querySelector('.portfolio-info').style.opacity = '0';
          otherItem.querySelector('.portfolio-info').style.transform = 'translateY(20px)';
        }
      });

      const info = this.querySelector('.portfolio-info');
      if (info.style.opacity === '1') {
        info.style.opacity = '0';
        info.style.transform = 'translateY(20px)';
      } else {
        info.style.opacity = '1';
        info.style.transform = 'translateY(0)';
      }
    });
  });
});
