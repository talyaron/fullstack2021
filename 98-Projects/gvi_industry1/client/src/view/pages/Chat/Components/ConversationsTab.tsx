import {LegacyRef} from 'react';
import {InputBase} from '@mui/material';
import {MessageInterface, MessageUserInterface} from '../Chat';
import PaperPlaneIcon from '../Icons/PaperPlaneRight';

interface conversationsTabProps {
    messageListRef: LegacyRef<HTMLUListElement>;
    recipient: MessageUserInterface;
    sender: MessageUserInterface;
    messageList?: Array<MessageInterface>;
    dateFromObjectId: Function;
    setSentMessage: Function;
    handleSendMessage: Function;
}
function ConversationsTab(props: conversationsTabProps) {
    const {messageListRef,recipient, sender, messageList, dateFromObjectId, setSentMessage, handleSendMessage} = props;


   
    return (
        <div className='chat__chatWindowTabs'>
            <ul ref={messageListRef} className='chat__chatWindow__messagesList'>
                {messageList
                    ? messageList.map((message, i) => {
                          if (recipient.userId === message?.recipient?.userId || recipient.userId === message?.sender?.userId) {
                              return (
                                  <li key={i} className={`${message?.sender?.userId === sender.userId ? `my` : ``}MessageCard`}>
                                      <div className='content'>{message.text}</div>

                                      <div className='time'>{dateFromObjectId(message._id).slice(15, 21)}</div>
                                      <div className={`${message?.sender?.userId === sender.userId ? `right` : `left`}-point`}></div>
                                  </li>
                              );
                          }
                      })
                    : null}
            </ul>
            <div className='chat__chatWindow__messageBar'>
                <InputBase
                    onChange={(ev) => {
                        setSentMessage(ev.target.value);
                    }}
                    placeholder='Message'
                />

                <label>
                    <button
                        style={{display: 'none'}}
                        onClick={(ev) => {
                            handleSendMessage(ev);
                        }}
                        className='sendButton'
                    />
                    <PaperPlaneIcon />
                </label>
            </div>
        </div>
    );
}

export default ConversationsTab;
