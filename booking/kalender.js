// Inside your JavaScript file (e.g., booking.js)
document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#selectedDate", {
      // Configure the options according to your needs
      enableTime: false, // Set to true if you want to include time selection
      dateFormat: "Y-m-d", // Date format
      minDate: "today", // Set the minimum selectable date
      inline: false,
        "disable": [
            function(date) {
                // return true to disable
                return (date.getDay() === 0 || date.getDay() === 6);
    
            }
        ],
        "locale": {
            "firstDayOfWeek": 1 // start week on Monday
        }
      // You can add more options as per your requirements
    });
    flatpickr("#selectedTime", {
        // Configure the options according to your needs
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
        minTime: "08:15",
        maxTime: "15:30",
        defaultDate: "08:00"
        // You can add more options as per your requirements
      });


  });
  