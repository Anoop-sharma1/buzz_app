import express from 'express';
import { connectDB } from './database/db';
import { errorHandler } from './middleware/errorMiddleware';
import { PORT } from './utils/config';
import * as Colors from 'colors.ts';
Colors.colors('', '');

connectDB();

const app = express();
app.use(express.json());

app.get('/api/v1/test', (req, res, next) => {
    return res.json({
        status : true,
        message : "Api working fine!",
        data: {}
    });
});

// Routes registration
app.use('/api/v1/users', require('./routes/userRoutes'));

// Incorrect route handler
app.use('*', function(req, res) {
    return res.json({
        status : false,
        message : "Trying to access incorrect route, please check for typo !",
        data: {}
    });
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
