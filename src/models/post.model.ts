import { Schema, Document } from 'mongoose';

import mongoose from 'mongoose';

export interface Post extends Document {
    title: string;
    body: string;
}

const PostSchema = new Schema({
    title: {
        type: String,
        required: 'El titulo es requerido',
        minlength: 4,
        maxlength: 150
    },
    body: {
        type: String,
        required: 'El contenido es requerido',
        minlength: 4,
        maxlength: 2000
    }
});

export const PostModel = mongoose.model<Post>('Post', PostSchema);