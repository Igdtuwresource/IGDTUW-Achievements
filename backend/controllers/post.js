import User from "../models/User.js";
import Post from "../models/Post.js";
import ApiFeatures from "../utils/apifeatures.js";


//Create Post
export const createPost = async (req,res) => {
    try{
      const newPostData = {
        achievement_desc: req.body.achievement_desc,
        owner: req.user._id,
        issuer_organisation: req.body.issuer_organisation,
        issue_date: req.body.issue_date,
        tags: req.body.tags
      };
  
      const post = await Post.create(newPostData);
  
      const user = await User.findById(req.user._id);
  
      user.posts.unshift(post._id);
  
      await user.save();
      res.status(201).json({
        success: true,
        message: "Post created",
        post
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};


//Delete Post
export const deletePost = async (req,res) => {
    try {
        const post = await Post.findById(req.params.id);
    
        if (!post) {
          return res.status(404).json({
            success: false,
            message: "Post not found",
          });
        }
    
        if (post.owner.toString() !== req.user._id.toString()) {
          return res.status(401).json({
            success: false,
            message: "Unauthorized",
          });
        }
    
        await post.remove();
    
        const user = await User.findById(req.user._id);
    
        const index = user.posts.indexOf(req.params.id);
        user.posts.splice(index, 1);
    
        await user.save();
    
        res.status(200).json({
          success: true,
          message: "Post deleted",
        });
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};


//Like-Unlike Post
export const likeUnlikePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
    
        if (!post) {
          return res.status(404).json({
            success: false,
            message: "Post not found",
          });
        }
    
        if (post.likes.includes(req.user._id)) {
          const index = post.likes.indexOf(req.user._id);
    
          post.likes.splice(index, 1);
    
          await post.save();
    
          return res.status(200).json({
            success: true,
            message: "Post Unliked",
          });
        } else {
          post.likes.push(req.user._id);
    
          await post.save();
    
          return res.status(200).json({
            success: true,
            message: "Post Liked",
          });
        }
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};


//Update Achievement description
export const updatePostDesc = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
    
        const { achievement_desc, issuer_organisation , issue_date, tags } = req.body;

        if (!post) {
            return res.status(404).json({
              success: false,
              message: "Post not found",
            });
        }
      
        if (post.owner.toString() !== req.user._id.toString()) {
            return res.status(401).json({
              success: false,
              message: "Unauthorized",
            });
        }
    
        if (achievement_desc) {
          post.achievement_desc = achievement_desc;
        }
        if (issuer_organisation) {
          post.issuer_organisation = issuer_organisation;
        }
        if (issue_date) {
            post.issue_date = issue_date;
        }
        if (tags) {
            post.tags = tags;
        }
    
        await post.save();
        res.status(200).json({
          success: true,
          message: "Post updated",
          post
        });
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};


//Comment on Post
export const commentOnPost = async (req, res)=>{
    try {
        const post = await Post.findById(req.params.id);
    
        if (!post) {
          return res.status(404).json({
            success: false,
            message: "Post not found",
          });
        }
    
        let commentIndex = -1;
    
        // Checking if comment already exists
    
        post.comments.forEach((item, index) => {
          if (item.user.toString() === req.user._id.toString()) {
            commentIndex = index;
          }
        });
    
        if (commentIndex !== -1) {
          post.comments[commentIndex].comment = req.body.comment;
    
          await post.save();
    
          return res.status(200).json({
            success: true,
            message: "Comment Updated",
            post
          });
        } else {
          post.comments.push({
            user: req.user._id,
            comment: req.body.comment,
          });
    
          await post.save();
          return res.status(200).json({
            success: true,
            message: "Comment added",
            post
          });
        }
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};


//Delete Comment
export const deleteComment = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
    
        if (!post) {
          return res.status(404).json({
            success: false,
            message: "Post not found",
          });
        }
    
        // Checking If owner wants to delete
    
        if (post.owner.toString() === req.user._id.toString()) {
          if (req.body.commentId === undefined) {
            return res.status(400).json({
              success: false,
              message: "Comment Id is required",
            });
          }
    
          post.comments.forEach((item, index) => {
            if (item._id.toString() === req.body.commentId.toString()) {
              return post.comments.splice(index, 1);
            }
          });
    
          await post.save();
    
          return res.status(200).json({
            success: true,
            message: "Selected Comment is deleted",
          });
        } else {
          post.comments.forEach((item, index) => {
            if (item.user.toString() === req.user._id.toString()) {
              return post.comments.splice(index, 1);
            }
          });
    
          await post.save();
    
          return res.status(200).json({
            success: true,
            message: "Your Comment has deleted",
          });
        }
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};

export const getAllPostsfilter = async (req, res) => {
    const tagss = req.query.tags.split(',');
    //const apiFeatures = new ApiFeatures(Post.find(),req.query.tags.split(',')).filter();
    try {
        /*
        const posts = await Promise.all(apiFeatures.map(tags=>{
            return Post({tags:tags});
        }));
        */
        const list = await Promise.all(tagss.map(tags=>{
            return Post({tags:tags})
        }))
    
        res.status(200).json({
          success: true,
          list,
        });
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};


export const getallPost = async (req,res)=>{
    try{
        const post = await Post.find();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
    }
};