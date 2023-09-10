"use client";

interface PostData {
  id: string;
  author: string;
  title: string;
  content: string;
  date: Date;
}

const callAPI = async () => {
  const response = await fetch("http://localhost:5266/Article");
  const data = await response.json();
  return data;
};

function Posts() {
  return (
    <div>
      <button onClick={callAPI}>Make API call</button>
    </div>
  );
}

export default Posts;
