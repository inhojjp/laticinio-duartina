import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.duartina.laticinio',
  appName: 'Laticínios Duartina',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;