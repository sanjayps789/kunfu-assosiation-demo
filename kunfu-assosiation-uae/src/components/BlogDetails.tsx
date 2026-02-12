import { memo } from "react";
import { motion } from "framer-motion";

// Popular posts data
const popularPosts = [
  {
    img: "assets/img/blog/1.jpg",
    title: "Top 10 Karate Moves Every Beginner Should Master",
    date: "28 May , 2025",
    link: "/blog-details",
  },
  {
    img: "assets/img/blog/2.jpg",
    title: "The Secret to Perfecting Your Roundhouse Kick",
    date: "28 May , 2025",
    link: "/blog-details",
  },
];

// Categories data
const categories = [
  "Training Tips",
  "Techniques & Skills",
  "Fitness & Conditioning",
  "Health & Nutrition",
  "Martial Arts Philosophy",
];

// Comments data (nested)
const comments = [
  {
    name: "Robert Smith",
    avatar: "assets/img/blog/avator/1.jpg",
    date: "13 Jan, 2025",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus eget dolor non condimentum. Mauris ac augue eu ex elementum dictum. Quisque fermentum augue vel venenatis bibendum. Curabitur malesuada egestas varius. Maecenas maximus dapibus sem.",
    children: [
      {
        name: "John Doe",
        avatar: "assets/img/blog/avator/2.jpg",
        date: "13 Jan, 2025",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus eget dolor non condimentum. Mauris ac augue eu ex elementum dictum. Quisque fermentum augue vel venenatis bibendum. Curabitur malesuada egestas varius. Maecenas maximus dapibus sem.",
        children: [
          {
            name: "Mr Pitter",
            avatar: "assets/img/blog/avator/3.jpg",
            date: "13 Jan, 2025",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus eget dolor non condimentum. Mauris ac augue eu ex elementum dictum. Quisque fermentum augue vel venenatis bibendum. Curabitur malesuada egestas varius. Maecenas maximus dapibus sem.",
          },
        ],
      },
    ],
  },
];

// Memoized Popular Post item
const PopularPostItem = memo(({ post }: any) => (
  <li className="d-flex mb-3">
    <div
      className="pp_img me-3"
      style={{
        backgroundImage: `url(${post.img})`,
        width: "80px",
        height: "80px",
        backgroundSize: "cover",
      }}
    ></div>
    <div className="ppost_content">
      <p>
        <a href={post.link}>{post.title}</a>
      </p>
      <span>
        <i className="fa-regular fa-clock"></i> {post.date}
      </span>
    </div>
  </li>
));

// Memoized Comment Item (recursive for nested comments)
const CommentItem = memo(({ comment }: any) => (
  <li className="comment">
    <div className="single-comment">
      <div className="float-start com-img">
        <img src={comment.avatar} alt={comment.name} />
        <h4>
          <a href="#">{comment.name}</a>
        </h4>
        <span className="cdate">{comment.date}</span>
        <a href="#" className="creplay">
          <i className="ph ph-arrow-bend-up-left"></i>
        </a>
      </div>
      <div className="com-content">
        <p>{comment.text}</p>
      </div>
    </div>

    {comment.children && comment.children.length > 0 && (
      <ul className="children">
        {comment.children.map((child: any, idx: number) => (
          <CommentItem key={idx} comment={child} />
        ))}
      </ul>
    )}
  </li>
));

