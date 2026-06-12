"use client"
import { Navbar } from "@/components/navbar";
import { ArrowUpRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

interface DevToUser {
  name: string;
  username: string;
  twitter_username: string | null;
  github_username: string | null;
  user_id: number;
}

interface DevToPost {
  canonical_url: string;
  collection_id: number | null;
  comments_count: number;
  cover_image: string;
  created_at: string;
  crossposted_at: string | null;
  description: string;
  edited_at: string | null;
  id: number;
  language: string;
  last_comment_at: string;
  path: string;
  positive_reactions_count: number;
  public_reactions_count: number;
  published_at: string;
  published_timestamp: string;
  readable_publish_date: string;
  reading_time_minutes: number;
  slug: string;
  social_image: string;
  subforem_id: number | null;
  tag_list: string[];
  tags: string;
  title: string;
  type_of: string;
  url: string;
  user: DevToUser;
}

const Blog = () => {
     const [posts, setPosts] = useState<DevToPost[]>([]);

  async function fetchPosts() {
    const res = await axios.get<DevToPost[]>(
      "https://dev.to/api/articles?username=mohd_fazil",
    );
    setPosts(res.data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="min-h-screen w-full  dark:bg-zinc-950 dark:text-white dark:bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-white text-zinc-900 bg-[radial-gradient(circle,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-size-[12px_12px] max-w-5xl mx-auto">
      <div className="max-w-5xl mx-auto px-8 relative mt-8 mb-12">
        <div className="mb-12">
          <Navbar />
        </div>
        <div>
          <div className="flex items-center justify-center">
            <h1 className="text-2xl lg:text-4xl font-semibold mb-8">
              Blogs
            </h1>
          </div>
          <div className="mx-auto flex-wrap max-w-6xl flex items-center justify-center  mb-12">
            {posts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow bg-background w-96 "
          >
            {post.cover_image && (
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tag_list.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 font-medium text-black bg-gray-100 text- rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-black dark:text-neutral-200 mb-2 line-clamp-2">
                {post.title}
              </h3>

              <p className="text-sm text-black dark:text-neutral-400 font-medium mb-3 line-clamp-3">
                {post.description}
              </p>

              <div className="flex items-center justify-between text-xs text-black dark:text-white">
                <span>{post.readable_publish_date}</span>
                <span>{post.reading_time_minutes} min read</span>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                <span>❤️ {post.public_reactions_count}</span>
                <span>💬 {post.comments_count}</span>
                <span className="font-medium text-gray-500">dev.to</span>
              </div>
            </div>
          </a>
        ))}
          </div>
          <div className="flex items-center justify-center pb-12 ">
            <div className="px-2 py-1 group border rounded-md flex items-center justify-center gap-2 cursor-pointer">
              Check More{" "}
              <ArrowUpRightIcon className="group-hover:rotate-45 transition-all ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
