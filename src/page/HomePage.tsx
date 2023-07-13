import Navbar from './Layout/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar title="Home Page" />
      <div className=" w-full rounded-md h-full flex pt-40 items-center flex-col  top-0 right-0 bg-white gap-20">
        <h1 className="text-3xl">Home Page </h1>
        <a className="text-xl text-t-blue" href="/accounts">
          Go to Accounts Page !!
        </a>
      </div>
    </>
  );
};

export default HomePage;
