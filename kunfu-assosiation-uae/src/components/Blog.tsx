import { memo } from "react";
import { motion } from "framer-motion";

const blogs = [
  { img: "assets/img/blog/blog1.png", date: "18 August, 2025", author: "Admin", title: "Martial Arts: A Journey of Discipline and Self-Discovery", text: "Lorem ipsum..." },
  { img: "assets/img/blog/blog2.png", date: "18 August, 2025", author: "Admin", title: "Keeping heart at home while training", text: "Lorem ipsum..." },
  { img: "assets/img/blog/blog3.png", date: "18 August, 2025", author: "Admin", title: "Martial Arts: A Journey of Discipline and Self-Discovery", text: "Lorem ipsum..." },
  { img: "assets/img/blog/blog4.png", date: "18 August, 2025", author: "Admin", title: "Martial Arts: A Journey of Discipline and Self-Discovery", text: "Lorem ipsum..." },
];

const BlogItem = memo(({ blog, index }: any) => (
  <motion.div
    className="col-lg-6 col-md-6 col-12"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
  >
    <div className="blog_item">
      <div className="row">
        <div className="col-xl-6 align-self-center">
          <div className="blog_img">
            <img src={blog.img} alt="img" />
          </div>
        </div>
        <div className="col-xl-6 align-self-center">
          <div className="blog_content">
            <div className="blog_meta">
              <span>
                <i className="fa-regular fa-clock"></i> {blog.date}
              </span>
              <span>
                <i className="fa-regular fa-user"></i>{" "}
                <a href="#">{blog.author}</a>
              </span>
            </div>
            <h3>
              <a href="/blog-details">{blog.title}</a>
            </h3>
            <p>{blog.text}</p>
            <a href="/blog-details" className="blog_btn">
              Read More <i className="ph ph-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
));

const Blog = () => {
  return (
    <section className="blog pb100">
      <div className="container">
        <motion.div
          className="section-heading text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="sub_title">Latest News</span>
          <h2>
            Read our latest news & articles <br /> about martial arts
          </h2>
          <img src="assets/img/shapes/title.svg" alt="img" />
        </motion.div>

        <div className="row g-4">
          {blogs.map((blog, index) => (
            <BlogItem key={index} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Blog);
