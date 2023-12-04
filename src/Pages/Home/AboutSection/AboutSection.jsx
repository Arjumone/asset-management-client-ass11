const AboutSection = () => {
  return (
    <div className=" mt-3">
        <h2 className=" my-2 text-center font-bold text-3xl">About Our Asset Management</h2>
      <div className="card lg:card-side bg-base-100 shadow-xl flex">
        <figure className="flex-1">
          <img
            src="https://i.ibb.co/g6vBzr6/construction-workers-sunset-53876-138180.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title font-bold">
            A Comprehensive Guide to Effective Asset Management
          </h2>
          <p>
            In the fast-paced world of finance and investment, strategic asset
            management plays a pivotal role in ensuring optimal returns and
            long-term financial success. Whether you are an individual investor
            or a seasoned financial professional, understanding the principles
            of effective asset management is key to navigating the ever-changing
            market landscape. Unlocking the Power of Asset Management: A Deep
            Dive In this blog post, we all delve into the intricacies of asset
            management, exploring key concepts, best practices, and innovative
            strategies to enhance your portfolios performance.
          </p>
          <div className="card-actions justify-end">
            <button className="btn bg-yellow-500 text-white">Contact with us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
