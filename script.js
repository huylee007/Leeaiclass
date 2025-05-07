// logger.js (This file needs to be created separately)
const Logger = {
  ActionTypes: {
    MENU_OPEN: 'menu_open',
    THEME_CHANGE: 'theme_change',
    TUTOR_SWITCH: 'tutor_switch'
  },
  log: function(type, data) {
    // Implement your logging logic here.  This could be sending data to a server,
    // writing to a local file, or using the browser's console.
    console.log("Logging action:", type, data);
  }
};


// Hiệu ứng cuộn mượt cho các liên kết
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hiệu ứng hiện menu khi cuộn
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  lastScrollTop = scrollTop;
});

// Hiệu ứng hover cho các nút
document.querySelectorAll('.suggestion-btn').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'translateY(-5px)';
  });

  button.addEventListener('mouseout', () => {
    button.style.transform = 'translateY(0)';
  });
});

// Animation cho welcome section và chatbot khi load trang
document.addEventListener('DOMContentLoaded', () => {
  const welcomeSection = document.querySelector('.welcome-section');
  const chatbotFrame = document.querySelector('.chatbot-frame');

  welcomeSection.style.opacity = '0';
  welcomeSection.style.transform = 'translateY(20px)';

  setTimeout(() => {
    welcomeSection.style.transition = 'all 0.6s ease-out';
    welcomeSection.style.opacity = '1';
    welcomeSection.style.transform = 'translateY(0)';
  }, 300);

  // Add loading animation for iframe
  chatbotFrame.addEventListener('load', () => {
    chatbotFrame.classList.add('loaded');
  });
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Detect mobile devices
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  document.body.classList.add('mobile-device');
}

// Hiệu ứng ripple cho các nút
function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();

  const diameter = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = `${diameter}px`;

  ripple.style.left = `${event.clientX - rect.left - diameter / 2}px`;
  ripple.style.top = `${event.clientY - rect.top - diameter / 2}px`;

  ripple.classList.add('ripple');
  button.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
}

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', createRipple);
});

// Thêm hiệu ứng loading cho chatbot
function showLoading() {
  const chatbotContainer = document.querySelector('.chatbot-container');
  const loadingOverlay = document.createElement('div');
  loadingOverlay.classList.add('loading-overlay');
  loadingOverlay.innerHTML = `
    <div class="loading-spinner"></div>
    <p>Đang tải...</p>
  `;
  chatbotContainer.appendChild(loadingOverlay);
}

function hideLoading() {
  const loadingOverlay = document.querySelector('.loading-overlay');
  if (loadingOverlay) {
    loadingOverlay.remove();
  }
}

// Thêm hiệu ứng preload cho iframe
const chatbotFrame = document.getElementById('chatbotFrame');
if (chatbotFrame) {
  showLoading();
  chatbotFrame.onload = () => {
    hideLoading();
  };
}

// Xử lý dark mode với animation
function toggleDarkMode() {
  const isDarkMode = !document.body.classList.contains('dark-mode');
  document.body.classList.toggle('dark-mode');

  // Log hành động
  Logger.log(Logger.ActionTypes.THEME_CHANGE, {
    theme: isDarkMode ? 'dark' : 'light'
  });

  if (window.innerWidth < 1200) {
    toggleLeftSidebar();
  }
}

// Khôi phục dark mode từ localStorage
document.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
});


function toggleLeftSidebar() {
  const sidebarLeft = document.getElementById('sidebarLeft');
  const overlay = document.getElementById('overlay');
  if (sidebarLeft) {
    const isOpening = !sidebarLeft.classList.contains('open');
    sidebarLeft.classList.toggle('open');
    if (overlay) overlay.classList.toggle('active');

    // Log hành động
    Logger.log(Logger.ActionTypes.MENU_OPEN, {
      state: isOpening ? 'opened' : 'closed'
    });
  }
}

function switchTutor(tutorType) {
  // Log hành động
  Logger.log(Logger.ActionTypes.TUTOR_SWITCH, {
    tutorType: tutorType
  });
}