const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the form elements using the elements property
  const formElements = event.target.elements;

  if (!formElements.email.value || !formElements.password.value) {
    alert("All fields must be filled.");
  } else {
    const formData = {
      email: formElements.email.value,
      password: formElements.password.value,
    };

    console.log(formData);

    // Reset the form fields
    loginForm.reset();
  }
});
