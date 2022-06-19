import { ActionFunction, json, LoaderFunction, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { createPost, getPosts, Post } from "~/services/posts.server";
import { Post as PostComponent } from "~/components/post";
import { PostForm } from "~/components/postform";

type LoaderData = {
  posts: Post[]
}

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const rawTitle = form.get('title');
  const rawBody = form.get('body');
  const post = await createPost({ title: rawTitle, body: rawBody })

  return redirect('/')
}

export const loader: LoaderFunction = async () => {
  const data: LoaderData = { posts: await getPosts() }
  return json(data);
}

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-3xl font-bold underline">Welcome to Remix</h1>
      <PostForm action='/?index' />
      <ul>
        {
          posts.map(post => (
            <li key={post.title}>
              <PostComponent header={post.title}>
                {post.body}
              </PostComponent>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
