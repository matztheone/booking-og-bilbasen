var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Fuldfør";
  } else {
    document.getElementById("nextBtn").innerHTML = "Næste";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', function() {
    if (!card.classList.contains('active')) {
      // Remove active class from all cards
      cards.forEach((c) => c.classList.remove('active'));
      
      // Add active class to the clicked card
      card.classList.add('active');
      
      // Perform actions or register the toggle event in JavaScript for the active card
    }
  });
});


function openPopup(itemId) {
    var popup = document.getElementById("popup-" + itemId);
    popup.classList.add("active");
  }
  
  function closePopup(itemId) {
    var popup = document.getElementById("popup-" + itemId);
    popup.classList.remove("active");
  }
  
  function checkboxClicked(event) {
    event.stopPropagation();
    var itemId = event.target.closest(".item-container").getAttribute("data-item-id");
    var checkboxValue = event.target.checked;
    console.log("Checkbox value: " + checkboxValue);

    
    if (!checkboxValue) {
      openPopup(itemId);
    }
  }
  
  document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // You can handle form data here, for example, by sending it to a server using AJAX
    var formData = new FormData(this);
    var data = {};
    for (var pair of formData.entries()) {
      data[pair[0]] = pair[1];
    }
    console.log(data);
  });
  
  function changeButton() {
    var button = document.getElementById("myButton");
    button.classList.toggle("clicked");
    
    var text = document.querySelector("#myButton .text");
    if (text.textContent === "Vælg") {
      text.textContent = "Fravælg";
    } else {
      text.textContent = "Vælg";
    }
  }
  
  
  
  

  
  
  
  


