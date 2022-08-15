import {createContext} from 'react';


export const ChatContext = createContext<any>(null);
export const ChatProvider = ChatContext.Provider;
