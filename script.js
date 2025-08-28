document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        // Portfolio filtering
        const filterButtons = document.querySelectorAll('.portfolio-filter button');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });

        // Animate progress bars when they come into view
        const progressBars = document.querySelectorAll('.progress-value');
        
        function animateProgressBars() {
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });
        }
        
        // Run on page load
        window.addEventListener('load', animateProgressBars);

tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#ffffffff',
                        secondary: '#64748b',
                        dark: '#0f172a',
                        light: '#f8fafc'
                    },
                    fontSize: {
                    '12xl': '12rem',
                     },
                keyframes: {
                     fadeIn: {
                         '0%': { opacity: 0, transform: 'translateY(100px)' },
                         '100%': { opacity: 1, transform: 'translateY(0)' },
        },
                    scale: {
                        '0%, 100%': { transform: 'scale(1)' },
                        '50%': { transform: 'scale(1.2)' },
        },
      },
                animation: {
                    fadeIn: 'fadeIn 2s forwards',
                    scale: 'scale 2s infinite',
      },
     
             
          keyframes: {
    rotateIn360: {
      '0%': {
        transform: 'translateY(1rem) rotate(0deg)',
        opacity: '0',
      },
      '100%': {
        transform: 'translateY(0) rotate(310deg)', // 360 + 45
        opacity: '1',
      },
    },
  },
  animation: {
    rotateIn360: 'rotateIn360 0.6s ease-out forwards',
  },
}
    

                }
            }


        
