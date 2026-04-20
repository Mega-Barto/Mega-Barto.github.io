import type { CarouselItemDef } from './types';

export const calculateRepetitions = (itemCount: number): number => {
  if (itemCount <= 3) return 4;
  if (itemCount <= 5) return 3;
  return 2;
};

export const calculateGap = (itemCount: number): string => {
  if (itemCount <= 3) return '4rem';
  if (itemCount <= 5) return '1em';
  return '0.65em';
};

export const LANGUAGE_CAROUSEL: CarouselItemDef[] = [
  { name: 'Python', imageFile: 'python.webp', url: 'https://www.python.org/' },
  { name: 'JavaScript', imageFile: 'javascript.webp', url: 'https://www.javascript.com/' },
  { name: 'TypeScript', imageFile: 'typescript.webp', url: 'https://www.typescriptlang.org/' },
  { name: 'Java', imageFile: 'java.webp', url: 'https://www.java.com/' },
];

export const FRAMEWORK_CAROUSEL: CarouselItemDef[] = [
  { name: 'React', imageFile: 'react.webp', url: 'https://reactjs.org/' },
  { name: 'Next.JS', imageFile: 'nextjs.webp', url: 'https://nextjs.org/' },
  { name: 'Flutter', imageFile: 'flutter.webp', url: 'https://flutter.dev/' },
  {
    name: 'Django Rest Framework',
    imageFile: 'django.webp',
    url: 'https://www.django-rest-framework.org/',
  },
  { name: 'Flask', imageFile: 'flask.webp', url: 'https://flask.palletsprojects.com/' },
  { name: 'FastAPI', imageFile: 'fastapi.webp', url: 'https://fastapi.tiangolo.com/' },
  { name: 'Vite', imageFile: 'vite.webp', url: 'https://vitejs.dev/' },
  { name: 'Electron', imageFile: 'electron.webp', url: 'https://www.electronjs.org/' },
  { name: 'Selenium', imageFile: 'selenium.webp', url: 'https://www.selenium.dev/' },
  { name: 'Appium', imageFile: 'appium.webp', url: 'https://appium.io/' },
  { name: 'WebDriverIO', imageFile: 'webdriverio.webp', url: 'https://webdriver.io/' },
  { name: 'Playwright', imageFile: 'playwright.webp', url: 'https://playwright.dev/' },
  { name: 'Puppeteer', imageFile: 'puppeteer.webp', url: 'https://pptr.dev/' },
  { name: 'Cypress', imageFile: 'cypress.webp', url: 'https://www.cypress.io/' },
];

export const SERVICE_CAROUSEL: CarouselItemDef[] = [
  { name: 'Firebase', imageFile: 'firebase.webp', url: 'https://firebase.google.com/' },
  { name: 'Supabase', imageFile: 'supabase.webp', url: 'https://supabase.com/' },
  { name: 'Digital Ocean', imageFile: 'digitalocean.webp', url: 'https://www.digitalocean.com/' },
  { name: 'PostgreSQL', imageFile: 'postgreSQL.webp', url: 'https://www.postgresql.org/' },
  { name: 'MongoDB', imageFile: 'mongodb.webp', url: 'https://www.mongodb.com/' },
  { name: 'MySQL', imageFile: 'mysql.webp', url: 'https://www.mysql.com/' },
  {
    name: 'PythonAnywhere',
    imageFile: 'pythonanywhere.webp',
    url: 'https://www.pythonanywhere.com/',
  },
];
