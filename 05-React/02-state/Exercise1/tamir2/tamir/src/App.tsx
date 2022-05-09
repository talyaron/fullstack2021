import { useState } from 'react';  // state לרשום את השורה הזאת כל פעם שמתמשים  
import './View/styles/Global.scss' //"scss" מושך את העיצוב מהדף הגלובלי של ה  

// איך האובייקט יראה לפי המשתנים שיש בתוכו
interface newone {
  text: string;
  img: string;
  id: string;
}

// הפונקצייה הכללית שמרונדרת על המסך
function App() {

  
  const [arr, setarr] = useState<Array<newone>>([])

  // פונקצייה שנותנת תעודת זהות מיוחדת כל אחד מהאובייקטים
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  // פונקציה שמוסיפה  את האובייקט למערך כל פעם שיש סובמיט
  function handleaddone(ev: any) {
    ev.preventDefault();
    const text = ev.target.text.value;
    const img = ev.target.img.value;
    const obj = { text, img, id: uid() }
    setarr([...arr, obj])
    console.log(arr);

  }

  // פונקציה שמוחקת אובייקט לפי לחיצה על כפתור מחיקה
  function handledelete(id: string) {
    // 
    setarr(arr.filter(img => img.id !== id))
  }

  function handleupdate(id: string) {
    const text:any = prompt('set new name');
    const index = arr.findIndex(one => one.id === id)
    arr[index].text = text
    setarr([...arr])
  }

  return (

    <div className="App">
      <form onSubmit={handleaddone} className='App__form'>
        <input type="text" name='text' id='text' placeholder='tour text here' />
        <input type="text" name='img' placeholder='your img url here' />
        <input type="submit" value="submit" />
      </form>

      <div className='App__grid'>
        
        {arr.map((one, i) => {
          return (
            <div key={i} className='App__card'>
              <img src={one.img} />
              <h3 className='App__text'>{one.text}</h3>
              <button onClick={() => handledelete(one.id)}>delete</button>
              <button onClick={() => handleupdate(one.id)}>update name</button>
            </div>
          )
        })}
      </div>

    </div>



  )
}
export default App;












