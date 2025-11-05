# Portfolio Inertia Laravel

Modern portfolio website built with Laravel, Inertia.js, and React.

## Features

- ✨ Responsive design
- 🌓 Dark/Light theme switcher
- 📱 Mobile-friendly
- 🎨 Smooth scroll animations
- 📝 Contact form (in-memory state)
- 🚀 Fast and modern tech stack

## Tech Stack

- **Backend**: Laravel 11
- **Frontend**: React + Inertia.js
- **Styling**: Tailwind CSS
- **Containerization**: Docker

## Local Development

### Prerequisites

- PHP >= 8.2
- Composer
- Node.js >= 18
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-inertia-laravel.git
cd portfolio-inertia-laravel
```

2. Install dependencies:
```bash
composer install
npm install
```

3. Set up environment:
```bash
cp .env.example .env
php artisan key:generate
```

4. Build assets:
```bash
npm run build
```

5. Start development server:
```bash
php artisan serve
npm run dev
```

Visit: `http://localhost:8000`

## Docker Deployment

### Build Docker Image
```bash
docker build -t yourname/portfolio-inertia:latest .
```

### Run with Docker
```bash
docker run -d -p 8000:8000 yourname/portfolio-inertia:latest
```

### Pull from Docker Hub
```bash
docker pull yourname/portfolio-inertia:latest
docker run -d -p 8000:8000 yourname/portfolio-inertia:latest
```

Visit: `http://localhost:8000`

### Push to Docker Hub
```bash
docker login
docker tag yourname/portfolio-inertia:latest yourname/portfolio-inertia:latest
docker push yourname/portfolio-inertia:latest
```

## Project Structure
```
portfolio-inertia-laravel/
├── app/
├── resources/
│   ├── js/
│   │   ├── Components/
│   │   │   └── Portfolio/
│   │   ├── Hooks/
│   │   ├── Pages/
│   │   └── app.jsx
│   └── css/
├── routes/
│   └── web.php
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## License

MIT License