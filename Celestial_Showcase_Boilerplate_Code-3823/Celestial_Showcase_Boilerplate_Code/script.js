

 const API_KEY = "HEREhZxpi3TP7Zz4fbKSNFwS5Q5qias1FDrOBAtfglmh";       

function initializeDatepicker() {
  
  const today = new Date();

  const formattedToday = formatDate(today);

  const datePicker = document.getElementById('datePicker');

  datePicker.max = formattedToday;

  datePicker.value = formattedToday;

  console.log('Date Picker initialized:', formattedToday);

}


/* ---------- 2) getRandomDate() ----------
   Goal:
   - Pick a random date between:
     June 16, 1995 (APOD start) and today
---------------------------------------- */

function getRandomDate() {
  
  const start = new Date('1995-06-16')

  const end = new Date();

  const randomTime = start.getTime() +

  Math.random() * (end.getTime() - start.getTime());

  const randomDate = new Date(randomTime);

  console.log('Random APOD date:', forwardDate(randomDate));

}


/* ---------- 3) formatDate(date) ----------
   Goal:
   - Convert a Date object into "YYYY-MM-DD"
   Why:
   - NASA API expects date in this exact format
---------------------------------------- */

function formatDate(date) {

  const yyyy = date.getFullYear();

  const mm = (date.getMonth() + 1).toString().padStart(2, '0');

  const dd = date.getDate().toString().padStart(2, '0');

  return  `${yyyy}-${mm}-${dd}`;

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
   const endpoint = `https://api.nasa.gov/planetary/apod

?date=${date}&api_key=${API_KEY}`;

   const response = await fetch(endpoint)

   const data = await response.json();

   updateUI(data, date);

  } catch (error) {
     console.error('Error fetching data:', error);
}


function updateUI(data, date) {
  document.getElementById('apodImage')

    .style.backgroundImage = `url('$(data.url)')`;

  document.getElementById('apodTitle')

    .textContent = data.title;

  document.getElementById('apodDate')

    .textContent = `Date: ${data}`;

  document.getElementById('apodDescription')

    .textContent = data.explanation;

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
