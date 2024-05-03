const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sukisha6502',
    database: 'products'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// For Brands

app.get('/api/brands', async (req, res) => {
    try {
        const query = 'SELECT * FROM brands';
        db.query(query, (err, result) => {
            if (err) {
                console.error('Error executing MySQL query:', err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            console.log("Brand Table datas:", result);
            res.json(result);
        });
    } catch (err) {
        console.error('Error in /api/brands handler:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/brands', (req, res) => {
    const { brandName, imageUrl } = req.body;

    if (!brandName || !imageUrl) {
        res.status(400).json({ error: 'Brand name and image URL are required' });
        return;
    }

    const query = 'INSERT INTO brands (brandName, imageUrl) VALUES (?, ?)';
    db.query(query, [brandName, imageUrl], (err, result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        console.log('New brand added:', result);
        res.status(201).json({ message: 'Brand added successfully', brandId: result.insertId });
    });
});

// For AppleProducts 

app.get('/api/appleproducts', async (req, res) => {
    const brandId = req.query.brandId;
    const query = 'SELECT * FROM appleproducts WHERE brandId = ?';
    db.query(query, [brandId], (err, result) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(result);
    });
});


app.post('/api/appleproducts', (req, res) => {
    const { brandId, modelName, price, imageUrl, count } = req.body;
    // const brandId = req.query.brandId;
    console.log("POSt apple");

    if (!brandId || !modelName || !price || !imageUrl || !count) {
        res.status(400).json({ error: 'All fields are required' });
        return;
    }

    const query = 'INSERT INTO appleproducts (brandId, modelName, price, imageUrl, count) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [brandId, modelName, price, imageUrl, count], (err, result) => {
        console.log(brandId, modelName, price, imageUrl, count,);
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        console.log('New brand added:', result);
        res.status(201).json({ message: 'Product added successfully', productId: result.insertId });
    });
});

// for AddCart 

app.get('/api/addcart', (req, res) => {
    const sql = 'SELECT * FROM addcart';

    db.query(sql, (error, results, fields) => {
        if (error) {
            console.error('Error retrieving data from addcart table:', error);
            return res.status(500).json({ error: 'Failed to retrieve data from addcart table' });
        }
        res.status(200).json(results);
    });
});



app.post('/api/addcart', (req, res) => {
    const { brandId, modelName, price, imageUrl, count } = req.body;

    
    const sql = `INSERT INTO addcart (brandId, modelName, price, imageUrl, count) VALUES (?, ?, ?, ?, ?)`;
    const values = [brandId, modelName, price, imageUrl, count];

    db.query(sql, values, (error, results) => {
        if (error) {
            console.error('Error inserting data into addcart:', error);
            res.status(500).json({ error: 'Failed to add data to cart' });
        } else {
            console.log('Data inserted into addcart table:', results);
            res.status(200).json({ message: 'Product added to cart' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
