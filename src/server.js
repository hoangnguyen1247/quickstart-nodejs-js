import http from 'http';
import debug from 'debug';

import createError from "http-errors";
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { DIContainer } from './di/DIContainer';

import { IndexRouter } from './routes/index';
import { AccountRouter } from './routes/account';

debug('quickstart-node-js:server');

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

export const createServer = async () => {
    const app = express();
    const diContainer = (new DIContainer()).createRegister();
    // const accountConnector = await (diContainer.get("accountConnector")).createConnection(diContainer);

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'hbs');

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.resolve(__dirname, "..", 'public')));

    app.use('/', IndexRouter(diContainer));
    app.use('/users', AccountRouter(diContainer));

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        next(createError(404));
    });

    // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });

    /**
     * Get port from environment and store in Express.
     */

    var port = normalizePort(process.env.PORT || '4201');
    app.set('port', port);

    /**
     * Create HTTP server.
     */

    var server = http.createServer(app);

    /**
     * Listen on provided port, on all network interfaces.
     */

    server.listen(port);

    
    /**
     * Event listener for HTTP server "error" event.
     */
    server.on('error', function(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }
    
        var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    
        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    });

    /**
     * Event listener for HTTP server "listening" event.
     */
    server.on('listening', function onListening() {
        var addr = server.address();
        var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
        debug('Listening on ' + bind);
    });

    return server;
}