document.addEventListener('DOMContentLoaded', () => {
  // Portfolio data for each category
  const data = {
    all: [
      {
       image: 'Pics/Deloitte.jpg',
        title: 'Deloitte ',
         location: 'MyJuru App',
        desc: 'Project was about precision and Information',
        stats: [
          { value: '2M', label: 'Fresh Visits Every Year' },
          { value: '1.3B', label: 'International in 2 Years' }
        ],
        textColor: 'text-white'
      },
      {
        image: 'Pics/sebas.jpg',
        title: 'New Age',
        location: 'MyJuru App',
        desc: 'Project was about Precision and Information',
        stats: [
          { value: '2M', label: 'Downloads' },
          { value: '01', label: 'US Award' }
        ],
        textColor: 'text-white'
      },
      {
        image: 'Pics/better.jpg',
        title: 'Sebastians',
        location: 'Cosmic Sports Platform',
        desc: 'Project was about precision and Information',
        stats: [
          { value: '5.0', label: 'Rating' },
          { value: '10+', label: 'Design Awards' }
        ],
        textColor: 'text-white'
      },
       {
       image: 'Pics/grow.jpg',
        title: 'Mochnicis',
        location: 'Deloitte: France',
        desc: 'Project was about precision and Information',
        stats: [
          { value: '2M', label: 'Fresh Visits Every Year' },
          { value: '1.3B', label: 'International in 2 Years' }
        ],
        textColor: 'text-white'
      }
    ],
    uxui: [
      {
        image: 'Pics/better.jpg',
        title: 'Sebastics',
        location: 'FinTech Dashboard',
        desc: 'Crafting user-centric banking interfaces for top-tier clients',
        stats: [
          { value: '300+', label: 'User Interviews' },
          { value: '95%', label: 'User Satisfaction' }
        ],
        textColor: 'text-white'
      }
    ],
    branding: [
      {
       image: 'Pics/Deloitte.jpg',
        title: 'Deloitte ',
         location: 'MyJuru App',
        desc: 'Project was about precision and Information',
        stats: [
          { value: '2M', label: 'Fresh Visits Every Year' },
          { value: '1.3B', label: 'International in 2 Years' }
        ],
        textColor: 'text-white'
      },
      {
       image: 'Pics/grow.jpg',
        title: 'Mochnicis',
        location: 'Deloitte: France',
        desc: 'Project was about precision and Information',
        stats: [
          { value: '2M', label: 'Fresh Visits Every Year' },
          { value: '1.3B', label: 'International in 2 Years' }
        ],
        textColor: 'text-white'
      }
    ],
    apps: [
     {
        image: 'Pics/better.jpg',
        title: 'Sebastics',
        location: 'FinTech Dashboard',
        desc: 'Crafting user-centric banking interfaces for top-tier clients',
        stats: [
          { value: '300+', label: 'User Interviews' },
          { value: '95%', label: 'User Satisfaction' }
        ],
        textColor: 'text-white'
      }
    ]
  };

  // Select buttons and container where portfolio items will be rendered
  const buttons = document.querySelectorAll('.filter-btn');
  const itemsContainer = document.getElementById('portfolio-items');

  

function renderItems(category) {
  itemsContainer.innerHTML = '';
  const items = data[category];

  if (!items) return;

  items.forEach(item => {
    const html = `
      <div class="rounded-lg overflow-hidden shadow-md  hover:shadow-xl border-t-[32px] border-l-[32px] border-r-[32px] border-[#170C24] transition bg-white group cursor-pointer max-w-[100%] relative">
        <div class="portfolio-bg max-h-[100%]" style="
          background-image: url('${item.image}');
          background-size: cover;
          background-position: center;
          position: relative;
          width:full;
          
        ">
          <!-- Full-width gradient button at the bottom with Font Awesome icon -->
          <div class="absolute bottom-0  p-4   flex justify-between items-center   rounded-lg 
            opacity-0 group-hover:opacity-100 
            transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 text-white left-4 right-4">
            
            <div class="text-left text-sm md:text-base">
  <div class="font-bold">${item.title}</div>
  <div class="text-xs text-gray-200 mt-1">${item.desc}</div>
</div>

            
            <a href="https://example.com" target="_blank" rel="noopener noreferrer"
              class="text-white text-xl hover:text-gray-200 transition-colors">
              <i class="fas fa-arrow-right  opacity-0 group-hover:opacity-100 group-hover:animate-rotateIn360"></i>
            </a>
          </div>
        </div>
      </div>
    `;
    itemsContainer.insertAdjacentHTML('beforeend', html);
  });
}
const defaultButton = document.querySelector('[data-category="all"]');

if (defaultButton) {
  defaultButton.classList.add('active', 'rounded-full', 'text-white');
  defaultButton.classList.add('bg-gradient-to-r', 'from-purple-600', 'to-[#FFFF]');
  defaultButton.classList.remove('bg-black');
}

  // Setup buttons click listeners to update active state and portfolio items
  buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active styles from all buttons
    buttons.forEach(b => {
      b.classList.remove('active', 'rounded-full', 'bg-black', 'text-white');
      b.classList.remove('bg-gradient-to-r', 'from-purple-600', 'to-[#FFFF]');
      b.classList.add('text-white')
    });

    // Add active styles to clicked button
    btn.classList.add('active', 'rounded-full', 'text-white');
    btn.classList.add('bg-gradient-to-r', 'from-purple-600', 'to-[#FFFF]');
    btn.classList.remove('bg-black');

    // Get category from data attribute and render items
    const category = btn.getAttribute('data-category');
    renderItems(category);
  });
});


  // Initial render of all items on page load
  renderItems('all');
  

});






// testimonials.js

const testimonials = [
  {
    image: 'Pics/cosmetic.png',
    
    subtitle: "Sports Platform",
    image1:"Pics/cosmetic man.jpg",
    quote: "Taylor is a professional Designer he really helps my business by providing value to my business.",
    name: "Tim Bailey",
    role: "SEO Specialist, Theme Junction"
  },
  {
    image: "Pics/company.png",
    subtitle: "Tech Startup",
     image1:"Pics/company man.jpg",
    quote: "Taylor is a professional Designer he really helps my business by providing value to my business.",
    name: "Brandon Frason",
    role: "Senior Software Dev,Costemic Sport"
  },
  
  {
    image: "Pics/company.png",
    subtitle: "Tech Startup",
     image1:"Pics/company man.jpg",
    quote: "Taylor is a professional Designer he really helps my business by providing value to my business.",
    name: "Brandon Frason",
    role: "Senior Software Dev,Costemic Sport"
  },
  {
    image: 'Pics/cosmetic.png',
    
    subtitle: "Sports Platform",
    image1:"Pics/cosmetic man.jpg",
    quote: "Taylor is a professional Designer he really helps my business by providing value to my business.",
    name: "Tim Bailey",
    role: "SEO Specialist, Theme Junction"
  },
  {
    image: 'Pics/cosmetic.png',
    
    subtitle: "Sports Platform",
    image1:"Pics/cosmetic man.jpg",
    quote: "Taylor is a professional Designer he really helps my business by providing value to my business.",
    name: "Tim Bailey",
    role: "SEO Specialist, Theme Junction"
  },
  {
    image: "Pics/company.png",
    subtitle: "Tech Startup",
     image1:"Pics/company man.jpg",
    quote: "Taylor is a professional Designer he really helps my business by providing value to my business.",
    name: "Brandon Frason",
    role: "Senior Software Dev,Costemic Sport"
  }
];

