document
  .getElementById("myForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const url = "https://api.web3forms.com/submit";
    const formId = "b6cca412-5f61-4462-92b2-b0f6bc7dc0c8";

    formData.append("form_id", formId);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        document.getElementById("statusMessage").textContent =
          "Form submitted successfully!";
        document.getElementById("myForm").reset();
      } else {
        document.getElementById("statusMessage").textContent =
          "Form submission failed!";
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      document.getElementById("statusMessage").textContent =
        "Error submitting form!";
    }
  });


  // yaha se popup ka hai
  
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
