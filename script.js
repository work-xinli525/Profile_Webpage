document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form') || document.querySelector('.contact-form');

  contactForm.addEventListener('submit', function (event) {
    // Prevent default form submission
    event.preventDefault();

    // 1. Specify the recipient email address
    const recipientEmail = 'work-xinli525@gmail.com'; // Replace with your actual email

    // 2. Extract values from form inputs
    const senderName = document.getElementById('name').value.trim();
    const senderEmail = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // 3. Format email subject and body
    const formattedSubject = subject;
    const formattedBody = `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}`;

    // 4. Construct the mailto URL with proper URI encoding
    const mailtoUrl = `mailto:${encodeURIComponent(recipientEmail)}?subject=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(formattedBody)}`;

    // 5. Open Outlook / default email client
    window.location.href = mailtoUrl;
  });
});