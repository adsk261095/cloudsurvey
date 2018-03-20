var express = require('express');
var router = express.Router();

var handler = require('../handler');
var config = require('../config');


var routeConfigs = {

    "/api/login": { isSession: false, handler: handler.login, method: 'post' },//getuser
    "/api/postStudentData": { isSession: false, handler: handler.postStudentData, method: 'post' },
    "/api/getStudentData": { isSession: true, handler: handler.getStudentData, method: 'get' },
    "/api/getCount": { isSession: true, handler: handler.getCount, method: 'get' },
    "/api/logout": { isSession: true, handler: handler.logout, method: 'get' },
    "/api/query": { isSession: false, handler: handler.query, method: 'get' }
    }


// Get Routes
router.get('/', function (req, res, next) {
    res.redirect('/html/survey.html');
});

router.all('/api/*', checkSession);


function checkSession(req, res, next) {
    const path = req.path;

    console.log(routeConfigs[path]);
    console.log(routeConfigs[path]['method'].toLowerCase());
    console.log(req.method.toLowerCase());

    if (routeConfigs[path] && routeConfigs[path]['method'].toLowerCase() == req.method.toLowerCase()) {
        console.log('yes');
        if (config.useSession && routeConfigs[path]['isSession'] && !req.session.email) 
        {
            console.log("Session not present : url:" + path);
            res.status(401)
                .json({
                    status: 'failure',
                    message: 'Invalid session'
                });
            res.redirect('/');
        } 
        else 
        {
            console.log('yes');
            console.log(routeConfigs[path]['handler']);
            routeConfigs[path]['handler'].apply(this, arguments);
        }
    } else {
        console.log("Method not present : url:" + path);
        res.status(404)
            .json({
                status: 'failure',
                message: 'Method not found'
            });
    }
}

module.exports = router;