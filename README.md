# xml-sitemaps-generator
Easily <a href="https://xmlsitemaps.app/">Create Valid XML Sitemaps</a> for your website to improve SEO and ensure proper indexing by search engines. This tool generates sitemaps quickly, offers copy and download options, and adheres to industry standards. Perfect for developers, SEOs, and website owners.

# XML Sitemap Generator

[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-blue.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, user-friendly XML sitemap generator built with React, TypeScript, and Tailwind CSS. Generate valid XML sitemaps for your website to improve SEO and search engine indexing.

![XML Sitemap Generator](https://images.unsplash.com/photo-1557853197-aefb550b6fdc?auto=format&fit=crop&q=80&w=1024)

## Features

- 🚀 **Easy to Use**: Simple and intuitive interface for managing URLs
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Real-time Preview**: Instant XML preview as you add and modify URLs
- 💾 **Download Support**: Export your sitemap as a valid XML file
- 🎨 **Modern UI**: Beautiful interface built with Tailwind CSS
- 🔧 **Customizable Options**: Set priority, change frequency, and last modified date for each URL
- ✅ **Validation**: Basic URL validation to ensure proper format

## Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/xml-sitemap-generator.git

# Navigate to project directory
cd xml-sitemap-generator

# Install dependencies
npm install

# Start development server
npm run dev
```

## Usage

1. Enter your website URLs in the form
2. Set the following parameters for each URL:
   - Last Modified Date
   - Change Frequency (Always, Hourly, Daily, Weekly, Monthly, Yearly, Never)
   - Priority (0.0 to 1.0)
3. Click "Generate Sitemap" to preview the XML
4. Click "Download Sitemap" to save the file

## Technology Stack

- **React**: Frontend library for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Next-generation frontend tooling
- **Lucide React**: Beautiful hand-crafted icons

## Project Structure

```
xml-sitemap-generator/
├── src/
│   ├── components/
│   │   └── SitemapForm.tsx    # Main form component
│   ├── App.tsx               # Root component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/
├── package.json
└── README.md
```

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)
- Built with [Vite](https://vitejs.dev/)

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

Made with ❤️ by [Your Name]
