"use strict";var express=require("express"),app=express();app.get("/",function(e,s){s.send("Hello World")}),app.listen(3e3);