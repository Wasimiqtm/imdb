import Image from "next/image";
import React from "react";

async function getBlogs() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=item`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}

export default async function Cms() {
  const blogs = await getBlogs();
  console.log(blogs);
  return (
    <div className=" max-w-6xl mx-auto py-6 grid grid-cols-4 gap-2">
      {blogs.items.map((blog: any) => (
        <div>
          <div className=" card">
            <div>
              {blogs.includes.Asset.map((a: any) => (
                <div key={a.sys.id}>
                  {blog.fields.image.sys.id == a.sys.id ? (
                    <Image
                      src={"https:" + a.fields.file.url}
                      alt=""
                      width={500}
                      height={300}
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>

            <h1 className=" font-bold text-lg text-gray-500">
              {blog.fields.title}
            </h1>
            <p className=" line-clamp-2">{blog.fields.description}</p>
            <p className=" font-semibold">$ {blog.fields.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