// BlogDetails Component
const BlogDetails = () => {
  return (
    <section className="blog-details section-padding">
      <div className="container">
        <div className="row">
          {/* Blog Content */}
          <div className="col-lg-8 col-12">
            <motion.div
              className="blog_item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="blog_image">
                <figure>
                  <img src="assets/img/blog/blog-details.jpg" alt="Blog" />
                </figure>
              </div>

              <div className="blog_content">
                <div className="blog_meta">
                  <span>
                    <i className="fa-regular fa-user"></i> By{" "}
                    <a href="#">Admin</a>
                  </span>
                  <span>
                    <i className="fa-regular fa-bookmark"></i>{" "}
                    <a href="#">Martial Arts</a>, <a href="#">Karate</a>
                  </span>
                </div>

                <div className="entry-content">
                  <h2>Strength-Building Exercises for Taekwondo</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce ut eros a arcu aliquam rhoncus. Curabitur ac mi ipsum.
                    Ut et risus tortor. Proin sagittis facilisis dictum. Donec
                    convallis egestas quam at vulputate. Sed sodales arcu sit
                    amet velit aliquet bibendum. Cras eu efficitur lorem. Proin
                    quis ligula pulvinar, sagittis enim a, laoreet magna. Etiam
                    vitae dapibus tortor. Curabitur porttitor massa eget sem
                    sollicitudin aliquam. Etiam efficitur lorem in libero
                    tristique, sit amet lacinia lorem bibendum. Nulla magna
                    nulla, porta vel mauris id, pulvinar tempor mi. Sed feugiat
                    bibendum diam sit amet sagittis.
                  </p>

                  <p>
                    Pellentesque iaculis eros id maximus tincidunt. Vivamus
                    commodo porta ipsum, aliquam suscipit nisi malesuada vitae.
                    Maecenas ullamcorper lorem a nulla finibus imperdiet. Sed
                    lobortis augue id odio bibendum, id commodo purus placerat.
                    Etiam scelerisque eros leo, at bibendum elit vestibulum nec.
                    Mauris ac ipsum fermentum, condimentum dui et, semper ipsum.
                    Praesent suscipit urna vitae nisi rutrum, nec ornare risus
                    consequat. Cras feugiat, mi in ultrices mollis, urna massa
                    facilisis est, et blandit justo lacus in neque. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Ut sit
                    amet orci augue. Mauris iaculis nisl ut quam rutrum, quis
                    tempus est accumsan. Nulla facilisi.
                  </p>

                  <blockquote>
                    Sed lobortis augue id odio bibendum, id commodo purus
                    placerat. Etiam scelerisque eros leo, at bibendum elit
                    vestibulum nec. Mauris ac ipsum fermentum, condimentum dui
                    et, semper ipsum. Praesent suscipit urna vitae nisi rutrum,
                    nec ornare risus consequat. Cras feugiat, mi in ultrices
                    mollis, urna massa facilisis est, et blandit justo lacus in
                    neque.
                  </blockquote>

                  <p>
                    Ut sit amet mollis magna, a dictum orci. Mauris consectetur,
                    justo et convallis mattis, mauris justo venenatis lorem, vel
                    lobortis est massa id ligula. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas. Nam id dignissim nisl, id varius metus. Etiam
                    sollicitudin eleifend nisl, sit amet auctor urna eleifend a.
                    Pellentesque maximus auctor varius. Sed euismod pretium
                    magna nec ornare. Ut mauris odio, dignissim euismod metus
                    sit amet, rutrum consequat arcu. Nulla in elit dolor.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Comments Section */}
            <motion.div
              className="comments"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="bdtitle">Comments - {comments.length}</h2>
              <ul className="comment-list">
                {comments.map((comment, idx) => (
                  <CommentItem key={idx} comment={comment} />
                ))}
              </ul>
            </motion.div>

            {/* Comment Form */}
            <motion.div
              className="comment-form mt-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h2 className="bdtitle">Comment</h2>
              <form>
                <div className="d-flex name_email mb-3">
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="form-control me-2"
                  />
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="form-control"
                  />
                </div>

                <input
                  type="url"
                  placeholder="Enter your Website"
                  className="form-control mb-3"
                />

                <textarea
                  placeholder="Write Message"
                  className="form-control mb-3"
                  rows={5}
                ></textarea>

                <input
                  type="submit"
                  id="submit"
                  value="Comment"
                  className="main_btn"
                />
              </form>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4 col-12 sidebar-area">
            {/* Search Widget */}
            <motion.div
              className="single-widget search_widget mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="widget-title">Search</h3>
              <form>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here"
                />
                <button type="submit">
                  <i className="ph ph-magnifying-glass"></i>
                </button>
              </form>
            </motion.div>

            {/* Category Widget */}
            <motion.div
              className="single-widget category-widget mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="widget-title">Category</h3>
              <ul>
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <a href="#">{cat}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Popular Posts Widget */}
            <motion.div
              className="single-widget ppost_widget"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="widget-title">Popular Posts</h3>
              <ul>
                {popularPosts.map((post, idx) => (
                  <PopularPostItem key={idx} post={post} />
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BlogDetails);
