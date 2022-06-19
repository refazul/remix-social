import { ComponentPropsWithoutRef } from "react";

function PostForm({ method = 'post', ...props }: ComponentPropsWithoutRef<'form'>) {
    return (
        <form method={method} {...props}>
            <input type="text" name="title" />
            <input type="text" name="body" />
            <button type="submit">Create Post</button>
        </form>
    )
}

export default PostForm;