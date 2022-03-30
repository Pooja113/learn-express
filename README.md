# Getting Started with learn-express


This project contains the basics of expressJS

# Created the Simple Blog 
Used the simple bootstrap and HTML files<br>
Using handlebar<br>
	While using handlebar saw the first error :<br>
		- app.engine('handlebars', exphbs()); exhbs function<br/>
		- tried this code: <br/>
		app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"})); <br/>
		app.set('view engine', '.hbs');<br/>
		also remember save the files with the hbs extention rather than handlebars eg main.hbs<br>
  Second error on the same spot :<br>
		-const { engine } = require('express-handlebars'); <br>
		- app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}));<br>
   
   
