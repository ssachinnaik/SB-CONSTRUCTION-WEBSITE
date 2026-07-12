# Backend Setup with MongoDB (Windows CMD)

This backend stores leads submitted by customers interested in SB Construction materials. It is built using Node.js, Express, and Mongoose (MongoDB).

## Prerequisites
1. Install [MongoDB Community Server](https://www.mongodb.com/try/download/community) locally, or set up a cloud database on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Ensure MongoDB service is running (locally on default port `27017`).

## Configuration
1. Check the `.env` file in this directory.
2. If it does not exist, copy `.env.example` to `.env`:
   ```cmd
   copy .env.example .env
   ```
3. Set your custom connection string under `MONGODB_URI` if you are using MongoDB Atlas or a different local port.

## Install & Start

**Using Windows CMD:**
```cmd
cd /d "C:/Users/DELL/Desktop/sb-construction-website/backend"
npm install
npm start
```

**Using PowerShell:**
```powershell
cd "C:/Users/DELL/Desktop/sb-construction-website/backend"
npm install
npm start
```

## API Endpoints
- **Server Address:** http://localhost:3000
- **Add Lead (POST):** http://localhost:3000/leads
  - Accepts JSON payload: `{ "name": "John Doe", "mobile": "9876543210" }`
- **View Leads (GET):** http://localhost:3000/leads
  - Returns lead history sorted by newest first.

## Frontend
Open `index.html` (or `login.html`) in your browser. Ensure the backend server is running so that the Register Interest form can connect and save data to MongoDB.
