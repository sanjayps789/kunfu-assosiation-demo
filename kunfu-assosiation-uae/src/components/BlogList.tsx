import { memo } from "react";
import { motion } from "framer-motion";

// Blog item component
const BlogItem = memo(({ blog, index }: any) => (
  <motion.div
    key={blog.id}
    className="col-lg-6 col-md-6 col-12"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <div className="blog_item">
      <div className="row">
        <div className="col-xl-6 align-self-center">
          <motion.div
            className="blog_img"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={blog.img} alt="blog" />
          </motion.div>
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
            <p>{blog.desc}</p>
            <motion.a
              href="/blog-details"
              className="blog_btn"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Read More <i className="ph ph-arrow-right"></i>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
));

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      img: "assets/img/blog/blog1.png",
      date: "18 August, 2025",
      author: "Admin",
      title: "Martial Arts: A Journey of Discipline and Self-Discovery",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis imperdiet tortor sodales vulputate.",
    },
    {
      id: 2,
      img: "assets/img/blog/blog2.png",
      date: "18 August, 2025",
      author: "Admin",
      title: "Keeping heart at home while training",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis imperdiet tortor sodales vulputate.",
    },
    {
      id: 3,
      img: "assets/img/blog/blog3.png",
      date: "18 August, 2025",
      author: "Admin",
      title: "Martial Arts: A Journey of Discipline and Self-Discovery",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis imperdiet tortor sodales vulputate.",
    },
    {
      id: 4,
      img: "assets/img/blog/blog4.png",
      date: "18 August, 2025",
      author: "Admin",
      title: "Martial Arts: A Journey of Discipline and Self-Discovery",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis imperdiet tortor sodales vulputate.",
    },
  ];

  return (
    <section className="blog section-padding">
      <div className="container">
        <div className="row g-4">
          {blogs.map((blog, index) => (
            <BlogItem key={blog.id} blog={blog} index={index} />
          ))}

          {/* Pagination */}
          <div className="col-12 text-center">
            <div className="mart-pagination">
              <a href="#">
                <i className="fa-solid fa-arrow-left"></i>
              </a>
              {[1, 2, 3, 4, 5].map((page) => (
                <a
                  key={page}
                  href="#"
                  className={page === 3 ? "current" : ""}
                >
                  {page}
                </a>
              ))}
              <a href="#">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BlogList);
