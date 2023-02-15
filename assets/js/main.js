/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/*= ============== SHOW MENU =============== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*= ==== MENU SHOW ===== */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*= ==== MENU HIDDEN ===== */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*= ============== REMOVE MENU MOBILE =============== */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*= ============== SWIPER PROJECTS =============== */
const swiperProjects = new Swiper('.projects__container', {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

/*= ============== EMAIL JS =============== */
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactProject = document.getElementById('contact-project');
const contactMessage = document.getElementById('contact-message');

const sendEmail = () => {
  e.preventDefault();

  if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
    contactMessage.classList.remove('color-blue');
    contactMessage.classList.add('color-red');

    contactMessage.textContent = 'Please fill in all fields 📩';
  } else {
    emailjs.sendForm('service_gooc3em', 'template_s4io04q', '#contact-form', '1y1_zZWonIN6pEbN6')
      .then(() => {
        contactMessage.classList.add('color-blue');
        contactMessage.textContent = 'Message sent successfully ✅';

        setTimeout(() => {
          contactMessage.textContent = '';
        }, 3000);
      }, (error) => {
        alert('An error has occurred, please try again later 😢', error);
      });

    contactName.value = '';
    contactEmail.value = '';
    contactProject.value = '';
  }
};
contactForm.addEventListener('submit', sendEmail);
/*= ============== SCROLL SECTIONS ACTIVE LINK =============== */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);
/*= ============== SHOW SCROLL UP =============== */
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');

  if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*= ============== DARK LIGHT THEME =============== */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line');

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

/*= ============== CHANGE BACKGROUND HEADER =============== */
const scrollHeader = () => {
  const header = document.getElementById('header');
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('bg-header'); else header.classList.remove('bg-header');
};
window.addEventListener('scroll', scrollHeader);

/*= ============== SCROLL REVEAL ANIMATION =============== */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal('.home__data, .projects__container, .footer__container');
sr.reveal('.home__info div', { delay: 600, origin: 'bottom', interval: 100 });
sr.reveal('.skills__content:nthchild(1), .contact__content:nth-child(1)', { origin: 'left' });
sr.reveal('.skills__content:nthchild(2) .contact__content:nth-child(2)', { origin: 'right' });
sr.reveal('.qualification__content, .services__card', { interval: 100 });
