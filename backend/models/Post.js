import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({

    image: {
        public_id: String,
        url: String,
    },
    
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
    },
    likes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
    ],
    
    comments: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
          comment: {
            type: String,
            required: true,
          },
        },
    ],
    achievement_desc: {
        type: String
    },
    issuer_organisation: {
        type: String
    },
    issue_date:{
        type: String
    },
    tags:{
        type: [String]
    }
    
});

export default mongoose.model("Post", PostSchema)



//achievement desc
//issuer organisation
//issue date
//tags
//user
//images
//comment