import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import todoRoutes from './routes/todos';
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(json());

// MongoDB Connection
connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/todos', todoRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});