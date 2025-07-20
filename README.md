# Unite for Change Website

A modern, responsive website for Unite for Change, a 501(c)(3) nonprofit organization dedicated to empowering youth, cultivating leadership skills, and fostering community service. This full-stack web application features an interactive chatbot, contact form functionality, and a comprehensive showcase of the organization's mission and upcoming events.

## About Unite for Change

Unite for Change is a PVSA-certified, entirely student-led nonprofit established in 2023. Our mission is to empower youth, cultivate leadership skills, and foster a commitment to service, focusing on initiatives that bring communities together, address local needs, and create lasting impact—particularly benefiting disadvantaged children.

**Leadership:**
- **Presidents:** Ranjan and Sathvik
- **Milton Chapter President & Website Creator:** Aryan Sharma

**Active Chapters:** IA, CHS, AHS, DHS, MHS, NHS

## Features

### Frontend
- **Responsive Design:** Modern, mobile-friendly interface built with React and Bootstrap
- **Interactive Components:** Hero section, about us, upcoming events, donation portal
- **Team Showcase:** Dedicated section highlighting organization leadership
- **Contact Form:** Integrated contact system with email notifications
- **AI Chatbot:** Interactive chat interface powered by local LLM (Ollama)

### Backend
- **Flask API:** RESTful backend services for form handling and chatbot functionality
- **Email Integration:** Automated email notifications for contact form submissions
- **AI Integration:** Local LLM chatbot using Ollama for intelligent responses
- **CORS Support:** Cross-origin resource sharing for frontend-backend communication

## Tech Stack

### Frontend
- **React 18.3.1** - Modern JavaScript framework
- **Bootstrap 5.3.3** - Responsive CSS framework
- **React Bootstrap 2.10.5** - Bootstrap components for React
- **CSS3** - Custom styling and animations

### Backend
- **Python 3.x** - Backend programming language
- **Flask** - Lightweight web framework
- **Flask-CORS** - Cross-origin resource sharing
- **SMTP** - Email functionality
- **Ollama** - Local LLM integration (llama3.2:3b model)

## Project Structure

```
UniteForChangeWebsite/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── header.js    # Navigation header
│   │   │   ├── hero.js      # Hero section
│   │   │   ├── about.js     # About us section
│   │   │   ├── upcoming.js  # Upcoming events
│   │   │   ├── donate.js    # Donation section
│   │   │   ├── contact.js   # Contact form
│   │   │   ├── chat.js      # AI chatbot interface
│   │   │   ├── teams.js     # Team showcase
│   │   │   └── footer.js    # Footer component
│   │   ├── App.js           # Main application component
│   │   └── index.js         # Application entry point
│   └── package.json         # Frontend dependencies
├── backend/                  # Flask backend application
│   ├── backend.py           # Main Flask server (contact form)
│   ├── chatbot.py           # Chatbot API server
│   └── venv/                # Python virtual environment
└── README.md                # Project documentation
```

## Prerequisites

- **Node.js** (v14 or higher)
- **Python 3.8+**
- **Ollama** (for chatbot functionality)
- **Gmail account** (for email notifications)

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Aryan3040/UniteForChangeWebsite.git
cd UniteForChangeWebsite
```

### 2. Frontend Setup
```bash
cd frontend
npm install
```

### 3. Backend Setup
```bash
cd ../backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install flask flask-cors requests
```

### 4. Environment Configuration
Create environment variables for email functionality:

```bash
export EMAIL="your-email@gmail.com"
export APPPASS="your-gmail-app-password"
```

**Note:** For Gmail, you'll need to generate an App Password in your Google Account settings.

### 5. Ollama Setup (for Chatbot)
Install and run Ollama with the required model:

```bash
# Install Ollama (follow instructions at https://ollama.ai)
ollama pull llama3.2:3b
ollama serve
```

## Running the Application

### Development Mode

1. **Start the Backend Servers:**
```bash
cd backend
source venv/bin/activate

# Terminal 1: Contact form server
python backend.py

# Terminal 2: Chatbot server
python chatbot.py
```

2. **Start the Frontend:**
```bash
cd frontend
npm start
```

The application will be available at:
- **Frontend:** http://localhost:3000
- **Contact API:** http://localhost:5002
- **Chatbot API:** http://localhost:5001

### Production Build

```bash
cd frontend
npm run build
```

## API Endpoints

### Contact Form (`backend.py`)
- **POST** `/contact` - Submit contact form and send email notification

### Chatbot (`chatbot.py`)
- **POST** `/chat` - Send message to AI chatbot and receive response

## Deployment

### Frontend Deployment
The React app can be deployed to:
- **Vercel:** Connect GitHub repository for automatic deployments
- **Netlify:** Drag and drop the `build` folder
- **GitHub Pages:** Use `gh-pages` package

### Backend Deployment
The Flask servers can be deployed to:
- **Heroku:** Add `Procfile` and configure environment variables
- **Railway:** Connect repository and set environment variables
- **DigitalOcean App Platform:** Deploy as containerized application

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Upcoming Events

- **Soccer Charity Match:** Entry fees support children's hospitals with PS5 prizes for winning teams
- **Basket Brigade:** Collecting donations at schools to assemble and deliver meal baskets to families in need

## Contact

For questions about the website or technical issues:
- **Website Creator:** Aryan Sharma
- **Organization Presidents:** Ranjan and Sathvik

For general inquiries about Unite for Change:
- Use the contact form on the website
- Reach out through the interactive chatbot

## License

This project is developed for Unite for Change, a 501(c)(3) nonprofit organization. All rights reserved.

## Acknowledgments

- Built with React and Flask
- AI chatbot powered by Ollama and Llama 3.2
- Styled with Bootstrap and custom CSS
- Email functionality via Gmail SMTP 