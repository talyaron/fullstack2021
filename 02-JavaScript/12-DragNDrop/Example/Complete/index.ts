
const dragOne: HTMLElement = document.querySelector("#dragOne");
dragOne.ondragstart = handleDragStart;
dragOne.ondragend = handleDragEnd;


const pool: HTMLElement = document.querySelector("#pool");
pool.ondragover = handleDragOver;
pool.ondrop = handleDrop;



function handleDragStart(ev: DragEvent) {
    console.log(ev)
  if (ev.type === "dragstart") {
    // ev.dataTransfer.setData("text/plain", "Hi :-)");
    ev.dataTransfer.setData('text/plain',JSON.stringify({top:ev.offsetY, left:ev.offsetX}))
    console.log({top:ev.offsetY, left:ev.offsetX})
    ev.dataTransfer.setData("text/html", ev.target.outerHTML);

    //setiing an image for drag and drop
    // const img = new Image();
    // img.src = './img/flower.jpeg';
    // ev.dataTransfer.setDragImage(img,10,10)

    ev.dataTransfer.dropEffect = "copy";
  }
  console.log('drag start')
  console.log(ev.type)
}

function handleDragEnd(ev: DragEvent) {
  console.log(ev.timeStamp);
}

function handleDragOver(ev: DragEvent) {
  ev.preventDefault();
  //   console.log("drag over");
}

function handleDrop(ev: any) {
  ev.preventDefault();
  console.log("drop");
  console.log(ev.timeStamp);
  const offset = JSON.parse(ev.dataTransfer.getData("text/plain"));
  const elm = ev.dataTransfer.getData('text/html');
  console.log(offset);
  ev.target.innerHTML += elm;
  
  ev.target.children[1].style.top = `${ev.offsetY - offset.top}px`;
  ev.target.children[1].style.left = `${ev.offsetX - offset.left}px`;
  console.dir(ev.target)
  console.log(ev);
}
