class BengaliCalendar {
    constructor() {
        this.bengaliMonths = [
            'বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন',
            'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'
        ];
        
        this.englishMonths = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        
        this.bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        
        this.festivals = [
            // Poila Boishakh and New Year
            { date: '2025-04-14', bengaliDate: '1 Boishakh 1432', name: 'পহেলা বৈশাখ (Pohela Boishakh) - Bengali New Year' },
            { date: '2025-01-01', bengaliDate: '17 Poush 1431', name: 'ইংরেজি নববর্ষ (English New Year)' },
            
            // Major Religious Festivals
            { date: '2025-10-23', bengaliDate: '7 Kartik 1432', name: 'দুর্গা পূজা (Durga Puja)' },
            { date: '2025-11-11', bengaliDate: '26 Kartik 1432', name: 'কালী পূজা (Kali Puja)' },
            { date: '2025-09-03', bengaliDate: '18 Bhadra 1432', name: 'জন্মাষ্টমী (Janmashtami)' },
            { date: '2025-10-31', bengaliDate: '15 Kartik 1432', name: 'লক্ষ্মী পূজা (Lakshmi Puja)' },
            { date: '2025-02-14', bengaliDate: '2 Falgun 1431', name: 'সরস্বতী পূজা (Saraswati Puja)' },
            { date: '2025-09-20', bengaliDate: '5 Ashwin 1432', name: 'বিশ্বকর্মা পূজা (Vishwakarma Puja)' },
            { date: '2025-03-25', bengaliDate: '11 Chaitra 1431', name: 'দোল পূর্ণিমা (Dol Purnima)' },
            
            // Seasonal and Cultural Festivals
            { date: '2025-07-15', bengaliDate: '30 Ashar 1432', name: 'রথযাত্রা (Ratha Yatra)' },
            { date: '2025-08-29', bengaliDate: '13 Bhadra 1432', name: 'রক্ষাবন্ধন (Raksha Bandhan)' },
            { date: '2025-01-14', bengaliDate: '30 Poush 1431', name: 'মকর সংক্রান্তি (Makar Sankranti)' },
            { date: '2025-03-15', bengaliDate: '1 Chaitra 1431', name: 'শিবরাত্রি (Shivratri)' },
            
            // Regional Festivals
            { date: '2025-09-17', bengaliDate: '2 Ashwin 1432', name: 'মহালয়া (Mahalaya)' },
            { date: '2025-04-30', bengaliDate: '17 Boishakh 1432', name: 'রবীন্দ্র জয়ন্তী (Rabindra Jayanti)' },
            { date: '2025-05-09', bengaliDate: '26 Boishakh 1432', name: 'নজরুল জয়ন্তী (Nazrul Jayanti)' },
            
            // Harvest Festivals
            { date: '2025-04-14', bengaliDate: '1 Boishakh 1432', name: 'নববর্ষ উৎসব (Nobo Borsho)' },
            { date: '2025-01-15', bengaliDate: '1 Magh 1431', name: 'পুষ পার্বণ (Push Parbon)' },
            
            // Social and National Days
            { date: '2025-02-21', bengaliDate: '9 Falgun 1431', name: 'আন্তর্জাতিক মাতৃভাষা দিবস (International Mother Language Day)' },
            { date: '2025-03-26', bengaliDate: '12 Chaitra 1431', name: 'স্বাধীনতা দিবস (Independence Day)' },
            { date: '2025-12-16', bengaliDate: '1 Poush 1432', name: 'বিজয় দিবস (Victory Day)' },
            
            // Other Important Days
            { date: '2025-05-01', bengaliDate: '18 Boishakh 1432', name: 'মে দিবস (May Day)' },
            { date: '2025-08-15', bengaliDate: '30 Shraban 1432', name: 'জাতীয় শোক দিবস (National Mourning Day)' },
            
            // Modern Cultural Events
            { date: '2025-02-14', bengaliDate: '2 Falgun 1431', name: 'ভালোবাসা দিবস (Valentine\'s Day)' },
            { date: '2025-12-31', bengaliDate: '16 Poush 1432', name: 'নববর্ষের প্রাক্কালে (New Year\'s Eve)' },
            
            // Traditional Rituals
            { date: '2025-07-29', bengaliDate: '13 Shraban 1432', name: 'নাগ পঞ্চমী (Nag Panchami)' },
            { date: '2025-08-22', bengaliDate: '6 Bhadra 1432', name: 'জন্মাষ্টমী (Krishna Janmashtami)' },
            { date: '2025-09-02', bengaliDate: '17 Bhadra 1432', name: 'গণেশ চতুর্থী (Ganesh Chaturthi)' },
            
            // Seasonal Celebrations
            { date: '2025-03-21', bengaliDate: '7 Chaitra 1431', name: 'বসন্ত উৎসব (Spring Festival)' },
            { date: '2025-06-21', bengaliDate: '7 Ashar 1432', name: 'গ্রীষ্ম সংক্রান্তি (Summer Solstice)' },
            
            // Agricultural Festivals
            { date: '2025-11-14', bengaliDate: '29 Kartik 1432', name: 'নবান্ন উৎসব (Nabanna)' },
            { date: '2025-04-15', bengaliDate: '2 Boishakh 1432', name: 'হালখাতা (Hal Khata)' },
            
            // Community Festivals
            { date: '2025-08-11', bengaliDate: '26 Shraban 1432', name: 'ভাই ফোঁটা (Bhai Phonta)' },
            { date: '2025-10-19', bengaliDate: '3 Kartik 1432', name: 'মহা সপ্তমী (Maha Saptami)' },
            { date: '2025-10-20', bengaliDate: '4 Kartik 1432', name: 'মহা অষ্টমী (Maha Ashtami)' },
            { date: '2025-10-21', bengaliDate: '5 Kartik 1432', name: 'মহা নবমী (Maha Navami)' },
            { date: '2025-10-22', bengaliDate: '6 Kartik 1432', name: 'বিজয়া দশমী (Bijoya Dashami)' }
        ];
        
        this.englishFestivals = {
            0: [  // January
                { day: 1, name: 'New Year\'s Day', type: 'english' },
                { day: 26, name: 'Republic Day', type: 'english' }
            ],
            1: [  // February
                { day: 14, name: 'Valentine\'s Day', type: 'english' }
            ],
            2: [  // March
                { day: 8, name: 'International Women\'s Day', type: 'english' },
                { day: 17, name: 'St. Patrick\'s Day', type: 'english' }
            ],
            3: [  // April
                { day: 1, name: 'April Fool\'s Day', type: 'english' },
                { day: 22, name: 'Earth Day', type: 'english' }
            ],
            4: [  // May
                { day: 1, name: 'International Labor Day', type: 'english' },
                { day: 8, name: 'Mother\'s Day', type: 'english' }
            ],
            5: [  // June
                { day: 5, name: 'World Environment Day', type: 'english' },
                { day: 19, name: 'Father\'s Day', type: 'english' }
            ],
            6: [  // July
                { day: 1, name: 'Doctors\' Day', type: 'english' }
            ],
            7: [  // August
                { day: 15, name: 'Independence Day', type: 'english' }
            ],
            8: [  // September
                { day: 5, name: 'Teachers\' Day', type: 'english' }
            ],
            9: [  // October
                { day: 2, name: 'Gandhi Jayanti', type: 'english' },
                { day: 31, name: 'Halloween', type: 'english' }
            ],
            10: [  // November
                { day: 14, name: 'Children\'s Day', type: 'english' }
            ],
            11: [  // December
                { day: 25, name: 'Christmas Day', type: 'english' },
                { day: 31, name: 'New Year\'s Eve', type: 'english' }
            ]
        };

        // Initialize elements
        this.currentMonthBengali = document.getElementById('currentMonthBengali');
        this.currentMonthEnglish = document.getElementById('currentMonthEnglish');
        this.gregorianMonth = document.getElementById('gregorianMonth');
        this.calendarDays = document.getElementById('calendar-days');
        this.festivalsContainer = document.getElementById('festivals');

        // Get current date
        this.currentDate = new Date();
        this.displayedMonth = this.currentDate.getMonth();
        this.displayedYear = this.currentDate.getFullYear();

        // Add event listeners
        document.getElementById('prevMonth').addEventListener('click', () => this.previousMonth());
        document.getElementById('nextMonth').addEventListener('click', () => this.nextMonth());

        // Initialize calendar with current month
        this.updateCalendar();
    }

