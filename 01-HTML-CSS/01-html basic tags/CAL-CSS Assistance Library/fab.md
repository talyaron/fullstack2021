כפתור יפה

.fab{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color:blue;
    color:white;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.52);
    position: fixed;
    bottom: 100px;
    right: 100px;
    transition: all .3s;
}

.fab:hover{
    background-color:rgb(28, 28, 248);
}

.fab:active{
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.52);
}

.fab>span{
    position: relative;
    top: 24%;
    left: 36%;
    transform: translate(38%, -50%);
    font-size: 30px;
    font-weight: 900;
}