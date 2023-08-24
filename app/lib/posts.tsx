import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

interface PostData {
  id: string;
  body: string;
  // Define other properties here based on your actual data structure
}

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostData: PostData[] = fileNames.map((fileName) => {
    // Remove .md from file name to get id

    const id: string = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      matterResult,
      // Add other properties from matterResult.data as needed
    };
  });

  // Sort allPostData by some criteria (example: by id in ascending order)
  allPostData.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    } else if (a.id > b.id) {
      return 1;
    } else {
      return 0;
    }
  });

  return allPostData;
}

export function getAllpostIds() {
  //use the file system
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    params: {
      id: fileName.replace(/\.md$/, "");
    }
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  //convert md to html
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  // combine the data with the id
  return {
    id,
    processedContent,
    ...matterResult.data,
  };
}
