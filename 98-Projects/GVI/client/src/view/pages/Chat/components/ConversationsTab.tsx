import {LegacyRef,useContext} from 'react';
import {InputBase} from '@mui/material';
import {MessageInterface, MessageUserInterface} from '../Chat';
import PaperPlaneIcon from '../Icons/PaperPlaneRight';
import { ChatContext } from '../../../Contexts/ChatContext';

interface conversationsTabProps {
    messageListRef: LegacyRef<HTMLUListElement>;
    messageInputRef: any;
    recipient: MessageUserInterface;
    sender: MessageUserInterface;
    messageList?: Array<MessageInterface>;
    dateFromObjectId: Function;
    setSentMessage: Function;
    handleSendMessage: Function;
    sentMessage:any;
    
}
function ConversationsTab() {
const {messageInputRef,messageListRef, sentMessage,recipient, sender, dateFromObjectId, messageList, setSentMessage, handleSendMessage} = useContext<conversationsTabProps>(ChatContext)



    return (
        <div className='chat__chatWindowTabs'>
            <ul ref={messageListRef} className='chat__chatWindow__messagesList'>
                {messageList
                    ? messageList.map((message, i) => {
                          if (recipient.userId === message?.recipient?.userId || recipient.userId === message?.sender?.userId) {
                              return (
                                  <li key={i} className={`${message?.sender?.userId === sender.userId ? `my` : ``}MessageCard`}>
                                      <div className='content'>
                                          {message.text} {message.file && <img className='Img' src={`${message.file}`} alt={`${message.file}`} />}
                                      </div>
                                      {message.file && (
                                          <div className='fileUrl'>
                                              <a target="_blank" href={`${message.file}`}>
                                                  {message.file}
                                              </a>
                                          </div>
                                      )}
                                      <div className='time'>{dateFromObjectId(message._id).slice(15, 21)}</div>
                                      <div className={`${message?.sender?.userId === sender.userId ? `right` : `left`}-point`}></div>
                                  </li>
                              );
                          }
                      })
                    : null}
            </ul>
            <form onSubmit={(e)=>{handleSendMessage(e)}} className='chat__chatWindow__messageBar'>
                

                <input
                ref={messageInputRef}
                onChange={(ev:any) => {
                    setSentMessage(ev.target.value); 
                    // const userLanguage = window.navigator.userLanguage || window.navigator.language;
                    // if(ev.target.value)
                }}
                value={sentMessage}
                placeholder='Message'
                />

                <label>
                    <button
                    type='submit'
                        style={{display: 'none'}}
                        className='sendButton'
                        />
                    <PaperPlaneIcon />
                </label>
                        
            </form>
        </div>
    );
}

export default ConversationsTab;
