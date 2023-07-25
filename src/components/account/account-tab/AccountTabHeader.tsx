import { NavLink } from 'react-router-dom';
import { OptionSeenArr } from '../../../model/types';

const AccountTabHeader = ({
  handlePageHeader,
}: {
  handlePageHeader: (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => void;
}) => {
  const optionSeenArr: OptionSeenArr = [
    {
      path: '/accounts/tab?limit=10&page=1',
      name: 'All',
    },
    { path: '/accounts/male', name: 'Male' },
    {
      path: '/accounts/female',
      name: 'Female',
    },
  ];

  return (
    <div className="px-2 sm:px-5 border-b border-add-neutral/d2 pt-[14px] grow-0">
      <div className="flex text-add-light gap-3">
        {optionSeenArr.map((op, index) => (
          <NavLink
            to={op.path}
            key={index}
            onClick={(e) => handlePageHeader(e, op.path)}
          >
            {({ isActive }) => (
              <p
                className={`tab-header-select ${
                  isActive ? 'border-add-blue text-add-blue' : ''
                }`}
              >
                {op.name}
              </p>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AccountTabHeader;
