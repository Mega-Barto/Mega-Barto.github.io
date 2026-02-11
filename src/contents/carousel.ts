export interface CarouselItem {
    name: string;
    image: string;
    url: string;
}

// Estrategia: calcula cuántas repeticiones necesita el grupo para llenar bien el carrusel
// Si hay pocos items, se duplican más veces para mejor fluidez visual
export const calculateRepetitions = (itemCount: number): number => {
    if (itemCount <= 3) return 4; // Muy pocos items, duplicar 4 veces
    if (itemCount <= 5) return 3; // Pocos items, duplicar 3 veces
    return 2; // Items suficientes, solo 2 repeticiones
};

// Calcula el gap entre items: menos items = más separación
export const calculateGap = (itemCount: number): string => {
    if (itemCount <= 3) return '4rem'; // Pocos items, mucha separación
    if (itemCount <= 5) return '1em';   // Items medios, separación media
    return '0.65em';                    // Muchos items, separación estándar
};

export const getLanguages = (): CarouselItem[] => [
    {
        name: "Python",
        image: "src/assets/CarouselImages/python.webp",
        url: "https://www.python.org/",
    },
    {
        name: "JavaScript",
        image: "src/assets/CarouselImages/javascript.webp",
        url: "https://www.javascript.com/",
    },
    {
        name: "TypeScript",
        image: "src/assets/CarouselImages/typescript.webp",
        url: "https://www.typescriptlang.org/",
    },
    {
        name: "Java",
        image: "src/assets/CarouselImages/java.webp",
        url: "https://www.java.com/",
    },
];

export const getFrameworks = (): CarouselItem[] => [
    {
        name: "React",
        image: "src/assets/CarouselImages/react.webp",
        url: "https://reactjs.org/",
    },
    {
        name: "Next.JS",
        image: "src/assets/CarouselImages/nextjs.webp",
        url: "https://nextjs.org/",
    },
    {
        name: "Flutter",
        image: "src/assets/CarouselImages/flutter.webp",
        url: "https://flutter.dev/",
    },
    {
        name: "Django Rest Framework",
        image: "src/assets/CarouselImages/django.webp",
        url: "https://www.django-rest-framework.org/",
    },
    {
        name: "Flask",
        image: "src/assets/CarouselImages/flask.webp",
        url: "https://flask.palletsprojects.com/",
    },
    {
        name: "FastAPI",
        image: "src/assets/CarouselImages/fastapi.webp",
        url: "https://fastapi.tiangolo.com/",
    },
    {
        name: "Vite",
        image: "src/assets/CarouselImages/vite.webp",
        url: "https://vitejs.dev/",
    },
    {
        name: "Electron",
        image: "src/assets/CarouselImages/electron.webp",
        url: "https://www.electronjs.org/",
    },
    {
        name: "Selenium",
        image: "src/assets/CarouselImages/selenium.webp",
        url: "https://www.selenium.dev/",
    },
    {
        name: "Appium",
        image: "src/assets/CarouselImages/appium.webp",
        url: "https://appium.io/",
    },
    {
        name: "WebDriverIO",
        image: "src/assets/CarouselImages/webdriverio.webp",
        url: "https://webdriver.io/",
    },
    {
        name: "Playwright",
        image: "src/assets/CarouselImages/playwright.webp",
        url: "https://playwright.dev/",
    },
    {
        name: "Puppeteer",
        image: "src/assets/CarouselImages/puppeteer.webp",
        url: "https://pptr.dev/",
    },
    {
        name: "Cypress",
        image: "src/assets/CarouselImages/cypress.webp",
        url: "https://www.cypress.io/",
    },
];

export const getServices = (): CarouselItem[] => [
    {
        name: "Firebase",
        image: "src/assets/CarouselImages/firebase.webp",
        url: "https://firebase.google.com/",
    },
    {
        name: "Supabase",
        image: "src/assets/CarouselImages/supabase.webp",
        url: "https://supabase.com/",
    },
    {
        name: "Digital Ocean",
        image: "src/assets/CarouselImages/digitalocean.webp",
        url: "https://www.digitalocean.com/",
    },
    {
        name: "PostgreSQL",
        image: "src/assets/CarouselImages/postgresql.webp",
        url: "https://www.postgresql.org/",
    },
    {
        name: "MongoDB",
        image: "src/assets/CarouselImages/mongodb.webp",
        url: "https://www.mongodb.com/",
    },
    {
        name: "MySQL",
        image: "src/assets/CarouselImages/mysql.webp",
        url: "https://www.mysql.com/",
    },
    {
        name: "PythonAnywhere",
        image: "src/assets/CarouselImages/pythonanywhere.webp",
        url: "https://www.pythonanywhere.com/",
    },
];