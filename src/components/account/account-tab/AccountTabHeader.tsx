const AccountTabHeader = () => {
  return (
    <div className="px-2 sm:px-5 border-b border-t-light pt-2 grow-0">
      <ul className="flex text-t-light gap-2">
        <li className="py-1 px-2 border-b-2 border-t-blue text-t-blue">
          <a className="" href="#">
            All
          </a>
        </li>
        <li className="py-1 px-2 border-b-2">
          <a className="" href="#">
            Vinova
          </a>
        </li>
        <li className="py-1 px-2 border-b-2">
          <a className="" href="#">
            Partner
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AccountTabHeader;
