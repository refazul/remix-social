import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getPosts, Post } from "~/services/posts.server";
import { Post as PostComponent } from "~/components/post";

type LoaderData = {
  posts: Post[]
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
      <ul>
        {
          posts.map(post => (
            <li key={post.title}>
              <PostComponent title={post.title}>
                {post.body}
              </PostComponent>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
