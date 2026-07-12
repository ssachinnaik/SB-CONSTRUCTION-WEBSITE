# 🏗️ SB Construction Website

A modern and responsive website developed for **SB Construction Materials Suppliers** to showcase construction materials, company information, and contact details. The website is designed to provide customers with an easy way to explore products and connect with the supplier.

## 📌 Features

* Responsive and user-friendly design
* Home page with company introduction
* Product showcase
* About Us section
* Contact information
* Mobile-friendly layout
* Clean and modern interface

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* Responsive Web Design

## 📂 Project Structure

```text
SB-CONSTRUCTION-WEBSITE/
│── index.html
│── css/
│── js/
│── images/
│── assets/
└── README.md
```

## 🚀 Getting Started

1. Clone the repository

```bash
git clone https://github.com/ssachinnaik/SB-CONSTRUCTION-WEBSITE.git
```

2. Navigate to the project folder

```bash
cd SB-CONSTRUCTION-WEBSITE
```

3. Open `index.html` in your browser.

## 🎯 Purpose

This project was developed to create a professional online presence for **SB Construction Materials Suppliers**, allowing customers to browse available construction materials and easily contact the business.

## 📈 Future Improvements

* Product enquiry form
* Admin dashboard
* Product search and filtering
* Customer login
* Online quotation request
* Inventory management
* Google Maps integration
* WhatsApp quick contact

## 🌐 Deployment to Render

To deploy this fullstack website to Render (free tier):

1. **MongoDB Database Setup:**
   - Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Obtain your MongoDB connection string (e.g., `mongodb+srv://<username>:<password>@cluster0.xxxx.mongodb.net/sb-construction?retryWrites=true&w=majority`).

2. **Deploy on Render:**
   - Create a new **Web Service** on Render and link your GitHub repository `SB-CONSTRUCTION-WEBSITE`.
   - Set the configuration as follows:
     - **Root Directory:** `backend`
     - **Runtime:** `Node`
     - **Build Command:** `npm install`
     - **Start Command:** `node server.js`
   - In the **Environment Variables** section, add:
     - `MONGODB_URI`: *Your MongoDB Atlas connection string*
     - `PORT`: `10000` (Render will assign this automatically)
   - Click **Deploy Web Service**. Once built, the backend will serve both the static web pages and handle the database operations on the generated Render subdomain.

---

## 👨‍💻 Author

**Sachin Naik**

GitHub: https://github.com/ssachinnaik

---

⭐ If you found this project helpful, consider giving it a **Star** on GitHub.

