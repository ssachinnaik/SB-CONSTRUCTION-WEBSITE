require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../')); // Serve frontend files

// MongoDB Connection
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sb-construction';
mongoose.connect(mongoUri)
    .then(() => console.log('Connected successfully to MongoDB.'))
    .catch(err => {
        console.error('Could not connect to MongoDB:', err.message);
        console.log('Please make sure MongoDB is running locally or check your connection string in .env');
    });

// Lead Schema & Model
const leadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
        match: /^\d{10}$/
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Lead = mongoose.model('Lead', leadSchema);

// POST /leads endpoint
app.post('/leads', async (req, res) => {
    try {
        const { name, mobile, timestamp } = req.body;
        
        const newLead = new Lead({
            name,
            mobile,
            timestamp: timestamp || new Date()
        });

        await newLead.save();
        console.log('New lead saved to MongoDB:', newLead);
        res.status(201).json({ success: true, lead: newLead });
    } catch (error) {
        console.error('Error saving lead:', error);
        res.status(500).json({ error: 'Failed to save lead', details: error.message });
    }
});

// GET /leads endpoint (for admin view)
app.get('/leads', async (req, res) => {
    try {
        const leads = await Lead.find().sort({ timestamp: -1 });
        res.json(leads);
    } catch (error) {
        console.error('Error fetching leads:', error);
        res.status(500).json({ error: 'Failed to fetch leads' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`View leads at http://localhost:${port}/leads`);
});
