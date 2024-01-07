import { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import axios from "axios";




import { AuthContext } from "../Provider/AuthProvider";
import AidsRow from "./AidsRow";

const ManageAids = () => {
  const { user } = useContext(AuthContext);
  const [aids, setaids] = useState([]);
  console.log(aids);
  const url = `http://localhost:5000/aids`;

  useEffect(() => {
    //     axios.get(url, { withCredentials: true }).then((res) => {
    //       setaids(res.data);
    //     });

    fetch(url)
      .then((res) => res.json())
      .then((data) => setaids(data));
  }, [url]);

  console.log(aids);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/aids/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Coupons has been deleted.", "success");
              const remaining = aids.filter(
                (aids) => aids._id !== id
              );

              setaids(remaining);
            }
          });
      }
    });
  };



  return (
    <div>
      {/* <Helmet>
        <title>RoomJet-My products</title>
      </Helmet> */}

      <div className="overflow-x-auto my-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>              
              <th>Category</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}

            {aids.map((aids) => (
              <AidsRow
                key={aids._id}
                aids={aids}
                handleDelete={handleDelete}
                // handleUpdate ={handleUpdate}
                
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAids;
