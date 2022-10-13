import TextLineModel from '../models/textLineModel';

export const getTextList = async (req: any, res: any) => {
    try {
        if (!req.body) throw new Error('no req.body, getTextList -textCont -5');
        const textList = await TextLineModel.find({}, {_id: false, __v:false})
        res.send(textList);
    } catch (error) {
        console.log(error);
        res.send({error: error.message});
    }
};
export const addTextLine = async (req: any, res: any) => {
    try {
        if (!req.body) throw new Error('no req.body, addTextLine -textCont -5');
        const {textLine} = req.body;
        const newTextLine = new TextLineModel(textLine)
        const result = await newTextLine.save()
        if(result){
            res.send({ok: true});
        }
    } catch (error) {
        console.log(error);
        res.send({error: error.message});
    }
};
export const updateTextLine = async (req: any, res: any) => {
    try {
        if (!req.body) throw new Error('no req.body, addTextLine -textCont -5');
        const {textLineToUpdate} = req.body;
        const updatedTextLine = await TextLineModel.findOneAndUpdate({id:textLineToUpdate.id}, {text:textLineToUpdate.text}, {_id: false, __v:false})
        console.log(updatedTextLine, 'update result, server side');
        if(updatedTextLine){
            res.send({ok: true});
        }
    } catch (error) {
        console.log(error);
        res.send({error: error.message});
    }
};
export const deleteTextLine = async (req: any, res: any) => {
    try {
        if (!req.body) throw new Error('no req.body, addTextLine -textCont -5');
        const {textLineToDelete} = req.body;
        const deletedTextLine = await TextLineModel.findOneAndDelete({id: textLineToDelete.id})
        console.log(deletedTextLine, 'delete result, server side');
        if(deletedTextLine){
            res.send({ok: true});
        }
    } catch (error) {
        console.log(error);
        res.send({error: error.message});
    }
};
