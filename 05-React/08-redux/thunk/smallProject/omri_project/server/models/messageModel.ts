import mongoose from "mongoose";

export interface message {
    text: string,
    id: any,
    status: Status
}

export enum Status {
    IDLE = 'idle',
    LOADING = 'loading',
    FAILED = 'failed'
  }

export const messageSchema = new mongoose.Schema({
    messages: Array<message>
});

const messageModel = mongoose.model('messages', messageSchema);
export default messageModel;