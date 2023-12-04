const PackagesSection = () => {
  return (
    <div className=" my-3">
        <h2 className=" text-center font-bold text-3xl my-2">Available Our Packages</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <div className="card bg-yellow-50 text-neutral-content">
        <div className="card-body items-center text-center">
          <img className=" rounded-full w-40 h-40" src="https://i.ibb.co/9H54yM5/group-worker-engineer-teamwork-people-mix-race-heavy-industry-standing-confidentselective-focus-cent.jpg" alt="" />
          <button className=" btn bg-yellow-600 text-white">Maximum 5 employees $5</button>
        </div>
      </div>
      <div className="card bg-yellow-50 text-neutral-content">
        <div className="card-body items-center text-center">
          <img className=" w-40 h-40 rounded-full" src="https://i.ibb.co/1rh1yKB/architects-discuss-with-head-engineer-about-construction-project-workplace-construction-site-64073-1.jpg" alt="" />
          <button className=" btn bg-yellow-600 text-white">Maximum 10 employees $8</button>
        </div>
      </div>
      <div className="card bg-yellow-50 text-neutral-content">
        <div className="card-body items-center text-center">
          <img className=" w-40 h-40 rounded-full" src="https://i.ibb.co/BzNB9fr/construction-concept-engineer-architect-working-construction-site-with-blue-print-255667-55602.jpg" alt="" />
          <button className=" btn bg-yellow-600 text-white">Maximum 20 employees $15</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PackagesSection;
