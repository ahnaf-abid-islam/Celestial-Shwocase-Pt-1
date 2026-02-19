/* =========================
   CELESTIAL SHOWCASE (JS BOILERPLATE)
   Same structure, comments-only + placeholders
   ========================= */

/* ---------- 0) API KEY ----------
   This will be added in Lesson 4.
   Keep it as a constant so we can use it in the endpoint.
---------------------------------- */

// const API_KEY = "YOUR_NASA_API_KEY_HERE";


/* ---------- 1) initializeDatepicker() ----------
   Goal:
   - Set the date picker to today
   - Prevent choosing future dates
---------------------------------------------- */

function initializeDatepicker() {
  // Create a Date object for today's date

  // Convert today into "YYYY-MM-DD" format using formatDate()

  // (Optional) Log the formatted date to console for debugging

  // Set datePicker.max to today's date (so future dates are blocked)

  // Set datePicker.value to today's date (so it auto-selects today)
}


/* ---------- 2) getRandomDate() ----------
   Goal:
   - Pick a random date between:
     June 16, 1995 (APOD start) and today
---------------------------------------- */

function getRandomDate() {
  // Create start date (1995-06-16)

  // Create end date (today)

  // Generate a random time number between start and end

  // Convert that random time into a Date object

  // (Optional) Log the random date for debugging

  // Return the random Date object
}


/* ---------- 3) formatDate(date) ----------
   Goal:
   - Convert a Date object into "YYYY-MM-DD"
   Why:
   - NASA API expects date in this exact format
---------------------------------------- */

function formatDate(date) {
  // Get year (YYYY)

  // Get month (MM) and add 1 (because months start from 0)

  // Make sure month has 2 digits (padStart)

  // Get day (DD)

  // Make sure day has 2 digits (padStart)

  // Return formatted string: "YYYY-MM-DD"
}


/* ---------- 4) fetchAPODData(date) ----------
   Goal:
   - Build NASA endpoint using:
     - date
     - API_KEY
   - Fetch data from NASA
   - Convert response to JSON
   - Send data to updateUI()
------------------------------------------- */

async function fetchAPODData(date) {
  try {
    // Build the endpoint URL using the date + API_KEY

    // (Optional) Log which date we are fetching

    // Fetch data from the endpoint (await fetch)

    // (Optional) Log full response for debugging

    // Convert response into JSON (await response.json)

    // (Optional) Log received data for debugging

    // Call updateUI(data, date) to show data on the page
  } catch (error) {
    // If something goes wrong, show error in console
  }
}


/* ---------- 5) updateUI(data, date) ----------
   Goal:
   - Put NASA data into the webpage
   Updates:
   - Background image (#apodImage)
   - Title (#apodTitle)
   - Date (#apodDate)
   - Description (#apodDescription)
------------------------------------------- */

function updateUI(data, date) {
  // (Optional) Log that UI is being updated

  // Set #apodImage background image using:
  // data.hdurl (or data.url as backup)

  // Set #apodDescription text using data.explanation

  // Set #apodDate text using the chosen date

  // Set #apodTitle text using data.title
}


/* ---------- 6) loadAPODData() ----------
   Goal:
   - Load a random APOD image
   Steps:
   - Get random Date object
   - Format it
   - Fetch NASA data for that date
-------------------------------------- */

async function loadAPODData() {
  // Get a random Date object using getRandomDate()

  // Format it using formatDate()

  // (Optional) Log which random date is being loaded

  // Await fetchAPODData(formattedRandomDate)
}


/* ---------- 7) loadSelectedDateAPOD() ----------
   Goal:
   - Load APOD data for the date the user selected
---------------------------------------------- */

async function loadSelectedDateAPOD() {
  // Read the value from #datePicker

  // (Optional) Log the selected date

  // Await fetchAPODData(selectedDate)
}


/* ---------- 8) loadCurrentDateAPOD() ----------
   Goal:
   - Run when page opens (onload)
   Steps:
   - Setup date picker
   - Load today's APOD
------------------------------------------- */

async function loadCurrentDateAPOD() {
  // Call initializeDatepicker() first

  // Create today's Date object

  // Format it using formatDate()

  // (Optional) Log today's date

  // Await fetchAPODData(formattedToday)
}
