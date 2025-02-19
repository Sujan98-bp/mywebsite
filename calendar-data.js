const calendarData = {
    bengali: {
        name: 'বাংলা পঞ্জিকা',
        nameEnglish: 'Bengali Calendar',
        months: [
            'বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন',
            'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'
        ],
        weekdays: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি', 'শুক্র', 'শনি'],
        digits: ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'],
        rashi: [
            { name: 'মেষ', nameEnglish: 'Mesh (Aries)' },
            { name: 'বৃষ', nameEnglish: 'Brish (Taurus)' },
            { name: 'মিথুন', nameEnglish: 'Mithun (Gemini)' },
            { name: 'কর্কট', nameEnglish: 'Karkat (Cancer)' },
            { name: 'সিংহ', nameEnglish: 'Singha (Leo)' },
            { name: 'কন্যা', nameEnglish: 'Kanya (Virgo)' },
            { name: 'তুলা', nameEnglish: 'Tula (Libra)' },
            { name: 'বৃশ্চিক', nameEnglish: 'Brishchik (Scorpio)' },
            { name: 'ধনু', nameEnglish: 'Dhanu (Sagittarius)' },
            { name: 'মকর', nameEnglish: 'Makar (Capricorn)' },
            { name: 'কুম্ভ', nameEnglish: 'Kumbha (Aquarius)' },
            { name: 'মীন', nameEnglish: 'Meen (Pisces)' }
        ]
    },
    odia: {
        name: 'ଓଡ଼ିଆ ପଞ୍ଜିକା',
        nameEnglish: 'Odia Calendar',
        months: [
            'ବୈଶାଖ', 'ଜ୍ୟେଷ୍ଠ', 'ଆଷାଢ଼', 'ଶ୍ରାବଣ', 'ଭାଦ୍ରବ', 'ଆଶ୍ୱିନ',
            'କାର୍ତ୍ତିକ', 'ମାର୍ଗଶିର', 'ପୌଷ', 'ମାଘ', 'ଫାଲ୍ଗୁନ', 'ଚୈତ୍ର'
        ],
        weekdays: ['ରବିବାର', 'ସୋମବାର', 'ମଙ୍ଗଳବାର', 'ବୁଧବାର', 'ଗୁରୁବାର', 'ଶୁକ୍ରବାର', 'ଶନିବାର'],
        digits: ['୦', '୧', '୨', '୩', '୪', '୫', '୬', '୭', '୮', '୯'],
        rashi: [
            { name: 'ମେଷ', nameEnglish: 'Mesha (Aries)' },
            { name: 'ବୃଷ', nameEnglish: 'Brusha (Taurus)' },
            { name: 'ମିଥୁନ', nameEnglish: 'Mithuna (Gemini)' },
            { name: 'କର୍କଟ', nameEnglish: 'Karkata (Cancer)' },
            { name: 'ସିଂହ', nameEnglish: 'Simha (Leo)' },
            { name: 'କନ୍ୟା', nameEnglish: 'Kanya (Virgo)' },
            { name: 'ତୁଳା', nameEnglish: 'Tula (Libra)' },
            { name: 'ବୃଶ୍ଚିକ', nameEnglish: 'Bruschika (Scorpio)' },
            { name: 'ଧନୁ', nameEnglish: 'Dhanu (Sagittarius)' },
            { name: 'ମକର', nameEnglish: 'Makara (Capricorn)' },
            { name: 'କୁମ୍ଭ', nameEnglish: 'Kumbha (Aquarius)' },
            { name: 'ମୀନ', nameEnglish: 'Meena (Pisces)' }
        ]
    },
    kannada: {
        name: 'ಕನ್ನಡ ಪಂಚಾಂಗ',
        nameEnglish: 'Kannada Calendar',
        months: [
            'ಚೈತ್ರ', 'ವೈಶಾಖ', 'ಜ್ಯೇಷ್ಠ', 'ಆಷಾಢ', 'ಶ್ರಾವಣ', 'ಭಾದ್ರಪದ',
            'ಆಶ್ವಯುಜ', 'ಕಾರ್ತಿಕ', 'ಮಾರ್ಗಶಿರ', 'ಪುಷ್ಯ', 'ಮಾಘ', 'ಫಾಲ್ಗುಣ'
        ],
        weekdays: ['ಭಾನುವಾರ', 'ಸೋಮವಾರ', 'ಮಂಗಳವಾರ', 'ಬುಧವಾರ', 'ಗುರುವಾರ', 'ಶುಕ್ರವಾರ', 'ಶನಿವಾರ'],
        digits: ['೦', '೧', '೨', '೩', '೪', '೫', '೬', '೭', '೮', '೯'],
        rashi: [
            { name: 'ಮೇಷ', nameEnglish: 'Mesha (Aries)' },
            { name: 'ವೃಷಭ', nameEnglish: 'Vrushabha (Taurus)' },
            { name: 'ಮಿಥುನ', nameEnglish: 'Mithuna (Gemini)' },
            { name: 'ಕರ್ಕಾಟಕ', nameEnglish: 'Karkataka (Cancer)' },
            { name: 'ಸಿಂಹ', nameEnglish: 'Simha (Leo)' },
            { name: 'ಕನ್ಯಾ', nameEnglish: 'Kanya (Virgo)' },
            { name: 'ತುಲಾ', nameEnglish: 'Tula (Libra)' },
            { name: 'ವೃಶ್ಚಿಕ', nameEnglish: 'Vrushchika (Scorpio)' },
            { name: 'ಧನಸ್ಸು', nameEnglish: 'Dhanassu (Sagittarius)' },
            { name: 'ಮಕರ', nameEnglish: 'Makara (Capricorn)' },
            { name: 'ಕುಂಭ', nameEnglish: 'Kumbha (Aquarius)' },
            { name: 'ಮೀನ', nameEnglish: 'Meena (Pisces)' }
        ]
    },
    tamil: {
        name: 'தமிழ் பஞ்சாங்கம்',
        nameEnglish: 'Tamil Calendar',
        months: [
            'சித்திரை', 'வைகாசி', 'ஆனி', 'ஆடி', 'ஆவணி', 'புரட்டாசி',
            'ஐப்பசி', 'கார்த்திகை', 'மார்கழி', 'தை', 'மாசி', 'பங்குனி'
        ],
        weekdays: ['ஞாயிறு', 'திங்கள்', 'செவ்வாய்', 'புதன்', 'வியாழன்', 'வெள்ளி', 'சனி'],
        digits: ['௦', '௧', '௨', '௩', '௪', '௫', '௬', '௭', '௮', '௯'],
        rashi: [
            { name: 'மேஷம்', nameEnglish: 'Mesham (Aries)' },
            { name: 'ரிஷபம்', nameEnglish: 'Rishabam (Taurus)' },
            { name: 'மிதுனம்', nameEnglish: 'Mithunam (Gemini)' },
            { name: 'கடகம்', nameEnglish: 'Kadagam (Cancer)' },
            { name: 'சிம்மம்', nameEnglish: 'Simmam (Leo)' },
            { name: 'கன்னி', nameEnglish: 'Kanni (Virgo)' },
            { name: 'துலாம்', nameEnglish: 'Thulam (Libra)' },
            { name: 'விருச்சிகம்', nameEnglish: 'Viruchigam (Scorpio)' },
            { name: 'தனுசு', nameEnglish: 'Dhanusu (Sagittarius)' },
            { name: 'மகரம்', nameEnglish: 'Magaram (Capricorn)' },
            { name: 'கும்பம்', nameEnglish: 'Kumbam (Aquarius)' },
            { name: 'மீனம்', nameEnglish: 'Meenam (Pisces)' }
        ]
    },
    malayalam: {
        name: 'മലയാളം പഞ്ചാംഗം',
        nameEnglish: 'Malayalam Calendar',
        months: [
            'മേടം', 'ഇടവം', 'മിഥുനം', 'കർക്കടകം', 'ചിങ്ങം', 'കന്നി',
            'തുലാം', 'വൃശ്ചികം', 'ധനു', 'മകരം', 'കുംഭം', 'മീനം'
        ],
        weekdays: ['ഞായർ', 'തിങ്കൾ', 'ചൊവ്വ', 'ബുധൻ', 'വ്യാഴം', 'വെള്ളി', 'ശനി'],
        digits: ['൦', '൧', '൨', '൩', '൪', '൫', '൬', '൭', '൮', '൯'],
        rashi: [
            { name: 'മേടം', nameEnglish: 'Medam (Aries)' },
            { name: 'ഇടവം', nameEnglish: 'Idavam (Taurus)' },
            { name: 'മിഥുനം', nameEnglish: 'Mithunam (Gemini)' },
            { name: 'കർക്കടകം', nameEnglish: 'Karkkadakam (Cancer)' },
            { name: 'ചിങ്ങം', nameEnglish: 'Chingam (Leo)' },
            { name: 'കന്നി', nameEnglish: 'Kanni (Virgo)' },
            { name: 'തുലാം', nameEnglish: 'Thulam (Libra)' },
            { name: 'വൃശ്ചികം', nameEnglish: 'Vrischikam (Scorpio)' },
            { name: 'ധനു', nameEnglish: 'Dhanu (Sagittarius)' },
            { name: 'മകരം', nameEnglish: 'Makaram (Capricorn)' },
            { name: 'കുംഭം', nameEnglish: 'Kumbham (Aquarius)' },
            { name: 'മീനം', nameEnglish: 'Meenam (Pisces)' }
        ]
    },
    hindi: {
        name: 'हिंदी पंचांग',
        nameEnglish: 'Hindi Calendar',
        months: [
            'चैत्र', 'वैशाख', 'ज्येष्ठ', 'आषाढ़', 'श्रावण', 'भाद्रपद',
            'आश्विन', 'कार्तिक', 'मार्गशीर्ष', 'पौष', 'माघ', 'फाल्गुन'
        ],
        weekdays: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
        digits: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
        rashi: [
            { name: 'मेष', nameEnglish: 'Mesh (Aries)' },
            { name: 'वृषभ', nameEnglish: 'Vrishabh (Taurus)' },
            { name: 'मिथुन', nameEnglish: 'Mithun (Gemini)' },
            { name: 'कर्क', nameEnglish: 'Kark (Cancer)' },
            { name: 'सिंह', nameEnglish: 'Singh (Leo)' },
            { name: 'कन्या', nameEnglish: 'Kanya (Virgo)' },
            { name: 'तुला', nameEnglish: 'Tula (Libra)' },
            { name: 'वृश्चिक', nameEnglish: 'Vrishchik (Scorpio)' },
            { name: 'धनु', nameEnglish: 'Dhanu (Sagittarius)' },
            { name: 'मकर', nameEnglish: 'Makar (Capricorn)' },
            { name: 'कुंभ', nameEnglish: 'Kumbh (Aquarius)' },
            { name: 'मीन', nameEnglish: 'Meen (Pisces)' }
        ]
    },
    rajasthani: {
        name: 'राजस्थानी पंचांग',
        nameEnglish: 'Rajasthani Calendar',
        months: [
            'चैत्र', 'वैशाख', 'जेठ', 'आषाढ़', 'सावण', 'भादवा',
            'आसोज', 'कारतिक', 'मारगसर', 'पोष', 'माघ', 'फागुण'
        ],
        weekdays: ['रविवार', 'सोमवार', 'मंगळवार', 'बुधवार', 'गुरुवार', 'सुक्रवार', 'सनीवार'],
        digits: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
        rashi: [
            { name: 'मेष', nameEnglish: 'Mesh (Aries)' },
            { name: 'वृष', nameEnglish: 'Vrishabh (Taurus)' },
            { name: 'मिथुन', nameEnglish: 'Mithun (Gemini)' },
            { name: 'कर्क', nameEnglish: 'Kark (Cancer)' },
            { name: 'सिंह', nameEnglish: 'Singh (Leo)' },
            { name: 'कन्या', nameEnglish: 'Kanya (Virgo)' },
            { name: 'तुला', nameEnglish: 'Tula (Libra)' },
            { name: 'वृश्चिक', nameEnglish: 'Vrishchik (Scorpio)' },
            { name: 'धनु', nameEnglish: 'Dhanu (Sagittarius)' },
            { name: 'मकर', nameEnglish: 'Makar (Capricorn)' },
            { name: 'कुंभ', nameEnglish: 'Kumbh (Aquarius)' },
            { name: 'मीन', nameEnglish: 'Meen (Pisces)' }
        ]
    }
};
