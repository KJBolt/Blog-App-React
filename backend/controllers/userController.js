import User from '../model/User.js';
import Post from '../model/Post.js';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";


export const signup = async (req, res) => {
    try {
        const emailExist = await User.findOne({email:req.body.email});
        if(emailExist) {
            return res.status(404).json("User already exists");
        } else {
            const salt =  bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);
            const newUser = new User({
                ...req.body, password:hash
            });
            await newUser.save();
            return res.status(200).json(newUser);
        }
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

export const signin = async (req, res) => {
    try {
        const user = await User.findOne({email:req.body.email});
        if (!user) {
            return res.status(404).json("Email is incorrect");
        }
        const validatePassword = bcrypt.compareSync(req.body.password, user.password)
        if(!validatePassword) {
            return res.status(404).json({message: "Invalid credentials"});
        }

        const token = jwt.sign({id:user._id}, process.env.JWT)
        const {password, ...others} = user._doc
        return res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(others)
        
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
    
    
};

export const update = async (req, res) => {
    try {
        if (req.user.id === req.params.id) {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                ...req.body
            }, {new: true});
            return res.status(200).json(updatedUser);
        }
        return res.status(404).json({message: "Not authorized"});
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

export const deleteUser = async (req, res) => {
    try {
        if (req.user.id === req.params.id) {
            const existingUser = await User.findById(req.params.id);
            
            if(!existingUser) {
                return res.status(404).json({message: "User not found"});
            } else {
                await User.findByIdAndDelete(req.params.id)
                await Post.deleteMany({userId:req.params.id});
                return res.status(200).json({message: "Delete successful"})
            }
        }  
        return res.status(404).json({message: "Not authorized"});
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        return res.status(200).json(user)
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

export const like = async (req, res) => {
    try {
        const postid = await Post.findById(req.params.postId);
        const userid = postid.userId;

        // check if like already in Post array
        const likeExist = await Post.findOne({likes: userid})
        if (!likeExist) {
            await Post.findByIdAndUpdate(postid, {
                $addToSet: {likes:userid}
            })
            return res.status(404).json({message: "liked added"});
        } else {
            await Post.findByIdAndUpdate(postid, {
                $pull: {likes:userid}
            })
            return res.status(404).json({message: "liked removed"});
        }
        
        
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};


export const bookmark = async (req, res) => {
    try {
        const postId = await Post.findById(req.params.postId);
        const userId = postId.userId;

        // Check if post id already in array
        const exist = await User.findOne({bookmarks: userId});
        if(!exist) {
            await User.findByIdAndUpdate(userId, {
                $addToSet: {bookmarks: userId}
            })
            return res.status(200).json({message: "Bookmark added"});
        } else {
            await User.findByIdAndUpdate(userId, {
                $pull: {bookmarks: userId}
            })
            return res.status(200).json({message: "Bookmark removed"});
        }

    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

export const getUsers = async(req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(404).json({error:error.message});
    }
}