import dotenv from 'dotenv';
import app from "./backend/app.js"

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server running on door ${PORT }`))

