var promise = require('bluebird');
var config = require('./config');


var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:amandeep123@postgres.c37fpgulvm6z.us-east-2.rds.amazonaws.com:5432/cloudsurvey';
var db = pgp(connectionString);


module.exports = {
  login: login,
  getStudentData:getStudentData,
  postStudentData: postStudentData,
  getCount:getCount,
  logout:logout,
  query:query
};
function query(req, res, next)
{
  var query = req.query.q;
    db.query(query)
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Executed query'
          });
      })
      .catch(function (err) {
        return next(err);
      });
}

function login(req, res, next) {

  const values = [req.body.email, req.body.password];
  console.log(values);
  var query = "select * from admin where email_id = $1 and password = $2 ;";
  db.query(query, values)
    .then(function (data) {
      if(data.length == 1) {
        setSession(req,req.body.email,data[0]['id']);
      }
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Executed query'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


function postStudentData(req,res,next)
{
  const values=[req.body.name,req.body.sid,req.body.cgpa,req.body.option];
  console.log(values);
  var query="insert into studentdata (name,sid,cgpa,option) values ($1,$2,$3,$4);";
  console.log(query);
  db.query(query,values)
    .then(function (data) {
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Executed query'
      });
    })

    .catch(function (err) {
      console.log("Error : "+err);
      res.status(500)
      .json({
        status: 'error',
        message: err
      });
      return next(err);
    });
}

function getStudentData(req,res,next)
{
  var query="select * from studentdata ORDER BY id ASC;";
  console.log(query);
  db.query(query)
    .then(function (data) {
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Executed query'
      });
    })

    .catch(function (err) {
      console.log("Error : "+err);
      return next(err);
    });
}

function getCount(req, res, next)
{
  var query="select option,count(*) from studentdata group by option order by option ASC;";
  console.log(query);
  db.query(query)
    .then(function (data) {
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Executed query'
      });
    })

    .catch(function (err) {
      console.log("Error : "+err);
      return next(err);
    });
}

function logout(req,res,next){
  console.log('inside');
  req.session.destroy(function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log('ppp');
    res.redirect('/');
  }
});
}

function setSession(req,email,user_id){
  // Login / Signup successful, set session
  req.session.email = email;
  req.session.user_id = user_id;
}