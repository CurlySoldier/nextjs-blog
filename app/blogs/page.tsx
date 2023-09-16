"use client";
import * as React from "react";
interface PostData {
  id: string;
  author: string;
  heading: string;
  contents: string;
  date: Date;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = React.useState<PostData[]>([]);

  const callAPI = async () => {
    try {
      const response = await fetch("http://localhost:5266/Article");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("API call error:", error);
    }
  };

  return (
    <div>
      <button onClick={callAPI}>Make API call</button>
      <div>
        {posts.map((post: PostData) => (
          <div key={post.id}>
            <h3>{post.heading}</h3>
            <p>{post.contents}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
