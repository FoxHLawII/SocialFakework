import { Application, Response, Request } from 'express';

import express from 'express';

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use('/', (req: Request, res: Response) => { res.send("HI THERE"); });

app.listen(PORT, () => console.log(`Init in ${PORT}`));