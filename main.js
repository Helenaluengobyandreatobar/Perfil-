import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="container">
    <div class="glass-card">
      <div class="profile-section">
        <img src="https://i.pravatar.cc/300" alt="Profile Picture" class="profile-pic">
        <div class="profile-info">
          <h2>Claudia Alves</h2>
          <p>UX/UI Designer</p>
        </div>
      </div>
      
      <div class="stats-grid">
        <div class="stat-card">
          <i class="fas fa-project-diagram"></i>
          <h3>Projects</h3>
          <p>25 Completed</p>
        </div>
        <div class="stat-card">
          <i class="fas fa-users"></i>
          <h3>Followers</h3>
          <p>1.2k</p>
        </div>
        <div class="stat-card">
          <i class="fas fa-star"></i>
          <h3>Rating</h3>
          <p>4.9/5.0</p>
        </div>
      </div>
    </div>

    <div class="glass-card">
      <h3>Settings</h3>
      <div class="settings-grid">
        <div class="settings-item">
          <span><i class="fas fa-user"></i> Profile</span>
          <i class="fas fa-chevron-right"></i>
        </div>
        <div class="settings-item">
          <span><i class="fas fa-palette"></i> Theme</span>
          <label class="toggle-switch">
            <input type="checkbox" id="themeToggle">
            <span class="slider"></span>
          </label>
        </div>
        <div class="settings-item">
          <span><i class="fas fa-bell"></i> Notifications</span>
          <label class="toggle-switch">
            <input type="checkbox" checked>
            <span class="slider"></span>
          </label>
        </div>
        <div class="settings-item">
          <span><i class="fas fa-lock"></i> Privacy</span>
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  </div>
`;

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('change', function() {
  document.body.style.background = this.checked
    ? 'linear-gradient(45deg, #2c3e50, #3498db)'
    : 'linear-gradient(45deg, #ff6b6b, #4ecdc4)';
});

// Interactive elements
document.querySelectorAll('.settings-item').forEach(item => {
  item.addEventListener('click', function() {
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 200);
  });
});

document.querySelectorAll('.stat-card').forEach(card => {
  card.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
  });
  
  card.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
  });
});