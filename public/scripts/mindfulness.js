// ====== DARK MODE ======
function initDarkMode() {
    const toggleDark = document.getElementById('toggleDark');
    toggleDark.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
    });
  }
  
  // ====== BREATHING SPEED CONTROL ======
  function initBreathingControl() {
    const breathingCircle = document.getElementById('breathingCircle');
    const speedControl = document.getElementById('speedControl');
  
    const speeds = {
      slow: 9000,
      medium: 6000,
      fast: 3000
    };
  
    speedControl.addEventListener('change', () => {
      const speed = speeds[speedControl.value];
      breathingCircle.style.animationDuration = `${speed}ms`;
    });
  }
  
  // ====== GUIDED MEDITATION MODAL ======
  function initMeditationModal() {
    const meditationCards = document.querySelectorAll('.meditation-card');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeModal = document.querySelector('.close-modal');
  
    meditationCards.forEach(card => {
      const title = card.dataset.title;
      const description = card.dataset.description;
  
      card.querySelector('.meditation-play').addEventListener('click', () => {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.classList.remove('hidden');
      });
    });
  
    closeModal.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
  }
  
  // ====== INSPIRATIONAL QUOTES ROTATOR ======
  function initQuoteRotator() {
    const quotes = [
      "“Peace comes from within. Do not seek it without.” – Buddha",
      "“The mind is everything. What you think you become.” – Buddha",
      "“Quiet the mind, and the soul will speak.” – Ma Jaya Sati Bhagavati",
      "“You should sit in meditation for twenty minutes a day – unless you're too busy. Then you should sit for an hour.” – Zen proverb"
    ];
    let quoteIndex = 0;
    const quoteElement = document.getElementById('quote');
  
    setInterval(() => {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      quoteElement.textContent = quotes[quoteIndex];
    }, 15000);
  }
  
  // ====== SESSION TIMER + BACKGROUND MUSIC ======
  function initSessionTimer() {
    const startBtn = document.getElementById('startSession');
    const stopBtn = document.getElementById('stopSession');
    const timerDisplay = document.getElementById('sessionTimer');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
  
    let sessionInterval;
    let seconds = 0;
  
    startBtn.addEventListener('click', () => {
      seconds = 0;
      timerDisplay.textContent = 'Session: 00:00';
      timerDisplay.classList.remove('hidden');
      startBtn.classList.add('hidden');
      stopBtn.classList.remove('hidden');
  
      if (musicToggle.checked) {
        bgMusic.play();
      }
  
      sessionInterval = setInterval(() => {
        seconds++;
        const min = String(Math.floor(seconds / 60)).padStart(2, '0');
        const sec = String(seconds % 60).padStart(2, '0');
        timerDisplay.textContent = `Session: ${min}:${sec}`;
      }, 1000);
    });
  
    stopBtn.addEventListener('click', () => {
      clearInterval(sessionInterval);
      timerDisplay.classList.add('hidden');
      startBtn.classList.remove('hidden');
      stopBtn.classList.add('hidden');
      bgMusic.pause();
      bgMusic.currentTime = 0;
      updateStreak();
    });
  }
  
  // ====== WEEKLY STREAK TRACKER ======
  const streakKey = 'mindfulnessStreak';
  const today = new Date().getDay(); // 0 = Sunday, 6 = Saturday
  
  function getStreak() {
    const saved = localStorage.getItem(streakKey);
    return saved ? JSON.parse(saved) : Array(7).fill(false);
  }
  
  function saveStreak(streak) {
    localStorage.setItem(streakKey, JSON.stringify(streak));
  }
  
  function updateStreak() {
    const streak = getStreak();
    streak[today] = true;
    saveStreak(streak);
    renderStreak();
  }
  
  function renderStreak() {
    const streakDisplay = document.getElementById('streakDisplay');
    const streak = getStreak();
    streakDisplay.innerHTML = '';
    streak.forEach(active => {
      const dot = document.createElement('div');
      dot.classList.add(active ? 'active' : '');
      streakDisplay.appendChild(dot);
    });
  }
  
  // ====== INITIALIZE ALL FUNCTIONS ======
  document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initBreathingControl();
    initMeditationModal();
    initQuoteRotator();
    initSessionTimer();
    renderStreak();
  });
  

  