import { memo, useState } from "react";
import { createPortal } from "react-dom";

const VideoPopup = ({ videoId, triggerImage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button className="vbtn" onClick={() => setIsOpen(true)}>
        <img src={triggerImage} alt="Play Video" />
      </button>

      {/* Modal rendered via Portal */}
      {isOpen &&
        createPortal(
          <div
            className="video-modal-overlay"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="video-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="video-modal-close"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>

              {/* YouTube iframe */}
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>,
          document.body // <- renders at the very end of the page
        )}
    </>
  );
};

export default memo(VideoPopup);
