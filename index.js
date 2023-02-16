import dotenv from 'dotenv';
import app from "./backend/app.js"

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Server running on door ${port}`))

