import React from 'react';
import {InputBase} from '@mui/material'
import {MessageInterface} from '../Chat';
import PaperPlaneIcon from '../Icons/PaperPlaneRight';

interface conversationsTabProps {
    messageList?: Array<MessageInterface>;
    dateFromObjectId: Function;
    setSentMessage: Function;
    handleSendMessage: Function;
    }
function ConversationsTab(props: conversationsTabProps) {
    const { messageList, dateFromObjectId, setSentMessage, handleSendMessage } = props;
  return (
    <div className="chat__chatWindowTabs">
<ul className='chat__chatWindow__messagesList'>
                {messageList
                    ? messageList.map((message, i) => {
                          return (
                              <li key={i} className='messageCard'>
                                  {message.text}

                                  {dateFromObjectId(message._id)}
                              </li>
                          );
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
                    />
                    <PaperPlaneIcon />
                </label>
            </div>
    </div>
  )
}

export default ConversationsTab