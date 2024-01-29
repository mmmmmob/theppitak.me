import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";

const Blog = () => {
  const blogDirectory = "blogs";
  const files = fs.readdirSync(path.join(blogDirectory));
  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(blogDirectory, filename),
      "utf-8",
    );
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <main className="mx-24 flex h-[calc(100dvh-56px)] flex-col items-stretch pt-32">
      <section>
        <h2 className="text-5xl font-bold">Latest Posts</h2>
        <div className="mt-4 h-3/4 overflow-y-scroll">
          {blogs.map((blog) => (
            <Link href={"/blogs/" + blog.slug} passHref key={blog.slug}>
              <div className="flex justify-between gap-2 border-b border-b-black py-4 align-middle dark:border-b-white ">
                <div>
                  <h3 className="text-2xl font-semibold text-red dark:text-blue">
                    {blog.meta.title}
                  </h3>
                  <p className="font-normal italic">{blog.meta.description}</p>
                </div>
                <div className="my-auto text-2xl italic">
                  <p>
                    {blog.meta.date}, {blog.meta.year}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
