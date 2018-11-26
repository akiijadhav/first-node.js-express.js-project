const express = require('express'); // import express module in variable named express
const bodyParser = require('body-parser'); //to pass form data to contact page
const app = express(); //access to all methods in express such as routing & templating

// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query });
});

app.post('/contact', urlencodedParser, function(req, res){
  console.log(req.body);
    res.render('contact-success', {data: req.body });
});

app.get('/profile/:name', function(req, res) {
  const data = {age: 29, job: 'ninja', hobbie: ['eating', 'fighting', 'fishing']};
  res.render('profile', {person: req.params.name, data: data});
  // res.send('You are viewing the profile of ' + req.params.name);
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*',function(req,res){
  res.render('404');
});


app.listen(3000); //fire the app i.e initialize it

/* - -- - - - - - - - - - - - -- - - - - - - - - - - - - -- --- - - - - -*/
// let http = require('http');
// let fs = require('fs');

//automatically read & write using pipe()

//manually read&write
// myReadStream.on('data', function(chunk){
//   console.log('new chunk received:');
//   myWriteStream.write(chunk);
// });



/* Creating a Node.js server on your local host that listens to port 3000 */
// let server = http.createServer(function(req, res) {
//   console.log('request was made: ' + req.url);
//   if(req.url === '/home' || req.url === '/'){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/index.html').pipe(res);
//   } else if(req.url === '/contact'){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/contact.html').pipe(res);
//   } else if(req.url === '/api/ninjas'){
//     const ninjas = [{
//       name: 'Akhilesh',
//       job: 'Full-stack-developer',
//       age: '27'
//     },{
//       name: 'Yoshi',
//       job: 'Unemployed',
//       age: 28
//     }];
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify(ninjas));
//   }else {
//     res.writeHead(404, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/404.html').pipe(res);
//   }
  //sending json data on request
  // res.writeHead(200, {'Content-Type' : 'application/json'});
  // const myObj = {
  //   name: 'Akhilesh',
  //   job: 'Full-stack-developer',
  //   age: '27'
  // };
  // res.end(JSON.stringify(myObj));

  // Read the text/html send it to client side
  // let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  // myReadStream.pipe(res);
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('yo dawgs, now listening to port 3000');


//remove file and the directory the file was in
// fs.unlink('./stuff/writeMe.txt', function() {
//   fs.rmdir('stuff', function() {
//     console.log('directory removed');
//   });
// });


//make directory and file in it
// fs.mkdir('stuff', function() {
//   fs.readFile('readMe.txt', 'utf8', function(err, data) {
//     fs.writeFile('./stuff/writeMe.txt', data, (err) => {
//       if(err)throw err;
//     })
//   })
// });

//remove files from directory
// fs.unlink('writeMe.txt', function() {
//   console.log('file deleted');
// });

// console.log(readMe);
//synchronous so it will read entire file then run the code below

// let events = require('events');
// let util = require('util');
//
// const Person = function(name) {
//   this.name = name;
// }
//
// util.inherits(Person, events.EventEmitter);
//
// let james = new Person('james');
// let mary = new Person('mary');
// let ryu = new Person('ryu');
// let people = [james, mary, ryu];
//
// people.forEach(function(person){
//   person.on('speak', function(mssg) {
//     console.log(person.name + ' said: ' + mssg);
//   });
// });
//
// james.emit('speak', 'hey dudes');
// ryu.emit('speak', 'I want a carry');

// const myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent', function(mssg){
//   console.log(mssg);
// });
//
// myEmitter.emit('someEvent', 'the event was emitted');


// let stuff = require('./stuff');
//
// console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
// console.log(stuff.adder(5,6));
// console.log(stuff.adder(stuff.pi, 5));

// let time = 0

// let timer = setInterval(function(){
//   time += 2;
//   console.log(time + ' seconds have passed');
//   if(time > 5){
//     clearInterval(timer);
//   }
// }, 2000);

// find out the directory/file you are in?
// console.log(__dirname);
// console.log(__filename);

//normal function statement
// function sayHi() {
//   console.log('hi');
// }
//
// sayHi();

//callback function
// function callFunction(fun) {
//   fun();
// }
//
// let sayBye = function() {
//   console.log('bye');
// }
//
// callFunction(sayBye);
