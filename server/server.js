import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index.js';

const app = express();

const port = process.env.PORT || 4500;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/', routes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

export default app;