let currentSlide = 0;

function renderTestimonials(index) {
  const wrapper = document.getElementById("testimonialWrapper");
  wrapper.innerHTML = "";

  for (let i = 0; i < 2; i++) {
    const testimonial = testimonials[index * 2 + i];
    if (!testimonial) break;

    wrapper.innerHTML += `
     <div class="relative mode bg-gradient-to-r from-[#170C24] to-[#261540] p-6 rounded-lg shadow-md">
  <div class="flex items-start mb-4">
    <div>
      <img src="${testimonial.image}" alt="${testimonial.name}" class="object-cover mb-2" />
      
    </div>
  </div>

  <!-- Testimonial quote and author -->
  <p class="text-secondary italic text-white mt-6 mb-10">"${testimonial.quote}"</p>
  <div>
    <h4 class="font-bold text-white">${testimonial.name}</h4>
    <p class="text-secondary text-white">${testimonial.role}</p>
  </div>

  <!-- Top-right image -->
  <div class="absolute top-4 right-4 w-16 h-16 overflow-hidden bg-blue-200" style="border-bottom-left-radius: 9999px; border-top-right-radius: 0; border-top-left-radius: 0; border-bottom-right-radius: 0;">
    <img src="${testimonial.image1}" alt="${testimonial.name}" class="w-full h-full object-cover" />
  </div>
</div>

    `;
  }

  updateDots(index);
}

function goToSlide(index) {
  currentSlide = index;
  renderTestimonials(index);
}

function updateDots(activeIndex) {
  for (let i = 0; i < 3; i++) {
    const dot = document.getElementById(`dot-${i}`);
    dot.classList.remove("bg-blue-500", "bg-gray-300");
    dot.classList.add(i === activeIndex ? "bg-blue-500" : "bg-gray-300");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderTestimonials(currentSlide);
});




document.addEventListener("DOMContentLoaded", () => {
  const modeToggle = document.getElementById('mode');
  const body = document.body;

  let isDark = true;

  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'light') {
    body.classList.add('light-mode');
    isDark = false;
    modeToggle.innerHTML = '<i class="fas fa-moon" aria-hidden="true"></i>';
  }

  modeToggle.addEventListener('click', () => {
    isDark = !isDark;
    body.classList.toggle('light-mode');

    if (isDark) {
      localStorage.setItem('mode', 'dark');
      modeToggle.innerHTML = '<i class="fas fa-lightbulb text-white" aria-hidden="true"></i>';
    } else {
      localStorage.setItem('mode', 'light');
      modeToggle.innerHTML = '<i class="fas fa-moon" aria-hidden="true"></i>';
    }
  });
});

        // Mobile menu functionality
        const openMenuButton = document.getElementById('openMenu');
        const closeMenuButton = document.getElementById('closeMenu');
        const mobileMenu = document.getElementById('mobileMenu');
        const menuOverlay = document.getElementById('menuOverlay');
        
        function openMenu() {
            mobileMenu.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeMenu() {
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        openMenuButton.addEventListener('click', openMenu);
        closeMenuButton.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);
        
        // Close menu when clicking on links
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
        
function downloadFile(filename) {
    const link = document.createElement("a");
    link.href = filename; // e.g., 'noshalresume.pdf'
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);}





