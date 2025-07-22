# Jose Antonio Nuevo - Professional CV Website 🌟

A modern, multilingual CV/Resume website built with cutting-edge web technologies, featuring full internationalization, dark mode, responsive design, and professional contact functionality.

**Live Website**: [Portfolio URL]  
**LinkedIn**: [https://www.linkedin.com/in/jose-antonio-nuevo/](https://www.linkedin.com/in/jose-antonio-nuevo/)  
**GitHub**: [https://github.com/JoseAntonioNuevo](https://github.com/JoseAntonioNuevo)

## 🚀 Overview

This is a fully-developed, professional CV website showcasing 5+ years of experience as a Tech Lead & Full Stack Developer. The site demonstrates expertise in modern web development practices with a focus on performance, accessibility, and user experience.

### Key Highlights
- 🌐 **Bilingual Support**: English and Spanish with clean URL routing
- 🎨 **Modern Design**: Dark/Light mode with smooth transitions
- 📱 **Fully Responsive**: Mobile-first design approach
- ⚡ **Performance Optimized**: Static site generation with SSR capabilities
- 🔍 **SEO Ready**: Complete meta tags, structured data, and sitemap
- 📧 **Contact Integration**: Functional contact form with email notifications
- 🎯 **Professional Sections**: Experience, Education, Certifications, Projects

## 🛠️ Tech Stack

### Core Framework
- **Astro v5.12.0** - Static site generator with SSR capabilities
- **React v19.1.0** - Interactive components
- **TypeScript v5.8.3** - Type-safe development

### Styling & UI
- **Tailwind CSS v3.4.0** - Utility-first CSS framework
- **React Icons v5.5.0** - Comprehensive icon library
- **Custom Components** - Reusable Astro and React components

### Development Tools
- **Bun** - Fast package manager and runtime
- **@astrojs/check** - TypeScript and Astro checking
- **Hot Module Replacement** - Fast development experience

### Communication
- **MailerSend API** - Professional email service integration
- **Custom Contact Form** - Form validation and submission

## 📁 Project Architecture

```
cv/
├── public/                          # Static assets
│   ├── certifications/              # Certification platform logos
│   ├── cv-es.pdf & cv.pdf          # Downloadable CVs
│   ├── education/                   # Institution logos
│   ├── experience/                  # Company logos
│   ├── portfolio/                   # Project screenshots
│   └── me.jpeg                      # Profile photo
├── src/
│   ├── components/                  # Reusable components
│   │   ├── Certifications.astro     # Certifications carousel
│   │   ├── CertificationsCarousel.tsx # Interactive carousel
│   │   ├── Contact.astro            # Contact form section
│   │   ├── Experience.astro         # Work experience timeline
│   │   ├── Footer.astro             # Site footer
│   │   ├── Header.astro             # Navigation header
│   │   ├── Hero.astro               # Landing section
│   │   ├── LanguageSwitcher.astro   # Language toggle
│   │   ├── Portfolio.astro          # Projects showcase
│   │   ├── Studies.astro            # Education section
│   │   ├── Technologies.astro       # Skills showcase
│   │   └── ThemeToggle.tsx          # Dark/light mode toggle
│   ├── data/                        # Structured data
│   │   ├── Certifications.json      # Certification details
│   │   ├── experience.json          # Work experience data
│   │   └── studies.json             # Education data
│   ├── i18n/                        # Internationalization
│   │   ├── translations.ts          # Translation strings
│   │   └── utils.ts                 # i18n utilities
│   ├── layouts/
│   │   └── Layout.astro             # Main layout template
│   ├── pages/
│   │   ├── api/
│   │   │   └── contact.ts           # Contact form API endpoint
│   │   ├── es/
│   │   │   └── index.astro          # Spanish homepage
│   │   └── index.astro              # English homepage
│   └── styles/
│       ├── global.css               # Global styles
│       └── print.css                # Print optimizations
├── astro.config.mjs                 # Astro configuration
├── tailwind.config.mjs              # Tailwind configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Dependencies and scripts
└── bun.lock                         # Lockfile
```

## 🌐 Internationalization System

### Language Support
- **English** (default): `/`
- **Spanish**: `/es/`

### Translation Architecture
- **Strongly Typed**: Full TypeScript support for translation keys
- **Nested Structure**: Organized by sections (nav, hero, experience, etc.)
- **Dynamic Loading**: Language detection from URL
- **SEO Optimized**: Proper hreflang tags and localized content

### Usage Example
```typescript
import { useTranslations } from '../i18n/utils';

const t = useTranslations(lang);
const title = t('hero.greeting'); // "Hello, I'm" or "Hola, soy"
```

## 🎨 Design System

### Dark Mode Implementation
- **Class-based Toggle**: `dark:` prefix for dark variants
- **localStorage Persistence**: Remembers user preference
- **System Preference Detection**: Respects OS dark mode setting
- **Smooth Transitions**: 300ms duration for all theme changes

### Color Palette
- **Primary**: Indigo/Blue accent colors
- **Neutral**: Gray scales for text and backgrounds
- **Interactive**: Hover states and focus indicators
- **Semantic**: Success, warning, and error states

### Responsive Breakpoints
- **Mobile First**: Base styles for mobile devices
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)
- **Large Desktop**: `xl:` prefix (1280px+)

## 📱 Component Architecture

### Astro Components (.astro)
Server-side rendered components for static content:
- **Header**: Navigation with language switcher
- **Hero**: Landing section with CTA buttons
- **Experience**: Career timeline with company details
- **Studies**: Education history
- **Certifications**: Professional certifications
- **Portfolio**: Project showcase
- **Contact**: Contact form and social links
- **Footer**: Site information

### React Components (.tsx)
Interactive components requiring client-side functionality:
- **ThemeToggle**: Dark/light mode switch with animations
- **CertificationsCarousel**: Touch-enabled certification slider
- **LanguageSwitcher**: Language selection dropdown

### Hydration Strategy
- **Selective Hydration**: Only interactive components use `client:load`
- **Performance Optimized**: Minimal JavaScript on the client
- **SEO Friendly**: Server-side rendered content

## 💼 Professional Content

### Work Experience
**Current Position**: Tech Lead at Recovo (Feb 2025 - Present)
- Leading sustainable fashion technology platform
- Managing cross-functional development teams
- Architecting scalable systems and microservices

**Previous Roles**:
- Full Stack Engineer at Recovo (Oct 2022 - Feb 2025)
- Tech Lead at Acceleralia (Jan 2022 - Oct 2022)
- Full Stack Engineer at Acceleralia (Aug 2020 - Jan 2022)
- Part-time Developer at Acceleralia (Oct 2022 - Jul 2025)

### Technical Expertise
- **Frontend**: React, Next.js 15, TypeScript, Vue.js, Tailwind CSS
- **Backend**: Node.js, Laravel, Python, PHP
- **Databases**: PostgreSQL, MySQL, MongoDB, Redis
- **Cloud & DevOps**: AWS (EC2, RDS), Docker, CI/CD, Jenkins
- **Testing**: Unit testing, Integration testing, TDD practices

### Education
- **FullStack Web Masters** - ThreePoints (2022)
- **Higher Degree in Multiplatform Application Development** - UOC (2021)
- **Higher Degree in Web Application Development** - Jesuïtes Bellvitge (2020)
- **Bachillerato (Scientific-Technological)** - Jesuïtes Bellvitge (2018)

### Certifications (22+ Certifications)
Professional certifications from leading platforms:
- **Platzi**: Backend Node.js, React Advanced
- **MongoDB University**: M001, M100, M103
- **Udemy**: TypeScript, Bootstrap, Laravel AWS
- **OpenWebinars**: JavaScript, Java, Python, Git
- **Código Facilito**: Laravel, React, Vue.js

## 📧 Contact Integration

### Email System
- **MailerSend API**: Professional email service
- **Form Validation**: Client and server-side validation
- **Error Handling**: Comprehensive error messages
- **Security**: API key protection and rate limiting

### Contact Methods
- **Email**: joseantonio.nuevo@gmail.com
- **LinkedIn**: Professional networking
- **GitHub**: Code repositories
- **Phone**: Available upon request

## 🚀 Development Commands

```bash
# Install dependencies
bun install

# Start development server (http://localhost:4321)
bun dev

# Build for production (outputs to ./dist/)
bun build

# Preview production build locally
bun preview

# Run Astro CLI commands
bun astro <command>

# Type checking
bunx astro check

# Get help with Astro CLI
bun astro -- --help
```

## ⚡ Performance Features

### Build Optimization
- **Static Site Generation**: Pre-rendered HTML pages
- **Code Splitting**: Automatic JavaScript chunking
- **Image Optimization**: WebP format for images
- **CSS Optimization**: Tailwind purging unused styles

### SEO Implementation
- **Meta Tags**: Complete Open Graph and Twitter Card tags
- **Structured Data**: JSON-LD schema markup
- **Canonical URLs**: Proper canonical link relations
- **Sitemap**: XML sitemap generation
- **Hreflang Tags**: International SEO support

### Accessibility
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG compliant contrast ratios

## 🔧 Configuration Files

### Astro Configuration (astro.config.mjs)
```javascript
export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
```

### TypeScript Configuration
- Extends Astro's strict preset
- React JSX configuration
- Type-safe imports and exports

### Tailwind Configuration
- Dark mode class strategy
- Custom theme extensions
- Comprehensive content scanning

## 🌟 Key Features

### 1. Professional Design
- Clean, modern interface
- Consistent typography and spacing
- Professional color scheme
- Print-friendly styles

### 2. Technical Excellence
- Type-safe development with TypeScript
- Component-based architecture
- Performance-optimized builds
- SEO best practices

### 3. User Experience
- Fast loading times
- Smooth animations and transitions
- Intuitive navigation
- Mobile-optimized interface

### 4. Content Management
- Structured JSON data
- Easy content updates
- Multilingual support
- Rich media integration

### 5. Professional Communication
- Working contact form
- Professional email templates
- Multiple contact methods
- Quick response capabilities

## 🔒 Environment Variables

```env
# Email Configuration
MAILERSEND_API_KEY=your_mailersend_api_key
MAILERSEND_FROM_EMAIL=your_verified_domain@example.com
```

## 📈 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Professional Services

Available for:
- **Freelance Development**: Full-stack web applications
- **Technical Consulting**: Architecture and technology decisions
- **Team Leadership**: Tech lead and mentoring roles
- **Code Reviews**: Quality assurance and best practices
- **Training**: Modern web development practices

## 📞 Get In Touch

Interested in collaborating or have a project in mind? I'm always open to discussing new opportunities and challenges.

**Primary Contact**: joseantonio.nuevo@gmail.com  
**Location**: Barcelona, Spain  
**Availability**: Open for freelance opportunities

---

*Built with ❤️ using Astro, React, TypeScript, and Tailwind CSS*