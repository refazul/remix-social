import { Props } from "./types";

function PostForm({ error, fields, method = 'post', ...props }: Props) {
    return (
        <form method={method} {...props}>
            <input type="text" name="title" defaultValue={fields?.title} />
            {error?.fieldErrors?.title && <p className="text-red-500">{error.fieldErrors.title}</p>}
            <input type="text" name="body" defaultValue={fields?.body} />
            {error?.fieldErrors?.body && <p className="text-red-500">{error.fieldErrors.body}</p>}
            <button type="submit">Create Post</button>
        </form>
    )
}

export default PostForm;