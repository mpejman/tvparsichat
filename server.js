var express = require('express');
var app = express();
var socket = require('socket.io');
var http = require('http');

require('dotenv').config();
var cors = require('cors');
app.use(cors());

var server = http.createServer(app);
var io = socket(server);
//var server = app.listen(3000);

var server = 'https://tvparsichat.herokuapp.com/greeting';
//var PORT = process.env.PORT || 3000; 
//var router = require('./router');
//app.use(router);
app.get('/', (req, res) => {
	res.send ("Hello World")
})

app.get('/greeting', (req, res) => {
	res.json ({ greeting: 'Hello' })
})

app.listen(process.env.PORT || 3000, () =>    
	console.log ('you are connected!'))
//express()
//  .listen(PORT, () => console.log(`Listening on ' +PORT))
  
console.log ('1. my socket server is running');
app.use(express.static('public'));
//app.use(express.json({limit: '1mb'}));'


var Datastore = require('nedb');
var database = new Datastore('database.db');
database.loadDatabase();

//var userArray = [[], [], [], [], []]
//var users = {};
var socketId = ""; 
//var user = [];
names = [];
var users1 = [];
var users2 = [];
var users3 = [];
var users4 = [];
var users5 = [];
var clients = 0;
io.on('connection', socket => 
{	
	var timestamp = Date.now();
	socketId = socket.id;
	console.log('3. new connection ' + socketId);

	//socket.emit('wCome', 'welcome to ');	
	//console.log('5 user after connection ');
	socket.emit('ujoin', (socket.id));
	console.log('7.9 the main.js will wait here until submit of chat.html is clicked ');

	socket.on('setUserNam1', (data) => {
		  console.log('5. ' +data.userName);
		  console.log(users1.indexOf(data.userName))
		  if(users1.indexOf(data.userName) > -1){
		     console.log('6. ' +data.userName +' username is taken! try some other name.');
			 socket.emit('userExists', ' username ' +'"' +data.userName +'"' +' is taken! Try some other name.');
		  } else {
		     console.log('8. ' +data.userName);
			 users1.push(data.userName);
			 socket.emit('userSet', data);
			 socket.emit('wCome', data);	
		  }
	   });	 
	 
	socket.on('setUserNam2', (data) => {
		  console.log('5. ' +data.userName);
		  console.log(users2.indexOf(data.userName))
		  if(users2.indexOf(data.userName) > -1){
		     console.log('6. ' +data.userName +' username is taken! try some other name.');
			 socket.emit('userExists', ' username ' +'"' +data.userName +'"' +' is taken! Try some other name.');
			 //socket.emit('userExists', data.userName);
			  //console.log('7. ' +data.userName);
		  } else {
		     console.log('8. ' +data.userName);
			 users2.push(data.userName);
			 socket.emit('userSet', data);
			 socket.emit('wCome', data);	
		  }
	   });	 
	   
	socket.on('setUserNam3', (data) => {
		  console.log('5. ' +data.userName);
		  console.log(users3.indexOf(data.userName))
		  if(users3.indexOf(data.userName) > -1){
		     console.log('6. ' +data.userName +' username is taken! try some other name.');
			 socket.emit('userExists', ' username ' +'"' +data.userName +'"' +' is taken! Try some other name.');
			 //socket.emit('userExists', data.userName);
			  //console.log('7. ' +data.userName);
		  } else {
		     console.log('8. ' +data.userName);
			 users3.push(data.userName);
			 socket.emit('userSet', data);
			 socket.emit('wCome', data);	
		  }
	   });	 	   
	   
	socket.on('setUserNam4', (data) => {
		  console.log('5. ' +data.userName);
		  console.log(users4.indexOf(data.userName))
		  if(users4.indexOf(data.userName) > -1){
		     console.log('6. ' +data.userName +' username is taken! try some other name.');
			 socket.emit('userExists', ' username ' +'"' +data.userName +'"' +' is taken! Try some other name.');
			 //socket.emit('userExists', data.userName);
			  //console.log('7. ' +data.userName);
		  } else {
		     console.log('8. ' +data.userName);
			 users4.push(data.userName);
			 socket.emit('userSet', data);
			 socket.emit('wCome', data);	
		  }
	   });	 

	socket.on('setUserNam5', (data) => {
		  console.log('5. ' +data.userName);
		  console.log(users5.indexOf(data.userName))
		  if(users5.indexOf(data.userName) > -1){
		     console.log('6. ' +data.userName +' username is taken! try some other name.');
			 socket.emit('userExists', ' username ' +'"' +data.userName +'"' +' is taken! Try some other name.');
			 //socket.emit('userExists', data.userName);
			  //console.log('7. ' +data.userName);
		  } else {
		     console.log('8. ' +data.userName);
			 users5.push(data.userName);
			 socket.emit('userSet', data);
			 socket.emit('wCome', data);	
		  }
	   });	 
 
	socket.on ("userJoin", (dat) => {		
		console.log('7.7. ' +dat.userName);
		//users1[socketId] = dat.userName;
		//console.log('8.5. ' +users1[socketId]);		
		socket.join(dat.roomName);
		console.log("7.8. sid " +dat.socketid);
		//to remove duplication
		//io.emit("userList", [...new set(object.values(users))]);
		//loop users [1], [2], ...
	})		   	

	socket.on ("userLeave", (dat) => {		
		console.log('31. ' +dat.socketid);
		var i;
		var j;
		var len;
		//var str
		if (dat.roomName === 'room1' && users1.indexOf(dat.userName) > -1) {
		    socket.to(dat.roomName).emit('uLeave', (dat)); 
			socket.emit('uLeave', (dat));			
			len = users1.length
			console.log('32. len ' +len);							
			
function removeItem(users){		
			
			for(i = 0; i < len; i++){
			//for(val : names) {
				if(users[i] == dat.userName){
					console.log('33. i ' +i);
					// shifting elements					
					len = len - i;
					//users = users.join("\n");	
					console.log('34. users ' +users);
					console.log('35. len ' +len);
					for(j = i; j <= len; j++){
						//delete users[j];
						console.log('36. ' +j);
						//users[j] = users[j+1];
						names[i] = users[j+1];
						i = j + 1;						
					}					
					console.log('37. users ' +users);		
					
					//users = users.join(",");
					names.length = names.length - 1;
					console.log('38. str ' +names);						
					break;
				}					
				names[i] = users[i];				
			}				
			console.log('39. names ' +names);					
			names = names.join(",");
			console.log('40. str ' +names);						
			let lchar = names.charAt(names.length-1);
			console.log('41. lastchar ' +lchar);
			
			//let lchar = names.charAt(names.length-1);
			console.log('42. lastchar ' +lchar);
			if (lchar == ",") {
						names = names.substring(0, names.length - 1);
			}
			names = names.split(",");	
			//users = names;
			return names;
		}
}
			users = removeItem(users1) 
			names = "";
			
		if (dat.roomName === 'room2' && users2.indexOf(dat.userName) > -1) {
		//debugger
		    socket.to(dat.roomName).emit('uLeave', (dat)); 
			socket.emit('uLeave', (dat));
			len = users2.length
			for(i = 0; i < len; i++){
				if(users2[i] == dat.userName){
					console.log('36. ' +i);
					// shifting elements					
					len = len - i;
					for(j = i; j <= len; j++){
						users[j] = users2[j+1];
						i = j + 1;
						console.log('37. ' +j);
					}
					break;
				}
			}		
		}	
		if (dat.roomName === 'room3' && users3.indexOf(dat.userName) > -1) {
		    socket.to(dat.roomName).emit('uLeave', (dat)); 
			socket.emit('uLeave', (dat));
			len = users3.length
			for(i = 0; i < len; i++){
				if(users3[i] == dat.userName){
					console.log('36. ' +i);
					// shifting elements					
					len = len - i;
					for(j = i; j <= len; j++){
						users[j] = users3[j+1];
						i = j + 1;
						console.log('37. ' +j);
					}
					break;
				}
			}					
		}	
		if (dat.roomName === 'room4' && users4.indexOf(dat.userName) > -1) {
		    socket.to(dat.roomName).emit('uLeave', (dat)); 
			socket.emit('uLeave', (dat));
			len = users4.length
			for(i = 0; i < len; i++){
				if(users4[i] == dat.userName){
					console.log('36. ' +i);
					// shifting elements					
					len = len - i;
					for(j = i; j <= len; j++){
						users[j] = users4[j+1];
						i = j + 1;
						console.log('37. ' +j);
					}
					break;
				}
			}			  		
		}	
		if (dat.roomName === 'room5' && users5.indexOf(dat.userName) > -1) {
		    socket.to(dat.roomName).emit('uLeave', (dat)); 
			socket.emit('uLeave', (dat));
			len = users5.length
			for(i = 0; i < len; i++){
				if(users5[i] == dat.userName){
					console.log('36. ' +i);
					// shifting elements					
					len = len - i;
					for(j = i; j <= len; j++){
						users[j] = users5[j+1];
						i = j + 1;
						console.log('37. ' +j);
					}
					break;
				}
			}	 			
		}			
	})
	
	    socket.on('mainChatText1', (dat) => {
			if (users1.indexOf(dat.userName) > -1 && dat.roomName === 'room1') {
				socket.join(dat.roomName);
				socket.to(dat.roomName).emit('mainChatText1', dat); 
				socket.emit('mainChatText1', dat);
			}
		});	

	    socket.on('mainChatText2', (dat) => {
			if (users2.indexOf(dat.userName) > -1 && dat.roomName === 'room2') {
				socket.join(dat.roomName);
				socket.to(dat.roomName).emit('mainChatText2', dat); 
				socket.emit('mainChatText1', dat);
			}
		});	
	
	    socket.on('mainChatText3', (dat) => {
			if (users3.indexOf(dat.userName) > -1 && dat.roomName === 'room3') {
				socket.join(dat.roomName);
				socket.to(dat.roomName).emit('mainChatText3', dat); 
				socket.emit('mainChatText1', dat);
			}
		});	
	
	    socket.on('mainChatText4', (dat) => {
			if (users4.indexOf(dat.userName) > -1 && dat.roomName === 'room4') {
				socket.join(dat.roomName);
				socket.to(dat.roomName).emit('mainChatText4', dat); 
				socket.emit('mainChatText1', dat);
			}
		});	
		
	    socket.on('mainChatText5', (dat) => {
			if (users5.indexOf(dat.userName) > -1 && dat.roomName === 'room5') {
				socket.join(dat.roomName);
				//socket.to(dat.roomName).emit('mainChatText5', dat); 
				socket.emit('mainChatText1', dat);
			}
		});	

		app.get('/api', (req, res) => {
		console.log('21. get ');
		database.find({}, (err, data) => {
		if (err){
			response.end;
			console.log('err ');
			return;
		}
		
		console.log('22. database is found');
		//response.json(data);
	})	
	//io.socket.emit('broadcast', {description: clients +' client connected'});
	
   clients++;
   //io.sockets.emit('bConn',{ description: clients + ' clients connected!'});
   
   socket.on('disconnect', function () {
      clients--;
      //socket.broadcast.emit('bDisc',{ description: clients + ' clients connected!'});
   });

   	socket.on('writeDb', (data) => {
	  console.log ('25.  ' +data.Name);
	  //users1[socket.id] = data.Name;

	//clients++;
	  //created array of users
	  console.log ('26. users ' +users1[socket.id]);
	  socket.join("General Chat");
	  console.log("27. Users Object after connection: ", users1);

	  //io.emit("userList", users1);
	  data.socketId = socket.id
	  database.insert(data);	
	})

/*	
	socket.on('userLeft', lvr => {
		console.log('28. lvrSid ' +lvr);
		//console.log(lvr);
		if (dat.roomName != 'room5') {
			socket.broadcast.emit('uLeave', (dat));
		else
			socket.emit('uLeave', (dat));
		}
		//socket.broadcast.emit('userLeft', lvr);
		socket.emit('userLeft', lvr);
	});		
*/
	
	/*
	socket.on("disconnect", () => {
		delete 1[socket.id];
		//io.emit("userList", [...new set(object.values(users))]);
		console.log("Users after disconection: ", users1);
	});
	*/
});		  
});
