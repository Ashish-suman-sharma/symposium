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

      const data = await response.json();

      if (response.status >= 200 && response.status < 300) {
        document.getElementById("statusMessage").textContent =
          "Form submitted successfully!";
        document.getElementById("myForm").reset();
      } else {
        document.getElementById("statusMessage").textContent =
          data.message || "Form submission failed!";
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      document.getElementById("statusMessage").textContent =
        "Error submitting form!";
    }
  });