import datetime

class BengaliCalendar:
    # Bengali month names
    BENGALI_MONTHS = [
        'বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন',
        'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'
    ]

    # Bengali digits
    BENGALI_DIGITS = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']

    @staticmethod
    def to_bengali_number(number):
        """Convert English numbers to Bengali numbers"""
        return ''.join(BengaliCalendar.BENGALI_DIGITS[int(d)] for d in str(number))

    @staticmethod
    def get_bengali_date(date=None):
        """Convert Gregorian date to Bengali date"""
        if date is None:
            date = datetime.datetime.now()

        # Bengali calendar starts from mid-April
        if date.month < 4 or (date.month == 4 and date.day < 14):
            year = date.year - 594
        else:
            year = date.year - 593

        # Calculate the Bengali month
        if date.month == 4 and date.day >= 14:
            month_index = 0
            day = date.day - 13
        elif date.month == 5:
            month_index = 0
            day = date.day + 17
        elif date.month == 6:
            month_index = 1
            day = date.day + 17
        elif date.month == 7:
            month_index = 2
            day = date.day + 16
        elif date.month == 8:
            month_index = 3
            day = date.day + 16
        elif date.month == 9:
            month_index = 4
            day = date.day + 15
        elif date.month == 10:
            month_index = 5
            day = date.day + 15
        elif date.month == 11:
            month_index = 6
            day = date.day + 14
        elif date.month == 12:
            month_index = 7
            day = date.day + 14
        elif date.month == 1:
            month_index = 8
            day = date.day + 14
        elif date.month == 2:
            month_index = 9
            day = date.day + 13
        elif date.month == 3:
            month_index = 10
            day = date.day + 14
        else:  # April 1-13
            month_index = 11
            day = date.day + 17

        # Adjust for month overflow
        if month_index == 0 and day > 31:
            month_index = 1
            day -= 31
        elif month_index in [1, 2, 3, 4, 5] and day > 31:
            month_index += 1
            day -= 31
        elif month_index in [6, 7, 8, 9, 10] and day > 30:
            month_index += 1
            day -= 30
        elif month_index == 11 and day > 30:
            month_index = 0
            day -= 30

        return {
            'year': year,
            'month': BengaliCalendar.BENGALI_MONTHS[month_index],
            'day': day,
            'bengali_year': BengaliCalendar.to_bengali_number(year),
            'bengali_day': BengaliCalendar.to_bengali_number(day)
        }

def main():
    # Get current date
    today = datetime.datetime.now()
    bengali_date = BengaliCalendar.get_bengali_date(today)
    
    print("\nবাংলা তারিখ (Bengali Date):")
    print(f"{bengali_date['bengali_day']} {bengali_date['month']}, {bengali_date['bengali_year']} বঙ্গাব্দ")
    print(f"\nIn English:")
    print(f"{bengali_date['day']} {bengali_date['month']}, {bengali_date['year']} BE")

if __name__ == "__main__":
    main()
