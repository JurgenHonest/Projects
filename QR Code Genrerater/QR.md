# Simple QR Code Generator
https://sumit-qrcodegenerator.netlify.app/
## 1. HTML Structure
i. Page Layout: The HTML structure is designed to provide a user interface where the user can input text or a URL and then generate a QR code based on that input.<br>
ii. Input Field: Where users type the text or URL that they want to encode into a QR code.<br>
iii. Button: When clicked, this triggers the QR code generation.<br>
iv. Image Container: Displays the generated QR code image.
## 2. JavaScript Logic
i. Element References: JavaScript is used to interact with the HTML elements.<br>
ii. imgBox references the container for the QR code image.<br>
iii. qrImage references the actual image element where the QR code will be displayed.<br>
iv. qrText references the input field where users enter the text or URL.
### Generate QR Code Function:
a. Check Input:<br>
The function generateQR() first checks if the input field (qrText) contains any text. This is done using if (qrText.value.length > 0).<br>
If the input field is not empty, the function proceeds to generate the QR code.
If the input field is empty, an error class is added to the input field to indicate that something is missing.<br><br>
b. Set Image Source:<br>
If there is input, the QR code image source (qrImage.src) is set to a URL from the qrserver.com API. This URL includes the input data as a query parameter, which tells the API what to encode in the QR code.
The URL "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" is used, where size=150x150 specifies the dimensions of the QR code, and data= is followed by the user's input text.<br><br>
c. Display QR Code:<br>
The imgBox container’s class list is updated by adding the show-img class. This class likely contains CSS rules to make the QR code visible.<br><br>
d. Error Handling:<br>
If the input is empty, an error class (error) is added to the input field to highlight it (e.g., with a red border or background).
After 1 second, the error class is removed to reset the input field’s appearance.

## This CSS file effectively styles your QR code generator to be visually appealing and user-friendly, while also providing feedback for errors.
#### Error Handling:
a. .error { ... }:
Adds a shake animation to indicate an error when the input field is empty.<br>
b. @keyframes shake { ... }:
Defines the shake animation for the .error class, making the input field shake horizontally to grab user attention.
This CSS file effectively styles your QR code generator to be visually appealing and user-friendly, while also providing feedback for errors.
