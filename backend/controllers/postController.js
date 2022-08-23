import Post from '../model/Post.js'
import User from '../model/User.js';


export const getPosts = async (req,res) => {
    try {
        const posts = await Post.aggregate([{$sample: {size:10}}]);
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(404).json({error:error.message});
    }
}


export const create = async (req,res) => {
    try {
        const userExist = await User.findById(req.user.id);
        if (!userExist) {
            return res.status(404).json({message: "User does not exist"});
        }
        const user = req.user.id;
        const post = new Post({userId:user, ...req.body});
        const newPost = await post.save();
        return res.status(200).json(newPost)
    } catch (error) {
    return res.status(404).json({error:error.message});
    }
};

export const deletePost = async (req,res) => {
    try {
        if (req.user.id === req.params.id) {
            await Post.findByIdAndDelete(req.params.id);
            return res.status(200).json({message: "Deleted Successfully"});
        }
        return res.status(404).json({message: "User can only delete your post"});
    } catch (error) {
        return res.status(404).json({error:error.message});
    }
};

export const update = async (req,res) => {
    try {
        if (req.user.id === req.params.id) {
            const updatePost = await Post.findByIdAndUpdate(req.params.id, {
                ...req.body
            }, {new:true})
            return res.status(200).json(updatePost);
        } else {
            return res.status(404).json({message: "You can only update your post"});
        }
    } catch (error) {
        return res.status(404).json({error:error.message});
    }
};



export const getPost = async (req,res) => {
    try {
        const post = await Post.find().populate({path:"userId", model:"User"});
        await Post.findByIdAndUpdate(req.params.id, {
            $inc:{views: 1}
        }, {new:true});
        return res.status(200).json(post);
    } catch (error) {
        return res.status(404).json({error:error.message});
    };
};

export const search = async (req, res) => {
    try {
        const query = req.query.query;
        const posts = await Post.find({title: {$regex:query, $options: "i"}});
        res.status(200).json(posts);
        if (!posts) {
            return res.status(404).json({message: "No result found"});
        };
        
    } catch (error) {
        return res.status(404).json({error:error.message});
    };
}