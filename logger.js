
// Định nghĩa các loại hành động
const ActionTypes = {
  PAGE_VIEW: 'page_view',
  BUTTON_CLICK: 'button_click',
  MENU_OPEN: 'menu_open',
  THEME_CHANGE: 'theme_change',
  TUTOR_SWITCH: 'tutor_switch'
};

// Hàm ghi log
function logUserAction(actionType, details = {}) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    actionType,
    details,
    url: window.location.href,
    userAgent: navigator.userAgent
  };

  // Lưu vào localStorage
  const logs = JSON.parse(localStorage.getItem('userActionLogs') || '[]');
  logs.push(logEntry);
  localStorage.setItem('userActionLogs', JSON.stringify(logs));

  // Log ra console để debug
  console.log('User Action:', logEntry);
}

// Export các hàm và constant
window.Logger = {
  log: logUserAction,
  ActionTypes
};
