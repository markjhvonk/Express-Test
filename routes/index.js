var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'laraveltest'
});

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Testing tasks!' });
});

router.get('/tasks', function(req, res, next) {
  
  var tasks = [];
    
  connection.query('SELECT * FROM tasks', function (err, rows, fields) {
    if (err) throw err;

    for(var k=0;k<rows.length;k++){
      tasks.push(rows[k].body)
    }
    // console.log(rows[0].body);
  });
  
  console.log(tasks);
  
  res.render('tasks', { tasksData: tasks });
  res.render('tasks', { title: 'Testing tasks!' });
});

module.exports = router