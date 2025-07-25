<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">MegaBarto's Portfolio</h3>

  <p align="center">
    A simple project for show who I am and what kind of things I can make.
    <br />
    <a href="https://github.com/mega-barto/mega-barto.github.io"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.megabarto.rocks">View Page</a>
    ·
    <a href="https://github.com/mega-barto/mega-barto.github.io/issues">Report Bug</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#project-architecture">Project Architecture</a>
      <ul>
        <li><a href="#folder-structure">Folder Structure</a></li>
        <li><a href="#key-features">Key Features</a></li>
        <li><a href="#best-practices">Best Practices</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project
This portfolio is a showcase of my professional skills and technical expertise, built using cutting-edge technologies such as React, TypeScript, Vite, and Bun. 

The main goal of this project is to highlight my capabilities as a professional, demonstrating my ability to create modern and efficient web applications. Through this webpage, I aim to provide potential employers and collaborators with a comprehensive view of my work and the value I can bring to their projects.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![Notion][Notion.so]][Notion-url]
[![React][React.js]][React-url]
[![TypeScript][TypeScript.js]][TypeScript-url]
[![Vite][Vite.js]][Vite-url]
[![Bun][Bun.js]][Bun-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROJECT ARCHITECTURE -->

## Project Architecture

### Folder Structure

```
src/
├── components/           # Reusable UI components
│   ├── index.ts         # Barrel export for clean imports
│   ├── Header/          # Navigation header component
│   ├── Footer/          # Site footer component
│   ├── LanguageToggle/  # Internationalization toggle
│   └── sections/        # Page sections
│       ├── index.ts     # Section exports
│       ├── AutobiographySection/
│       └── ProjectsSection/
├── contents/            # Content data and configuration
│   ├── index.ts        # Content exports
│   ├── projects.ts     # Project data and interfaces
│   ├── navigation.ts   # Navigation items configuration
│   └── footer.ts       # Footer sections configuration
├── config/              # Application configuration
│   ├── index.ts        # Main configuration exports
│   ├── colors.ts       # Color palette and theme
│   ├── sections.ts     # Section configuration
│   └── socialLinks.ts  # Social media links config
├── i18n/               # Internationalization
│   ├── index.ts        # i18n setup and configuration
│   └── locales/        # Translation files
│       ├── en.json     # English translations
│       └── es.json     # Spanish translations
└── assets/             # Static assets
    └── react.svg       # Component icons and images
```

### Key Features

#### 🎯 **Modular Component Architecture**
- **Component Isolation**: Each component is self-contained with its own CSS, TypeScript, and index files
- **Barrel Exports**: Clean import statements using index.ts files throughout the project
- **Section-Based Layout**: Logical separation of page sections for better organization

#### 📦 **Content Management System**
- **Centralized Content**: All data structures organized in dedicated `contents/` directory
- **Type-Safe Data**: TypeScript interfaces for projects, navigation, and footer content
- **Reusable Content Functions**: Easy data access across multiple components
- **Separation of Concerns**: Content logic separated from presentation components

#### 🌍 **Internationalization (i18n)**
- **react-i18next Integration**: Seamless language switching between English and Spanish
- **Type-Safe Translations**: TypeScript support for translation keys
- **Scalable Localization**: Easy addition of new languages through JSON files
- **Complete Coverage**: All UI elements and content properly translated

#### ⚙️ **Configuration Management**
- **Centralized Config**: All configuration files organized in dedicated config folder
- **Environment Agnostic**: Easy configuration changes without code modification
- **Social Links Management**: Dynamic social media links with activation states
- **Color System**: Centralized color palette and theming

#### 🎨 **Modern Styling Architecture**
- **Component-Scoped CSS**: Each component has its own CSS file for better maintainability
- **Custom CSS Variables**: Consistent theming through CSS custom properties
- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Performance Optimized**: No external CSS framework dependencies

### Library Usage

#### **Core Technologies**
- **React 19**: Latest React features for modern component development
- **TypeScript**: Full type safety and enhanced developer experience
- **Vite**: Lightning-fast build tool and development server
- **Bun**: High-performance JavaScript runtime and package manager

#### **UI & Styling**
- **react-icons**: Comprehensive icon library for consistent iconography
- **Custom CSS**: Tailored styling without framework dependencies
- **CSS Variables**: Dynamic theming and color management

#### **Internationalization**
- **react-i18next**: Industry-standard i18n solution
- **i18next-browser-languagedetector**: Automatic language detection
- **JSON-based translations**: Easy translation management

This architecture ensures the project remains maintainable, scalable, and developer-friendly while providing excellent performance and user experience.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Make sure you have Node.js and npm installed, or Bun as an alternative faster JavaScript runtime and package manager.

- Bun (alternative)
  ```sh
  curl -fsSL https://bun.sh/install | bash
  # or on Windows
  powershell -c "irm bun.sh/install.ps1 | iex"
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mega-barto/mega-barto.github.io.git
   ```
2. Navigate to the project directory
   ```sh
   cd mega-barto.github.io/megabarto.rocks
   ```
3. Install packages (using npm or bun)
   ```sh
   npm install
   # or with bun
   bun install
   ```
4. Start the development server
   ```sh
   npm run dev
   # or with bun
   bun dev
   ```
   Your application will be available at `http://localhost:5173`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the CC0 1.0 Universal License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Juan Alejandro Pérez Bermudez - [@Mega_Barto](https://twitter.com/Mega_Barto) - personal.jperez@gmail.com

Project Link: [https://github.com/mega-barto/mega-barto.github.io](https://github.com/mega-barto/mega-barto.github.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/mega-barto/mega-barto.github.io.svg?style=for-the-badge
[contributors-url]: https://github.com/mega-barto/mega-barto.github.io/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mega-barto/mega-barto.github.io.svg?style=for-the-badge
[forks-url]: https://github.com/mega-barto/mega-barto.github.io/network/members
[stars-shield]: https://img.shields.io/github/stars/mega-barto/mega-barto.github.io.svg?style=for-the-badge
[stars-url]: https://github.com/mega-barto/mega-barto.github.io/stargazers
[issues-shield]: https://img.shields.io/github/issues/mega-barto/mega-barto.github.io.svg?style=for-the-badge
[issues-url]: https://github.com/mega-barto/mega-barto.github.io/issues
[license-shield]: https://img.shields.io/github/license/mega-barto/mega-barto.github.io.svg?style=for-the-badge
[license-url]: https://github.com/mega-barto/mega-barto.github.io/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/mega-barto
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript.js]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Vite.js]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[Bun.js]: https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white
[Bun-url]: https://bun.sh/
[Notion.so]: https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white
[Notion-url]: https://notion.so/
