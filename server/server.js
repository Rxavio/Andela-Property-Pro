import express from 'express';
import bodyParser from 'body-parser';
import propertyRoutes from './routes/propertyRoutes';
import userRoutes from './routes/userRoutes';
require('dotenv').config();

//console.log(process.env.JWT_SECRET);


const app = express();

const port = process.env.PORT || process.env.ENTRY_PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/', propertyRoutes);
app.use('/api/v1/', userRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

export default app;