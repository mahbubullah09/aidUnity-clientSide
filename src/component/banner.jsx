const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[45vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/RvcBPW0/banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-[#FFFFFFF2] bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
        <div className=" text-center  ">
        <h2 className="text-4xl text-[#0B0B0B] font-semibold">
          I Grow By Helping People In Need
        </h2>
        <div className="mt-4">
          <input
            className=" pl-2 border border-solid border-[#DEDEDE] py-2 rounded-l-lg w-[270px] "
            type="text"
            placeholder="Search here...."
          />
          <button className=" bg-[#FF444A] text-white py-2 px-4 rounded-r-lg ">
            Search
          </button>
        </div>
      </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;
