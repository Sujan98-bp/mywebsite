class Calendar {
    constructor() {
        this.currentLanguage = 'bengali';
        this.currentDate = new Date();
        this.displayedMonth = this.currentDate.getMonth();
        this.displayedYear = this.currentDate.getFullYear();
        
        // Initialize elements
        this.calendarTitle = document.getElementById('calendarTitle');
        this.calendarSubtitle = document.getElementById('calendarSubtitle');
        this.currentMonthRegional = document.getElementById('currentMonthRegional');
        this.currentMonthEnglish = document.getElementById('currentMonthEnglish');
        this.gregorianYear = document.getElementById('gregorianYear');
        this.calendarDays = document.getElementById('calendar-days');
        this.weekdaysContainer = document.getElementById('weekdaysContainer');
        this.rashiContainer = document.getElementById('rashiContainer');
        this.rashiTitle = document.getElementById('rashiTitle');
        this.festivalTitle = document.getElementById('festivalTitle');
        
        this.initializeEventListeners();
        this.updateCalendar();
        this.updateRashi();
    }

    initializeEventListeners() {
        document.getElementById('prevMonth').addEventListener('click', () => this.previousMonth());
        document.getElementById('nextMonth').addEventListener('click', () => this.nextMonth());
        
        // Language selector buttons
        document.querySelectorAll('.language-selector button').forEach(button => {
            button.addEventListener('click', () => {
                this.changeLanguage(button.dataset.lang);
                document.querySelectorAll('.language-selector button').forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
            });
        });
    }

    changeLanguage(language) {
        this.currentLanguage = language;
        this.updateCalendar();
        this.updateRashi();
        this.updateUI();
    }

    updateUI() {
        const data = calendarData[this.currentLanguage];
        this.calendarTitle.textContent = data.name;
        this.calendarSubtitle.textContent = data.nameEnglish;
        this.rashiTitle.textContent = `${data.name} - Rashi`;
        this.festivalTitle.textContent = `Festivals - ${data.nameEnglish}`;
    }

    toRegionalNumber(num) {
        return num.toString().split('').map(digit => 
            calendarData[this.currentLanguage].digits[parseInt(digit)]
        ).join('');
    }

    getRegionalMonth(date) {
        // Convert Gregorian month to regional month based on the traditional calendar
        let monthOffset = {
            'bengali': 3,     // Bengali year starts in mid-April
            'odia': 3,        // Odia year starts in mid-April
            'rajasthani': 3,  // Rajasthani year starts in Chaitra (March-April)
            'kannada': 0,     // Kannada year starts with Chaitra
            'tamil': 3,       // Tamil year starts in mid-April
            'malayalam': 4,   // Malayalam year starts in mid-August
            'hindi': 0        // Hindi year starts with Chaitra
        };
        
        const offset = monthOffset[this.currentLanguage] || 0;
        const monthIndex = (date.getMonth() + offset) % 12;
        return calendarData[this.currentLanguage].months[monthIndex];
    }

    getRegionalDate(date) {
        // Convert Gregorian date to regional date based on traditional calendar
        let dateOffset = {
            'bengali': 14,    // Bengali date is typically +14 days
            'odia': 14,       // Odia date is typically +14 days
            'rajasthani': 15, // Rajasthani date offset
            'kannada': 15,    // Kannada date offset
            'tamil': 14,      // Tamil date offset
            'malayalam': 15,  // Malayalam date offset
            'hindi': 15       // Hindi date offset
        };
        
        let day = date.getDate() + (dateOffset[this.currentLanguage] || 14);
        if (day > 30) day = day - 30;
        return this.toRegionalNumber(day);
    }

    updateCalendar() {
        const firstDay = new Date(this.displayedYear, this.displayedMonth, 1);
        const lastDay = new Date(this.displayedYear, this.displayedMonth + 1, 0);
        const startingDay = firstDay.getDay();
        const totalDays = lastDay.getDate();

        // Update month displays
        const currentRegionalMonth = this.getRegionalMonth(firstDay);
        this.currentMonthRegional.textContent = currentRegionalMonth;
        this.currentMonthEnglish.textContent = new Date(this.displayedYear, this.displayedMonth).toLocaleString('en-US', { month: 'long' });
        this.gregorianYear.textContent = this.displayedYear.toString();

        // Update weekdays
        this.weekdaysContainer.innerHTML = calendarData[this.currentLanguage].weekdays
            .map(day => `<div>${day}</div>`).join('');

        // Clear previous calendar
        this.calendarDays.innerHTML = '';

        // Add empty cells for days before start of month
        for (let i = 0; i < startingDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.classList.add('day');
            this.calendarDays.appendChild(emptyCell);
        }

        // Add days of the month
        for (let day = 1; day <= totalDays; day++) {
            const dayCell = document.createElement('div');
            dayCell.classList.add('day');
            
            const dateContainer = document.createElement('div');
            dateContainer.classList.add('date-container');
            
            // Add Regional date first (will be displayed on top)
            const regionalDate = document.createElement('div');
            regionalDate.classList.add('regional-date');
            const currentDate = new Date(this.displayedYear, this.displayedMonth, day);
            regionalDate.textContent = this.getRegionalDate(currentDate);
            
            // Add English date second (will be displayed below)
            const englishDate = document.createElement('div');
            englishDate.classList.add('english-date');
            englishDate.textContent = day;
            
            dateContainer.appendChild(regionalDate);
            dateContainer.appendChild(englishDate);
            dayCell.appendChild(dateContainer);

            if (day === this.currentDate.getDate() && 
                this.displayedMonth === this.currentDate.getMonth() && 
                this.displayedYear === this.currentDate.getFullYear()) {
                dayCell.classList.add('current-day');
            }

            this.calendarDays.appendChild(dayCell);
        }
    }

    updateRashi() {
        this.rashiContainer.innerHTML = calendarData[this.currentLanguage].rashi
            .map(rashi => `
                <div class="rashi-card">
                    <h4>
                        <span>${rashi.name}</span>
                        <span class="english-name">${rashi.nameEnglish}</span>
                    </h4>
                </div>
            `).join('');
    }

    previousMonth() {
        this.displayedMonth--;
        if (this.displayedMonth < 0) {
            this.displayedMonth = 11;
            this.displayedYear--;
        }
        this.updateCalendar();
    }

    nextMonth() {
        this.displayedMonth++;
        if (this.displayedMonth > 11) {
            this.displayedMonth = 0;
            this.displayedYear++;
        }
        this.updateCalendar();
    }
}

// Initialize the calendar when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const calendar = new Calendar();
});
