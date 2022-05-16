import { useState } from 'react';  // state לרשום את השורה הזאת כל פעם שמתמשים  
import './View/styles/Global.scss' //"scss" מושך את העיצוב מהדף הגלובלי של ה 
import Footer from './View/Components/Footer';
import Heder from './View/Components/Heder';



// איך האובייקט יראה לפי המשתנים שיש בתוכו
export interface newone {
  text: string;
  img: string;
  id: string;
}

// הפונקצייה הכללית שמרונדרת על המסך
function App() {
  const [arr, setarr] = useState<Array<newone>>([])
  const [text, settext] = useState('')
  const [img, setimg] = useState('')

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
    const index = arr.findIndex(one => one.id === id)
    arr[index].text = text
    arr[index].img = img
    setarr([...arr])

  }
  function handleclick(id: string, text: string) {

    console.log(text);
    console.log(id);

  }
  return (

    <div className="App">
      <Heder />

      <form onSubmit={handleaddone} className='App__form'>
        <input type="text" name='text' id='text' placeholder='your text here' className='App__text' />
        <input type="text" name='img' placeholder='your img url here' className='App__img' />
        <input type="submit" value="submit" />
      </form>

      <div className='App'>
        {arr.map((one, i) => {
          return (
            <div className='App'>
              <div className='App__card' onClick={() => handleclick(one.id, one.text)}>
                <div key={i} className='App__item'>
                  <img src={one.img} />
                  <h3 className='App__text'>
                    {one.text}
                  </h3>
                </div>
                <div className='App__opt'>
                  <button onClick={() => handledelete(one.id)}>delete</button>
                  <button onClick={() => handleupdate(one.id)}>update name</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Footer settext={settext} setimg={setimg} />
    </div>
  )
}
export default App;















