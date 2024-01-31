
document.addEventListener('DOMContentLoaded', function () {
  const letterIds = ['letterD', 'letterE', 'letterV',"letter_", 'letterM', 'letterA', 'letterY'];

  // Function to show letters with a delay
  function showLettersWithDelay(index) {
    if (index < letterIds.length) {
      const letterId = letterIds[index];
      const letterElement = document.getElementById(letterId);

      // Show the letter
      letterElement.style.opacity = '1';

      // Move to the next letter after a delay
      setTimeout(() => {
        // Keep the letter visible
        letterElement.style.opacity = '1';

        // Move to the next letter with a delay
        showLettersWithDelay((index + 1) % letterIds.length);
      }, 500);
    }
  }

  // Set initial opacity to 0 for all letters
  letterIds.forEach((letterId) => {
    const letterElement = document.getElementById(letterId);
    letterElement.style.opacity = '0';
  });

  // Start showing letters with a delay
  showLettersWithDelay(0);
});

const username = document.getElementById("Name")
const email = document.getElementById("Email")
const subject = document.getElementById("Subject")
const description = document.getElementById("Description")

function SendMessage  (ev)  {
ev.preventDefault()

  if (username.value === "" || email.value === "" || subject.value === "" || description.value === "") {
    // alert("input fields cannot be empty")
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "input fields cannot be empty",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
    
  }else{
    const value = {
      UserName : username.value,
      Email :  email.value,
      Subject : subject.value,
      Description : description.value
    }
    console.log(value);
     fetch("https://portfoliobackend-ozek.onrender.com/" , {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({value})
    }).then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data);
      
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Thank you for exploring! I look forward to working with you!",
        showConfirmButton: false,
        timer: 2500
      });

      username.value = ""
      email.value = ""
      subject.value = ""
      description.value = ""
    }).catch((error)=>{
     console.log(error);
    })
  }
}
