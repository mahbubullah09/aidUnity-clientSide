import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./detailsCard";


const Details = () => {

    const [data, setData ]= useState()


    const {id} = useParams();
    console.log(id);
   
    const details = useLoaderData();
    

    useEffect(()=>{

        const findData = details?.find(details=> details._id == id)
        setData(findData)
    },[id, details])
    


    return (
        <div className="max-w-5xl mx-auto">
             {/* <figure >
                <img className=" w-screen" src={data.picture} alt="" />
            </figure>
            <h2>{data.title}</h2> */}

            <DetailsCard data={data}></DetailsCard>

 

            
            
        </div>
    );
};

export default Details;