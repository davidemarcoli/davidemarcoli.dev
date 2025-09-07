import Link from "next/link";
import PostLayout from "@/components/post/layout";
import Grid from "@/components/post/grid";
import PostCard from "@/components/post/card";
// Import metadata from individual posts to populate the index
import { metadata as gmMetadata } from "./133/page";
import { metadata as m306 } from "./306/page";
import { metadata as p431 } from "./431/page";

interface PostItem {
  slug: string;
  title: string;
  description?: string | null;
}

const posts: PostItem[] = [
  {
    slug: "133",
    title: typeof gmMetadata.title === "string" ? gmMetadata.title : '',
    description: gmMetadata.description ?? null,
  },
  {
    slug: "306",
    title: typeof m306.title === "string" ? m306.title : '',
    description: m306.description ?? null,
  },
  {
    slug: "431",
    title: typeof p431.title === "string" ? p431.title : '',
    description: p431.description ?? null,
  }
];

export default function PostsPage() {
  return (
    <PostLayout title="Posts" description="Browse all posts and case studies.">
      <Grid cols={2}>
        {posts.map((post) => (
          <PostCard key={post.slug} className="transition-colors hover:border-neutral-700">
            <h3 className="text-xl font-semibold text-neutral-100 mb-2">
              <Link href={`/posts/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h3>
            {post.description ? (
              <p className="text-neutral-400 text-sm mb-4">{post.description}</p>
            ) : null}
            <div className="mt-auto">
              <Link
                href={`/posts/${post.slug}`}
                className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
              >
                Read more →
              </Link>
            </div>
          </PostCard>
        ))}
      </Grid>
    </PostLayout>
  );
}