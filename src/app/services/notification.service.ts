import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  // Check for permission
  checkNotificationPermission() {
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        this.showNotification('Hello!', 'You have new notifications.');
      } else if (Notification.permission !== 'denied') {
        this.requestPermission();
      }
    }
  }

  // Request permission
  requestPermission() {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        this.showNotification('Hello!', 'You have new notifications.');
      }
    });
  }

  // Show notification
  showNotification(title: string, body: string) {
    const notification = new Notification(title, {
      body: body,
      icon: 'path/to/icon.png' // Optional: Add an icon
    });

    // Log the body to the console when the notification is clicked
    notification.onclick = () => {
      console.log(body); // Log the notification body
      // Optionally, you can redirect or perform another action here
    };
  }
}
