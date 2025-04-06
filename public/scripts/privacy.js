// privacy.js

document.addEventListener('DOMContentLoaded', () => {
  const profilePhotoInput = document.getElementById('profilePhoto');
  const profilePhotoPreview = document.getElementById('profilePhotoPreview');
  const changePasswordBtn = document.getElementById('changePasswordBtn');
  const viewLoginHistoryBtn = document.getElementById('viewLoginHistoryBtn');
  const deleteDataBtn = document.getElementById('deleteDataBtn');
  const restoreDataBtn = document.getElementById('restoreDataBtn');
  const blockUserBtn = document.getElementById('blockUserBtn');
  const blockUserInput = document.getElementById('blockUserInput');
  const blockedUsersList = document.getElementById('blockedUsersList');
  const savePreferencesBtn = document.getElementById('savePreferencesBtn');
  const lastSaved = document.getElementById('lastSaved');

  // Profile Photo Preview
  profilePhotoInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
              profilePhotoPreview.src = e.target.result;
          };
          reader.readAsDataURL(file);
      }
  });

  // Change Password (Placeholder)
  changePasswordBtn.addEventListener('click', () => {
      alert('Password change functionality not implemented.');
  });

  // View Login History (Placeholder)
  viewLoginHistoryBtn.addEventListener('click', () => {
      alert('Login history functionality not implemented.');
  });

  // Delete Data (Confirmation)
  deleteDataBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to delete all your wellness data? This action cannot be undone.')) {
          alert('Wellness data deleted (placeholder).');
      }
  });

  // Restore Data (Placeholder)
  restoreDataBtn.addEventListener('click', () => {
      alert('Data restoration functionality not implemented.');
  });

  // Block User
  const blockedUsers = []; // Store blocked usernames
  blockUserBtn.addEventListener('click', () => {
      const username = blockUserInput.value.trim();
      if (username) {
          if (!blockedUsers.includes(username)) {
              blockedUsers.push(username);
              updateBlockedUsersList();
              blockUserInput.value = '';
          } else {
              alert('User already blocked.');
          }
      }
  });

  function updateBlockedUsersList() {
      if (blockedUsers.length > 0) {
          blockedUsersList.innerHTML = ''; // Clear previous list
          blockedUsers.forEach(username => {
              const userItem = document.createElement('p');
              userItem.textContent = username;
              blockedUsersList.appendChild(userItem);
          });
      } else {
          blockedUsersList.innerHTML = '<p class="text-sm text-gray-500 dark:text-gray-400">No users blocked.</p>';
      }
  }

  // Save Preferences
  savePreferencesBtn.addEventListener('click', () => {
      // Collect data from inputs and checkboxes
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const language = document.getElementById('language').value;
      const twoFactorAuth = document.getElementById('twoFactorAuth').checked;
      const sessionTimeout = document.getElementById('sessionTimeout').checked;
      const deviceNotifications = document.getElementById('deviceNotifications').checked;
      const visibility = document.getElementById('visibility-select').value;
      const aiConsent = document.getElementById('aiConsent').checked;
      const shareMood = document.getElementById('shareMood').checked;
      const encryption = document.getElementById('encryption').checked;
      const emailConsent = document.getElementById('emailConsent').checked;

      // Simulate saving data (replace with actual saving logic)
      console.log({
          username,
          email,
          language,
          twoFactorAuth,
          sessionTimeout,
          deviceNotifications,
          visibility,
          aiConsent,
          shareMood,
          encryption,
          emailConsent,
          blockedUsers
      });

      lastSaved.textContent = `Last saved: ${new Date().toLocaleString()}`;
      alert('Preferences saved (placeholder).');
  });

  // Initial blocked users list update
  updateBlockedUsersList();
});