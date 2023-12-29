import _ from "loadsh";

export const WhyChoose2 = (props) => {
  const { title = '', description = '', image = ''} = props;

  return (
    <>
      <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
        <div className="service-item w-100 h-100 p-4 shadow rounded-0">
          <img src={image} alt={title} style={{ width: "70px " }} />
          <h4 className="mt-3 lh-base">{title}</h4>
          <p className="mb-0">{description}</p>
        </div>
      </div>
    </>
  );
};
