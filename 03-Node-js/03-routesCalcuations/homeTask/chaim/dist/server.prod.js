"use strict";var books=[{img:"https://www.google.com/aclk?sa=l&ai=DChcSEwjNo-_KgqL2AhWxBnsKHR0kA_wYABANGgJsZQ&sig=AOD64_2BlnBRqhMj1MMSzddTjeU69F2DJw&adurl&ctype=5&ved=2ahUKEwi0kdPKgqL2AhUIsyoKHfHyCHEQvhd6BQgBEIEB",name:"תניא"},{img:"https://www.google.com/aclk?sa=l&ai=DChcSEwjflf-thKL2AhV7j2gJHSBTDH0YABADGgJ3Zg&sig=AOD64_116uRP0lB-p0c2BSU6GuEnsmWc_g&adurl&ctype=5&ved=2ahUKEwi00-6thKL2AhUu2-AKHXJtDM0Qvhd6BAgBEEs",name:"שלחן ערוך"},{img:"https://www.google.com/aclk?sa=l&ai=DChcSEwjflf-thKL2AhV7j2gJHSBTDH0YABADGgJ3Zg&sig=AOD64_116uRP0lB-p0c2BSU6GuEnsmWc_g&adurl&ctype=5&ved=2ahUKEwi00-6thKL2AhUu2-AKHXJtDM0Qvhd6BAgBEEs",name:"שיחות"},{img:"https://www.google.com/aclk?sa=l&ai=DChcSEwjtjdmghaL2AhXyg4MHHeA5C4EYABAJGgJlZg&sig=AOD64_1-vgLXtvrNdWw_hDffYhpAggYupw&adurl&ctype=5&ved=2ahUKEwje0r2ghaL2AhUyi_0HHaWRDNQQvhd6BAgBEFk",name:"מאמרים"},{img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fhe.wikipedia.org%2Fwiki%2F%25D7%2594%25D7%2599%25D7%2595%25D7%259D_%25D7%2599%25D7%2595%25D7%259D&psig=AOvVaw0lKUufkwdwC9VY8_GirHFb&ust=1646125782105000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiT4oiHovYCFQAAAAAdAAAAABAK",name:"היום יום"}],express=require("express"),app=express(),port=process.env.PORT||3e3;app.use(express.static("public")),app.get("/musclebooks",function(e,s){var g,t=e.query.books,i=e.query.img;t?(g=t.filter(function(e){return e.name===t}),s.send(g)):i?(t.filter(function(e){return e.img===i}),s.send(filterdimg)):s.send(t)}),app.listen(port,function(){console.log("server listen to port",port)});