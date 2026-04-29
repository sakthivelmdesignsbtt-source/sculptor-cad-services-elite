const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Security Middleware
app.use(helmet());
app.use(compression());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://sculptorcad.com' 
    : 'http://localhost:3000',
  credentials: true
}));

// Body Parser
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB Connected Successfully');
})
.catch(err => {
  console.error('❌ MongoDB Connection Error:', err.message);
  process.exit(1);
});

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: '✅ Server is running' });
});

// API Routes (Will add in next files)
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/projects', require('./routes/projects'));
// app.use('/api/contact', require('./routes/contact'));

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: '❌ Route not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error('🔴 Error:', err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Server Error',
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV}`);
  console.log(`🔐 Security: Helmet enabled`);
  console.log(`📦 Compression: Enabled\n`);
});

module.exports = app;
