import mongoose from "mongoose";
const messageSchema = mongoose.Schema(
    {
        conversationId :{
            type:String,
        },
        sender : {
            type : String,

        },
        text : {
            type : String,
            
        }
    },
    {timestamps:true}
);
export default mongoose.model("Message",messageSchema)