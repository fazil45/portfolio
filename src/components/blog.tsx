"use client";
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

const Blogs = () => {
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
    <>
      <div className="flex w-full flex-wrap items-stretch justify-center gap-4 p-3 sm:gap-6 sm:p-6">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-md overflow-hidden rounded-xl border border-neutral-700 bg-background transition-shadow hover:shadow-lg"
          >
            {post.cover_image && (
              <img
                src={post.cover_image}
                alt={post.title}
                className="h-40 w-full object-cover sm:h-48"
              />
            )}

            <div className="p-3 sm:p-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tag_list.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 font-mono dark:text-black  text-white bg-gray-100 text- rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <h3 className="mb-2 line-clamp-2 text-lg font-mono text-neutral-200">
                {post.title}
              </h3>

              <p className="mb-3 line-clamp-3 text-sm font-mono text-neutral-400">
                {post.description}
              </p>

              <div className="flex items-center justify-between gap-2 text-xs font-mono text-white">
                <span>{post.readable_publish_date}</span>
                <span>{post.reading_time_minutes} min read</span>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                <span>❤️ {post.public_reactions_count}</span>
                <span>💬 {post.comments_count}</span>
                <span className="font-mono text-gray-500">dev.to</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Blogs;
