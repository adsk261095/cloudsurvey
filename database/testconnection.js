var options = {
  error: function (error, e) {
      if (e.cn) {
          // A connection-related error;
          console.log("CN:", e.cn);
          console.log("EVENT:", error.message);
      }
  }
};

var pgp = require("pg-promise")(options);

var connectionString = 'postgres://postgres:postgres.c37fpgulvm6z.us-east-2.rds.amazonaws.com:5432/coudsurvey'; 
//'postgres://nathamouni:test1234@studentconnect.cjut0fzec8pz.ap-south-1.rds.amazonaws.com:5432/studentconnect';

var db = pgp(connectionString);

db.connect()
  .then(function (obj) {
      obj.done(); // success, release connection;
      console.log("Pass");
  })
  .catch(function (error) {
      console.log("ERROR:", error.message);
  });
