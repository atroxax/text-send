const texts = [
"What is the purpose of an operating system?",
"What is the difference between RAM and ROM?",
"How does a CPU execute instructions?",
"What is the role of a GPU in a computer system?",
"What are the basic components of a computer?",
"How do binary numbers work in computing?",
"What is the function of a motherboard?",
"What are the differences between SSD and HDD?",
"How do network protocols facilitate communication?",
"What is cloud computing and how does it work?"
];

let index = 0;

function sendNextText() {
  if (index < texts.length) {
    const text = texts[index];

    // Find the textarea element by class name
    const textareaElement = document.querySelector('.m-0'); // Replace with the actual class name

    if (textareaElement) {
      // Set the value of the textarea
      textareaElement.value = text;

      // Create and dispatch input events to ensure the value is recognized
      const inputEvent = new Event('input', { bubbles: true });
      const changeEvent = new Event('change', { bubbles: true });
      textareaElement.dispatchEvent(inputEvent);
      textareaElement.dispatchEvent(changeEvent);

      // Find the send button element
      const sendButton = document.querySelector('.absolute.right-2.top-2.rounded-sm.p-1.inline-flex.items-center.gap-2.cursor-pointer'); // Replace with the actual class name

      if (sendButton) {
        // Delay to ensure the textarea is updated before clicking the send button
        setTimeout(() => {
          sendButton.click(); // Simulate click on the send button
          index++;
          setTimeout(sendNextText, 60000); // Adjust delay as needed
        }, 100); // Small delay to ensure the textarea value is set
      } else {
        console.error('Send button not found');
      }
    } else {
      console.error('Textarea element not found');
    }
  }
}

sendNextText();
