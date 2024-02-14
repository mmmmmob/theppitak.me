import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import path from "path";

// Generate slug name at build time (return paths to /blogs/[slug])
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

// Main function for reading .mdx file and return content back
function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8",
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

// Main post display component
export default function Post({ params }: any) {
  const props = getPost(params);

  return (
    <div className="pb-32 pt-16">
      <article className="prose prose-lg prose-gray mx-auto dark:prose-invert">
        <div className="flex flex-col justify-between border-b border-black align-middle dark:border-white">
          <div className="mb-8">
            <Link href={"/blogs"}>
              <Button className="font-mono">
                <ChevronLeftIcon className="mr-1" />
                Back
              </Button>
            </Link>
          </div>
          <div className="flex justify-between">
            <h1>{props.frontMatter.title}</h1>
            <p className="italic">
              {props.frontMatter.date}, {props.frontMatter.year}
            </p>
          </div>
        </div>
        <div className="pt-2">
          <MDXRemote source={props.content} />
        </div>
      </article>
    </div>
  );
}

// Generate post metadata for SEO
export async function generateMetadata({ params }: any) {
  const blog = getPost(params);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}
