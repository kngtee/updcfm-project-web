import toastr from 'toastr';
import 'toastr/toastr.scss';

toastr.options = {
  closeButton: false, // Display a close button
  progressBar: false, // Show a progress bar
  positionClass: 'toast-top-right', // Position the notification at the bottom-right corner
  timeOut: 3000, // Auto-hide the notification after 3 seconds
  extendedTimeOut: 1000, // Delay before auto-hide starts (only applies if "timeOut" is set)
  showEasing: 'swing', // Animation easing for showing the notification
  hideEasing: 'linear', // Animation easing for hiding the notification
  showMethod: 'fadeIn', // Animation method for showing the notification
  hideMethod: 'fadeOut', // Animation method for hiding the notification
};

//Creating a custom alert with toastr

export const successMessage = (message) => {
  toastr.success(message.message, message.title);
};

export const errorMessage = (message) => {
  toastr.error(message.message, message.title);
};