    // Convert English number to Bengali
    toBengaliNumber(num) {
        return num.toString().split('').map(digit => this.bengaliDigits[digit]).join('');
    }

    // Get Bengali month based on English date
    getBengaliMonth(date) {
        // This is a simplified conversion. You might need a more accurate algorithm
        let month = (date.getMonth() + 3) % 12;
        return this.bengaliMonths[month];
    }

    // Get Bengali date based on English date
    getBengaliDate(date) {
        // This is a simplified conversion. You might need a more accurate algorithm
        let day = date.getDate() + 14;
        if (day > 30) day = day - 30;
        return this.toBengaliNumber(day);
    }

    updateCalendar() {
        const firstDay = new Date(this.displayedYear, this.displayedMonth, 1);
        const lastDay = new Date(this.displayedYear, this.displayedMonth + 1, 0);
        const startingDay = firstDay.getDay();
        const totalDays = lastDay.getDate();

        // Update month displays
        const currentBengaliMonth = this.getBengaliMonth(firstDay);
        this.currentMonthBengali.textContent = currentBengaliMonth;
        this.currentMonthEnglish.textContent = this.englishMonths[this.displayedMonth];
        this.gregorianMonth.textContent = `${this.displayedYear}`;

        // Clear previous calendar
        this.calendarDays.innerHTML = '';

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-day empty';
            this.calendarDays.appendChild(emptyCell);
        }

