document.addEventListener('DOMContentLoaded', function() {
    // Nakshatra data
    const nakshatras = [
        { name: 'অশ্বিনী', duration: '2:30' },
        { name: 'ভরণী', duration: '2:15' },
        { name: 'কৃত্তিকা', duration: '2:45' },
        { name: 'রোহিণী', duration: '2:30' },
        { name: 'মৃগশিরা', duration: '2:15' },
        { name: 'আর্দ্রা', duration: '2:00' },
        { name: 'পুনর্বসু', duration: '2:45' },
        { name: 'পুষ্যা', duration: '2:30' },
        { name: 'অশ্লেষা', duration: '2:15' },
        { name: 'মঘা', duration: '2:30' },
        { name: 'পূর্বফাল্গুনী', duration: '2:15' },
        { name: 'উত্তরফাল্গুনী', duration: '2:00' },
        { name: 'হস্তা', duration: '2:45' },
        { name: 'চিত্রা', duration: '2:30' },
        { name: 'স্বাতী', duration: '2:15' },
        { name: 'বিশাখা', duration: '2:30' },
        { name: 'অনুরাধা', duration: '2:15' },
        { name: 'জ্যৈষ্ঠা', duration: '2:00' },
        { name: 'মূলা', duration: '2:45' },
        { name: 'পূর্বাষাঢ়া', duration: '2:30' },
        { name: 'উত্তরাষাঢ়া', duration: '2:15' },
        { name: 'শ্রবণা', duration: '2:30' },
        { name: 'ধনিষ্ঠা', duration: '2:15' },
        { name: 'শতভিষা', duration: '2:00' },
        { name: 'পূর্বভাদ্রপদ', duration: '2:45' },
        { name: 'উত্তরভাদ্রপদ', duration: '2:30' },
        { name: 'রেবতী', duration: '2:15' }
    ];

    // Function to update Nakshatra list
    function updateNakshatraList() {
        const nakshatraList = document.getElementById('nakshatraList');
        const currentTime = new Date();
        let startTime = new Date();
        startTime.setHours(6, 0, 0); // Start from 6 AM

        nakshatraList.innerHTML = '';
        nakshatras.forEach((nakshatra, index) => {
            const [hours, minutes] = nakshatra.duration.split(':').map(Number);
            const endTime = new Date(startTime.getTime() + (hours * 60 + minutes) * 60000);
            
            const timeString = `${formatTime(startTime)} - ${formatTime(endTime)}`;
            const isActive = currentTime >= startTime && currentTime < endTime;
            
            const li = document.createElement('li');
            li.className = isActive ? 'active' : '';
            li.innerHTML = `
                <span class="nakshatra-name">${nakshatra.name}</span>
                <span class="nakshatra-time">${timeString}</span>
            `;
            nakshatraList.appendChild(li);

            if (isActive) {
                document.getElementById('currentNakshatra').textContent = nakshatra.name;
                document.querySelector('.nakshatra-time').textContent = `সময়: ${timeString}`;
            }

            startTime = endTime;
        });
    }

    // Helper function to format time
    function formatTime(date) {
        return date.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit', 
            hour12: true 
        });
    }

    // Update Nakshatra information every minute
    updateNakshatraList();
    setInterval(updateNakshatraList, 60000);
});
