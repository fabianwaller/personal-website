import mongoose from 'mongoose';

import slugify from 'slugify';
import showdown from 'showdown';

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    slug: {
        type: String,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    editedAt: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    },
    markdown: {
        type: String
    },
    html: {
        type: String
    }
});

articleSchema.pre('save', function (next) {
    if (this.title) {
        this.slug = slugify(this.title, { lower: true, strict: true })
    }

    let markdownConverter = new showdown.Converter();
    this.html = markdownConverter.makeHtml(this.markdown);

    next();
});


export default mongoose.model('Article', articleSchema, "blog");