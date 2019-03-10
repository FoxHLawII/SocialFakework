import { PostModel, Post } from '../models/post.model';

export const getAllPosts = async () => {
  return await PostModel.find().select('_id title body');
}

export const insertPost = async (post: Post) => {
  return await new PostModel(post).save();
}