        // Add days of the month
        for (let day = 1; day <= totalDays; day++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'calendar-day';

            // Check if it's today
            const currentDate = new Date();
            if (day === currentDate.getDate() && 
                this.displayedMonth === currentDate.getMonth() && 
                this.displayedYear === currentDate.getFullYear()) {
                dayCell.classList.add('today');
            }

            // Create date for this day
            const thisDate = new Date(this.displayedYear, this.displayedMonth, day);
            const bengaliMonth = this.getBengaliMonth(thisDate);

            // Add Bengali date with month
            const bengaliDateDiv = document.createElement('div');
            bengaliDateDiv.className = 'bengali-date';
            bengaliDateDiv.innerHTML = `
                <span class="date-number">${this.toBengaliNumber(day)}</span>
                <span class="month-name">${bengaliMonth}</span>
            `;

            // Add English date
            const englishDateDiv = document.createElement('div');
            englishDateDiv.className = 'english-date';
            englishDateDiv.textContent = day;

            dayCell.appendChild(bengaliDateDiv);
            dayCell.appendChild(englishDateDiv);

            this.calendarDays.appendChild(dayCell);
        }

        // Update festivals
        this.displayFestivals();
    }

    displayFestivals() {
        this.festivalsContainer.innerHTML = '';

        const currentBengaliMonth = this.getBengaliMonth(new Date(this.displayedYear, this.displayedMonth, 1));
        const currentFilter = document.querySelector('.category-filter button.active')?.dataset.category || 'all';

        // Get festivals for the current month
        const monthFestivals = this.festivals.filter(festival => {
            const festivalDate = new Date(festival.date);
            return festivalDate.getMonth() === this.displayedMonth && festivalDate.getFullYear() === this.displayedYear;
        });

        // Get English festivals
        const englishFestivals = this.englishFestivals[this.displayedMonth] || [];

        // Combine and sort festivals
        const allFestivals = [...monthFestivals, ...englishFestivals]
            .sort((a, b) => {
                const dateA = a.date ? new Date(a.date) : new Date(this.displayedYear, this.displayedMonth, a.day);
                const dateB = b.date ? new Date(b.date) : new Date(this.displayedYear, this.displayedMonth, b.day);
                return dateA - dateB;
            });

        // Filter festivals by category
        const filteredFestivals = currentFilter === 'all' 
            ? allFestivals 
            : allFestivals.filter(festival => this.getFestivalCategory(festival.name) === currentFilter);

        // Display festivals
        filteredFestivals.forEach(festival => {
            const festivalDiv = document.createElement('div');
            const category = this.getFestivalCategory(festival.name);
            festivalDiv.className = `festival ${category}`;
            
            const date = festival.date ? new Date(festival.date) : new Date(this.displayedYear, this.displayedMonth, festival.day);
            const bengaliDate = festival.bengaliDate || this.getBengaliDate(date);
            
            festivalDiv.innerHTML = `
                <div class="festival-date">
                    <span class="bengali-date">${this.toBengaliNumber(date.getDate())}</span>
                    <span class="english-date">${bengaliDate}</span>
                </div>
                <div class="festival-name">
                    ${festival.name}
                </div>
            `;
            this.festivalsContainer.appendChild(festivalDiv);
        });
    }

    getFestivalCategory(festivalName) {
        const lowerName = festivalName.toLowerCase();
        if (lowerName.includes('পূজা') || lowerName.includes('puja') || 
            lowerName.includes('জন্মাষ্টমী') || lowerName.includes('janmashtami') ||
            lowerName.includes('শিবরাত্রি') || lowerName.includes('shivratri')) {
            return 'religious';
        } else if (lowerName.includes('দিবস') || lowerName.includes('day') ||
                   lowerName.includes('স্বাধীনতা') || lowerName.includes('independence') ||
                   lowerName.includes('বিজয়') || lowerName.includes('victory')) {
            return 'national';
        }
        return 'cultural';
    }

    initializeEventListeners() {
        // Add event listeners
        document.getElementById('prevMonth').addEventListener('click', () => this.previousMonth());
        document.getElementById('nextMonth').addEventListener('click', () => this.nextMonth());

        // Add festival category filter listeners
        const categoryButtons = document.querySelectorAll('.category-filter button');
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                this.displayFestivals();
            });
        });
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
    const calendar = new BengaliCalendar();
    calendar.initializeEventListeners();
});
