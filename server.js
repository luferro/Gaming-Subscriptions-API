import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { closeBrowser, openBrowser } from './utils/browser.js';
import SubscriptionsRoute from './Routes/SubscriptionsRoute.js'

const app = express();
app.use(cors());

// API
//---------------------------------------------------------------------------------------------------------------------------

app.get('/', (req, res) => {
    res.json({ author: 'Luís Ferro', github: 'https://github.com/xSerpine' });
})
app.use('/subscriptions', SubscriptionsRoute);
app.use((req, res) => {
    res.status(404).json({ error: 'Couldn\'t find requested endpoint.' });
});

// Server
//---------------------------------------------------------------------------------------------------------------------------

app.listen(process.env.PORT, async() => {
    console.log(`Server started on port ${process.env.PORT}.`);
    await openBrowser();
});

['SIGINT', 'SIGTERM'].forEach(signal => process.on(signal, async() => {
    await closeBrowser();
    process.exit(1);
}));