import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import moment from "moment";

const TaskCard = ({ tasks, playerType, onDropPlayer, index  }) => {

  const time = moment(tasks?.date, "YYYYMMDD").fromNow();

  const [{ isDragging }, dragRef] = useDrag({
    type: playerType,
    item: () => ({ ...tasks, index }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        onDropPlayer(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });


    const handleDelete = () => {
     
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
            fetch(`https://task-canvas-server.vercel.app/tasks/${tasks?._id}`,{
                method: 'DELETE'
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire("Deleted!", "Your file has been deleted.", "success");
                  window.location.reload();
                }
              });
          }
        });
      };
   

  return (
    <div>
      <div  ref={dragRef} className=" w-full my-4 whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
        <div className="mb-2 flex items-center gap-3">
          <h2 className="block flex-1 font-sans text-black text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased transition-colors hover:text-pink-500">
            {tasks?.title}
          </h2>
         
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
          {tasks?.description}
        </p>
        <div className="flex items-center gap-2 my-4">
        <div className="flex items-center gap-1">
          <FaClock  className="text-slate-800"/>
            <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
              {time}
            </p>
          </div>

        <div className="flex items-center gap-1">
          <FaStar  className="text-amber-400"/>
            <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
              {tasks?.priority}
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-end gap-5">
          <div className=" rounded-full bg-purple-500 py-1 px-2 align-baseline font-sans text-xs font-medium  text-white">
            <Link to={`/taskupdate/${tasks?._id}`}>
            <button className="mt-px">Edit</button>
            </Link>
          </div>
          <div className=" rounded-full bg-purple-500 py-1 px-2 align-baseline font-sans text-xs font-medium  text-white">
            <button onClick={handleDelete} className="mt-px">Delete</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
