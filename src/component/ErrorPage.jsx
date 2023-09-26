import {  Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className=" text-center h-full mt-44">
 <h4 className=" text-6xl font-bold">OOPS! <br />404</h4>
 <p className=" text-2xl font-bold">Not Found</p>
 <Link to={'/'}><button  className="rounded py-1 px-4 bg-orange-500 text-white">Go To Home</button></Link>
 
    </div>
  );
}