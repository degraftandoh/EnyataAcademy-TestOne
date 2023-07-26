
class UserFormHandler {
    async validateForm() {
      const form = document.getElementById('userForm');
      const formData = new FormData(form);
  
      for (const value of formData.values()) {
        if (!value) {
          return false;
        }
      }
  
      return true;
    }
  
    async generateSentence() {
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const age = document.getElementById('age').value;
      const country = document.getElementById('country').value;
  
      return `My name is ${firstName} ${lastName}. I am from ${country}. I am ${age} years old.`;
    }
  }
  
  document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const formHandler = new UserFormHandler();
    const isValid = await formHandler.validateForm();
  
    if (isValid) {
      const sentence = await formHandler.generateSentence();
      alert(sentence)
    } else {
      alert('Please fill in all fields.');
    }
  });
  