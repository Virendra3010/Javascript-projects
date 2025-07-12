# Toast Notification

This project demonstrates a simple toast notification system using HTML, CSS, and JavaScript. Toast notifications are small, temporary messages that appear on the screen to provide feedback to the user, such as success, error, or invalid input messages.

## Features

- Three types of toast notifications: Success, Error, and Invalid.
- Each notification displays an icon and a message.
- Notifications slide in from the right and automatically disappear after 3 seconds.
- Different colors and icons for each notification type:
  - Success: Green check icon
  - Error: Red cross icon
  - Invalid: Orange exclamation icon
- Progress bar animation indicating the remaining display time of the notification.

## Usage

- Click the "Success" button to show a success toast notification.
- Click the "Error" button to show an error toast notification.
- Click the "Invalid" button to show an invalid input toast notification.

## Files

- `index.html`: Contains the structure and buttons to trigger toast notifications.
- `style.css`: Styles the toast notifications, buttons, and animations.
- `script.js`: Contains the logic to create and display toast notifications dynamically.

## How it works

When a button is clicked, the `showToast` function is called with the corresponding message. This function creates a new toast element, sets its content and style based on the message type, and appends it to the toast container. The toast automatically disappears after 3 seconds.

## Dependencies

- FontAwesome is used for the icons in the toast notifications and is included via CDN in the HTML file.

## License

This project is open source and free to use.
