
# Global Express - Digital Banking System

This project is a full-stack digital banking system with a React frontend and a Spring Boot backend using MySQL. It includes features such as user signup/login, money transfer (with currency conversion and UPI), transaction history, loan application, and analytics.

## Structure
- `frontend/` - React app (Vite)
- `backend/` - Spring Boot app (Maven, MySQL)

## Features
- Header, Footer, Home, About, Contact
- Apply Loan, Signup/Login, Refer a Friend (up to 200 rupees)
- Home page with animated banking photo slider
- New users get 10,000 dummy money
- Money transfer (country selection, currency conversion, UPI)
- Transaction history with transaction ID
- Bar graphs for spending analytics
- Loan section with all types of loans

## Setup
- Frontend: `cd frontend && npm install && npm run dev`
- Backend: Configure MySQL in `backend/backend/src/main/resources/application.properties`, then `cd backend/backend && .\mvnw.cmd spring-boot:run`

---
Replace placeholder images and update configuration as needed.
