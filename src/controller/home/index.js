import express from 'express';

export function HomeRouter(diContainer, oauth2Server) {

    const router = express.Router();

    /* GET home page. */
    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
    });

    return router;
}
