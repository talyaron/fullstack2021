import PaperPlaneIcon from '../Icons/PaperPlaneRight';
import {MessageInterface, MessageUserInterface} from '../Chat'
import {useContext, useRef, useState, LegacyRef} from 'react';
import axios from 'axios';
import { ChatContext } from '../../../Contexts/ChatContext';
interface DocsTabInterface {
    messageList: Array<MessageInterface>;
    setSentFile:Function;
    handleSendMessage: Function;
    dateFromObjectId: Function;
    sender: MessageUserInterface;
    recipient: MessageUserInterface;
    messageListRef: LegacyRef<HTMLUListElement>;
}
function DocsTab() {
    const {messageListRef,recipient, sender, dateFromObjectId,messageList,setSentFile, handleSendMessage} = useContext<DocsTabInterface>(ChatContext);
    
    const [fileResult, setFileResult]= useState<any>();
    const fileToUpload = useRef<any>();


    async function handleUploadFile() {

      let docLink:any;
      const myFile = fileToUpload?.current?.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(myFile);
        reader.onloadend = async () => {
            await setFileResult(`${reader.result}`)
            // console.log(fileResult, 'fileResult');
            const {data} = await axios.post('/api/messages/upload-file', {result: fileResult});
           docLink = data.docLink;
           await setSentFile(docLink.url);
           handleSendMessage();
        };
        
        
    }

    return (

        <div className='chat__chatWindowTabs'>
            <ul  ref={messageListRef} className="chat__chatWindow__messagesList">
            {messageList
                    ? messageList.map((message, i) => {
                        if(message.file !== ""){
                            if (recipient.userId === message?.recipient?.userId || recipient.userId === message?.sender?.userId) {
                                return (
                                    <li key={i} className={`${message?.sender?.userId === sender.userId ? `my` : ``}MessageCard`}>
                                      <div className='content'>
                                          <img className='Img' src={`${message.file}`} alt={`${message.file}`} />
                                      </div>
                                      
                                          <div className='fileUrl'>
                                              <a target="_blank" href={`${message.file}`}>
                                                  {message.file}
                                              </a>
                                          </div>
                                    
                                      <div className='time'>{dateFromObjectId(message._id).slice(15, 21)}</div>
                                      <div className={`${message?.sender?.userId === sender.userId ? `right` : `left`}-point`}></div>
                                  </li>
                              );
                            }
                        }
                      })
                    : null}
            </ul>
            <div className='chat__chatWindow__messageBar'>
                <input type='file' className='fileUpload' ref={fileToUpload} />
                <label>
                    <button
                        style={{display: 'none'}}
                        onClick={() => {
                            handleUploadFile();
                        }}
                        className='sendButton'
                    />
                    <PaperPlaneIcon />
                </label>
            </div>
        </div>
    );
}

export default DocsTab;
