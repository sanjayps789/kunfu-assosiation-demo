import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems, categories } from "../data/gallery";

const GalleryCollection = () => {
  const [active, setActive] = useState("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active]
  );

  return (
    <section className="gallery_collection w-100 h-auto py-5">
      <div className="container gallery_collection_wrapper">

        {/* Filter Buttons */}
        <div className="filter_btns_container w-100 d-flex align-items-center justify-content-start justify-content-lg-center gap-3 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`filter_btn text-capitalize ${active === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="row g-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                className="col-lg-3 col-md-4 col-6"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="gallery_img_wrapper">
                  <img
                    src={item.image}
                    alt={`Gallery ${item.id}`}
                    className="gallery_img"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default GalleryCollection;