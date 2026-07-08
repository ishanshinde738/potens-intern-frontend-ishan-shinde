export const mockAnomalies = [
  {
    id: 1,
    metric: 'Machine 3 - Vibration',
    severity: 'high',
    detectedAt: '08:12 AM',
    description: 'Vibration levels 22% above threshold on Line 3 press.',
  },
  {
    id: 2,
    metric: 'Batch #221 - Cpk',
    severity: 'high',
    detectedAt: '08:40 AM',
    description: 'Process capability index dropped below 1.33 target.',
  },
  {
    id: 3,
    metric: 'Line 1 - Temperature',
    severity: 'medium',
    detectedAt: '09:05 AM',
    description: 'Furnace temperature drifting 4°C above set point.',
  },
  {
    id: 4,
    metric: 'Conveyor 2 - Speed',
    severity: 'medium',
    detectedAt: '09:20 AM',
    description: 'Belt speed fluctuating outside normal variance band.',
  },
  {
    id: 5,
    metric: 'QA Station 4 - Reject Rate',
    severity: 'low',
    detectedAt: '09:35 AM',
    description: 'Reject rate marginally elevated, within tolerance.',
  },
  {
    id: 6,
    metric: 'Warehouse Sensor 7',
    severity: 'low',
    detectedAt: '09:50 AM',
    description: 'Intermittent signal dropout, no action required yet.',
  },
]