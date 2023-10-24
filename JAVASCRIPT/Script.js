const calendarDays = document.getElementById('calendarDays');
const eventList = document.getElementById('eventList');
const monthYear = document.getElementById('monthYear');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');

let currentDate = new Date();
let selectedDate = currentDate;

function renderCalendar() {
    
    calendarDays.innerHTML = '';
    eventList.innerHTML = '';

    
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    monthYear.textContent = `${currentDate.toLocaleString('uk-UA', { month: 'long' })} ${currentDate.getFullYear()}`;

   
    for (let i = 1; i <= lastDay.getDate(); i++) {
        const day = document.createElement('div');
        day.classList.add('calendar-day');
        day.textContent = i;

      
        day.addEventListener('click', () => selectDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), i)));

        calendarDays.appendChild(day);
    }

    // TODO: Завантажити події з сервера або локальної бази даних і відобразити їх в eventList
    // Ви можете використовувати Ajax або fetch для завантаження подій.

    // Також, ви можете позначити дні, на які є події, якось додавши клас або піктограму до відповідних елементів календаря.
}

function selectDate(date) {
    selectedDate = date;
    renderCalendar();
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

prevMonthButton.addEventListener('click', prevMonth);
nextMonthButton.addEventListener('click', nextMonth);
renderCalendar();
