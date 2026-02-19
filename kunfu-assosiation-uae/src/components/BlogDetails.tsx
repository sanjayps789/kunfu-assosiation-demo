import { memo } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs.js"; 

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <section className="section-padding text-center">
        <h2>Blog Not Found</h2>
      </section>
    );
  }

  return (
    <section className="blog-details pt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <motion.div
              className="blog_item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Blog Image */}
              <div className="blog_image">
                <figure>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="img-fluid"
                  />
                </figure>
              </div>

              {/* Blog Content */}
              <div className="blog_content">
                <div className="blog_meta mb-3">
                  <span>
                    <i className="fa-regular fa-user"></i> By{" "}
                    <a href="#">Admin</a>
                  </span>
                </div>

                <div className="entry-content">
                  {/* Title */}
                  <h2 className="mb-3">{blog.title}</h2>

                  {/* Intro */}
                  <p>{blog.intro}</p>

                  {/* Body Paragraphs */}
                  {blog.body.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}

                  {/* Conclusion */}
                  <blockquote>{blog.conclusion}</blockquote>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BlogDetails);
