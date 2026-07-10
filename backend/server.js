const express = require('express');
const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../')); // Serve frontend files

// Database setup
const adapter = new JSONFile('db.json');
const db = new Low(adapter);

async function initDb() {
    await db.read();
    db.data ||= { leads: [] };
    await db.write();
}

// Initialize DB
initDb();

// POST /leads endpoint
app.post('/leads', async (req, res) => {
    try {
        await db.read();
        db.data.leads.push(req.body);
        await db.write();
        console.log('New lead:', req.body);
        res.status(201).json({ success: true });
    } catch (error) {
        console.error('Error saving lead:', error);
        res.status(500).json({ error: 'Failed to save lead' });
    }
});

// GET /leads endpoint (for admin view)
app.get('/leads', async (req, res) => {
    try {
        await db.read();
        res.json(db.data.leads);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch leads' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`View leads at http://localhost:${port}/leads`);
});
