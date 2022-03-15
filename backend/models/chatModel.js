/* 1-> It consist of chatName, name of the chat
  2-> isGroupChat , if the chatroom is grup or single type
  3-> users, list of users in chatroom
  4-> latestMessage, who messages  first 
  5-> groupAdmin , and who is the admin of group/chatroom

*/

const mongoose =require("mongoose");

const chatModel = mongoose.Schema(
    {
        chatName:{ type:String,trim:true },
        isGroupChat:{type:Boolean,default:false},
        users:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
            },
        ],
        latestMessage:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",
        },
        groupAdmin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    },
    {
        timestamps: true,
    }
);

const Chat = mongoose.model("Chat",chatModel);

module.exports = Chat;
