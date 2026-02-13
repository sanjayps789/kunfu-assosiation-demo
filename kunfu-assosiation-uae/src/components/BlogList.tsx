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
      img: "assets/img/blog/martial-arts.webp",
      date: "18 August, 2025",
      author: "Admin",
      title: "How Martial Arts Support Youth Development in Schools",
      desc: "Introducing martial arts in schools plays an important role in supporting the physical, mental, and social development of young people.",
    },
    {
      id: 2,
      img: "assets/img/blog/community.webp",
      date: "18 August, 2025",
      author: "Admin",
      title: "Community Wellness Through Tai Chi and Qigong in the UAE",
      desc: "Community wellness initiatives play an important role in promoting healthier and more active lifestyles.",
    },
    {
      id: 3,
      img: "assets/img/blog/women-emp.webp",
      date: "18 August, 2025",
      author: "Admin",
      title: " Women in Martial Arts: Empowerment Through Training",
      desc: "Martial arts training offers powerful opportunities for women to build confidence, strength, and resilience.",
    },
    {
      id: 4,
      img: "assets/img/blog/discipline.webp",
      date: "18 August, 2025",
      author: "Admin",
      title: "Building Discipline & Mental Strength Through Martial Arts",
      desc: " Discipline and mental strength are essential qualities for personal development and long-term success.",
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
