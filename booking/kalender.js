document.addEventListener("DOMContentLoaded", function() {
  flatpickr("#selectedDate", {
    // Configure the options according to your needs
    enableTime: false,
    dateFormat: "Y-m-d",
    minDate: "today",
    inline: false,
    disable: [
      function(date) {
        return (date.getDay() === 0 || date.getDay() === 6);
      }
    ],
    locale: {
      firstDayOfWeek: 1
    },
    // Add inline styles to customize the appearance
    onReady: function(selectedDates, dateStr, instance) {
      var datePickerInput = instance._input;
      datePickerInput.style.background = "#f5f5f5";
      datePickerInput.style.border = "1px solid #ccc";
      datePickerInput.style.width = "400px"; // Increase width
      datePickerInput.style.padding = "10px"; // Add padding
      datePickerInput.style.textAlign = "center"; // Center text
      datePickerInput.style.margin = "0 auto"; // Center horizontally
      // Add more styles as needed
    }
  });

  flatpickr("#selectedTime", {
    // Configure the options according to your needs
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true,
    minTime: "08:15",
    maxTime: "15:30",
    defaultDate: "08:00",
    // Add inline styles to customize the appearance
    onReady: function(selectedDates, dateStr, instance) {
      var timePickerInput = instance._input;
      timePickerInput.style.background = "#f5f5f5";
      timePickerInput.style.border = "1px solid #ccc";
      timePickerInput.style.width = "400px"; // Increase width
      timePickerInput.style.padding = "10px"; // Add padding
      timePickerInput.style.textAlign = "center"; // Center text
      timePickerInput.style.margin = "0 auto"; // Center horizontally
      // Add more styles as needed
    }
  });

  var bookingElement = document.getElementById("myCalendarWrapper");
  bookingElement.style.width = "600px"; // Increase width
  bookingElement.style.padding = "20px"; // Add padding
  bookingElement.style.textAlign = "center"; // Center text
  bookingElement.style.margin = "0 auto"; // Center horizontally
});