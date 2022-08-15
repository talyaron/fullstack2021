import {LegacyRef, Ref, useEffect, useRef} from 'react';
import {useAppSelector, useAppDispatch} from '../app/hooks';

import {selectTextList, selectTextStatus, TextLine, deleteLine, updateLine, statusEnum} from '../features/Text/textSlice';
import {getTextListAsync} from '../features/Text/textAPI';
function TextList() {
    const textListRef:LegacyRef<any> = useRef<HTMLUListElement>();
    const textList = useAppSelector(selectTextList);
    const textStatus = useAppSelector(selectTextStatus);
    const dispatch = useAppDispatch();
    const handleDeleteText = (textLine: TextLine) => {
        dispatch(deleteLine(textLine));
    };
    const handleUpdateText = (textLine: TextLine, ev: any) => {
        console.log(ev);
        // textLine.text = ev.target.value;
        const updatedLine: TextLine = {text: ev.target.value, id: textLine.id};
        dispatch(updateLine(updatedLine));
    };
useEffect(()=>{
  console.log('textList changed');
  if(textListRef && textListRef.current){
    console.log(textListRef);
    textListRef.current.scrollTop = textListRef.current.scrollHeight; 
    console.dir(textListRef);
  }
  
},[textList])
    return (
      <div className='container'>
        <ul ref={textListRef} className='textList'>
            {textList
                ? textList.map((textLine: TextLine) => {
                  return (
                    <li key={textLine.id} className='textLine'>
                              <input
                                  onBlur={(ev) => {
                                    handleUpdateText(textLine, ev);
                                  }}
                                  defaultValue={textLine.text}
                                  />

                              <p
                                  onClick={() => {
                                    handleDeleteText(textLine);
                                  }}>
                                  &#215;
                              </p>
                          </li>
                      );
                    })
                    : null}
        </ul>
                    </div>
    );
}

export default TextList;
