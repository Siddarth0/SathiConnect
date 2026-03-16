const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

//connect database
connectDB();

//Init Middleware
app.use(express.json({ extended: false}));

app.get('/api/health', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client', 'build')));

	app.get(/^(?!\/api).*/, (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));