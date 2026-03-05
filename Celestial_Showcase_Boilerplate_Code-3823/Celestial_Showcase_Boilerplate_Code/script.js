

const API_KEY = "I7Md4d6wo2TagdY7BwQ2Xm3SM77VrtQ9v1ldfTI2";       

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



async function loadAPODData() {
    const random = formatDate(getRandomDate());

    console.log('Loading APOD data for a random date:', randomDate);

    await fetchAPODData(randomDate);

}

async function loadSelectedDateAPOD() {
    const selectDate = document.getElementById('datePicker').value;

    console.log('Loading APOD data for selected date:', selectedDate);

    await fetchAPODData(selectedDate);
}


/* ---------- 8) loadCurrentDateAPOD() ----------
   Goal:
   - Run when page opens (onload)
   Steps:
   - Setup date picker
   - Load today's APOD
------------------------------------------- */

async function loadCurrentDateAPOD() {
  initializeDatepicker();

  const currentDate = formatDate(new Date());

  console.log('Loading APOD data for the current date', currentDate);

  await fetchAPODData(currentDate);
  
}
