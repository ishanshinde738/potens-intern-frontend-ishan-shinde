export const mockAnomalies = [
  {
    id: 1,
    severity: 'high',
    detectedAt: '08:12 AM',
    metric: { en: 'Machine 3 - Vibration', hi: 'मशीन 3 - कंपन' },
    description: {
      en: 'Vibration levels 22% above threshold on Line 3 press.',
      hi: 'लाइन 3 प्रेस पर कंपन स्तर सीमा से 22% अधिक है।',
    },
  },
  {
    id: 2,
    severity: 'high',
    detectedAt: '08:40 AM',
    metric: { en: 'Batch #221 - Cpk', hi: 'बैच #221 - Cpk' },
    description: {
      en: 'Process capability index dropped below 1.33 target.',
      hi: 'प्रक्रिया क्षमता सूचकांक 1.33 लक्ष्य से नीचे गिर गया।',
    },
  },
  {
    id: 3,
    severity: 'medium',
    detectedAt: '09:05 AM',
    metric: { en: 'Line 1 - Temperature', hi: 'लाइन 1 - तापमान' },
    description: {
      en: 'Furnace temperature drifting 4°C above set point.',
      hi: 'भट्टी का तापमान निर्धारित बिंदु से 4°C अधिक बढ़ रहा है।',
    },
  },
  {
    id: 4,
    severity: 'medium',
    detectedAt: '09:20 AM',
    metric: { en: 'Conveyor 2 - Speed', hi: 'कन्वेयर 2 - गति' },
    description: {
      en: 'Belt speed fluctuating outside normal variance band.',
      hi: 'बेल्ट की गति सामान्य सीमा से बाहर उतार-चढ़ाव कर रही है।',
    },
  },
  {
    id: 5,
    severity: 'low',
    detectedAt: '09:35 AM',
    metric: { en: 'QA Station 4 - Reject Rate', hi: 'क्यूए स्टेशन 4 - अस्वीकृति दर' },
    description: {
      en: 'Reject rate marginally elevated, within tolerance.',
      hi: 'अस्वीकृति दर मामूली रूप से बढ़ी है, सहनशीलता सीमा के भीतर।',
    },
  },
  {
    id: 6,
    severity: 'low',
    detectedAt: '09:50 AM',
    metric: { en: 'Warehouse Sensor 7', hi: 'गोदाम सेंसर 7' },
    description: {
      en: 'Intermittent signal dropout, no action required yet.',
      hi: 'रुक-रुक कर सिग्नल कट रहा है, अभी कोई कार्रवाई आवश्यक नहीं।',
    },
  },
]