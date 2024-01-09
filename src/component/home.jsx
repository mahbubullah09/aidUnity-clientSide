
import Cards from "./cards";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./Hooks/usePublic";
import axios from "axios";

const Home = () => {

  
  const [search, isSearch] = useState(false);
  console.log(search);

  const axiosPublic = useAxiosPublic();
  const { data: aids = [] } = useQuery({
    queryKey: ["aids"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/aids`);
      return res.data;
    },
   
  });


  // const { data: aids = [] } = useQuery({
  //   queryKey: ["aids",],
  //   queryFn: async () => {
  //     const res = await axios.get(`https://aid-unity-server.vercel.app/aids`);
  //     return res.data;
  //   },
  // });


  // console.log(data);
// const [aids, setAids] =useState([]);
//   useEffect(() => {
//     fetch('https://aid-unity-server.vercel.app/aids')
//     .then(res => res.json())
//     .then(data => setAids(data))
//   },[])

  const [filterData, setFilterData] = useState([]);

  const [inputText, setinputText] = useState("");


  const [category, setCategory] =useState([]);

  const handleSearch = () => {
    isSearch(true);
    const searchData = aids.filter((data) => data.category == inputText);
    setFilterData(searchData);
    console.log(searchData);
  };

  const handleChange = (event) => {
    setinputText(event.target.value);
  };

  return (
    <div>
      <div
        className="hero min-h-[55vh] md:max-w-2xl lg:max-w-4xl min-[1100px]:max-w-5xl mx-auto  "
        style={{
          backgroundImage: "url(https://i.ibb.co/RvcBPW0/banner.jpg)",
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
                className="  text-black pl-2 border border-solid border-[#DEDEDE] py-2 rounded-l-lg w-[270px]"
                type="text"
                onChange={handleChange} 
                placeholder="Search here...."
              />
              <button
                onClick={handleSearch}
                className="bg-[#FF444A] text-white py-2 px-4 rounded-r-lg"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {search ? (
        <Cards cardsData={filterData}></Cards>
      ) : (
        <Cards cardsData={aids} setCategory={setCategory} category={category}></Cards>
      )}
    </div>
  );
};

export default Home;
