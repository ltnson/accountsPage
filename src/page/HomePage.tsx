import { Link } from 'react-router-dom';
import Navbar from './Layout/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className=" w-full rounded-md h-full flex pt-40 items-center flex-col  top-0 right-0 bg-white gap-20">
        <h1 className="text-3xl">Home Page </h1>
        <Link className="text-xl text-t-blue" to="/accounts">
          Go to Accounts Page !!
        </Link>
      </div>
    </>
  );
};

export default HomePage;
