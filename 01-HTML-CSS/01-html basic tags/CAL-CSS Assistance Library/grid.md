https://css-tricks.com/snippets/css/complete-guide-grid/   לינק חשוב לגריד

.container {     פקודות רגילות של גריד, כאן יש 5 עמודות ו- 3 שורות
    display: grid;
    grid-template-columns: repeat(5, 10vw);
    grid-template-rows: repeat(3, 25vh);
    justify-content: center;     הגריד באמצע על ציר האיקס במסך
    gap: 1.5vw;       מרווחים מכל הקופסאות
}

.container .box1{
    grid-column: span 5;  הקופסא הראשונה בקונטיינר מתרחבת כמו הדר על פני כל הגריד
}

.container .box2{
    grid-column: span 3;  הקופסא השניה בקונטיינר מתרחבת כמו  על פני כל 3 שורות
}

.container .box6{
    grid-column: span 3;  הקופסא השניה בקונטיינר מתרחבת כמו  על פני כל 3 שורות
}


.wrapper .div3{        לחילופין ניתן להשתמש בפקודות הבאות להרחיב את הקופסא בעמודות או שורות בתנאי שהגדרנו את wrapper כגריד
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 2;
}