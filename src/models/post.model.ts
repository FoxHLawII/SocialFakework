import mongoose from 'mongoose';

export interface Post {
    title: string;
    body: string;
}

export const PostSchema = new mongoose.Schema({
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

export const PostModel = mongoose.model('post', PostSchema);