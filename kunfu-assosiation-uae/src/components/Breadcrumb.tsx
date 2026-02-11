import { memo } from "react";

interface BreadcrumbProps {
  title?: string;
  background?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title = "Page Title", background = "" }) => {
  return (
    <section
      className="main_banner"
      style={{
        backgroundImage: background ? `url(${background})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Breadcrumb);
