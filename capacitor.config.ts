import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'zm.gov.wpho.epitracker',
  appName: 'EPI Child Tracker',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  android: {
    backgroundColor: '#0F6E56'
  }
};

export default config;
