const burger = document.querySelector('.burger');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav-overlay a');
    const header = document.querySelector('header');

    function toggleMenu() {
      burger.classList.toggle('active');
      navOverlay.classList.toggle('active');
    }

    burger.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
      link.addEventListener('click', toggleMenu);
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productTitle = button.parentElement.querySelector('.product-title').textContent;
        alert(`${productTitle} added to cart!`);
      });
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentTestimonial = 0;

    function showTestimonial(index) {
      testimonialCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
          card.classList.add('active');
        }
      });
    }

    function nextTestimonial() {
      currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
      showTestimonial(currentTestimonial);
    }

    function prevTestimonial() {
      currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
      showTestimonial(currentTestimonial);
    }

    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);

    showTestimonial(currentTestimonial);

    // Auto-rotate testimonials every 5 seconds
    // You can use this function if you want... setInterval(nextTestimonial, 5000);

    // FAQ SECTION //
    document.addEventListener('DOMContentLoaded', function() {
      const faqItems = document.querySelectorAll('.faq-item');

      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
          item.classList.toggle('active');
        });
      });

      // Form animations
      const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

      formInputs.forEach(input => {
        input.addEventListener('focus', () => {
          input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
          if (input.value === '') {
            input.parentElement.classList.remove('focused');
          }
        });
      });

    });
    
    document.addEventListener('DOMContentLoaded', () => {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 200,
      });
    });