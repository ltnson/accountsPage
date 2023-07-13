import { NavLink } from 'react-router-dom';
import { OptionSeenArr } from '../../../model/types';

const AccountTabHeader = () => {
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
    <div className="px-2 sm:px-5 border-b border-t-neutral/d2 pt-[14px] grow-0">
      <div className="flex text-t-light gap-3">
        {optionSeenArr.map((op, index) => (
          <NavLink to={op.path} key={index}>
            {({ isActive }) => (
              <p
                className={`tab-header-select ${
                  isActive ? 'border-t-blue text-t-blue' : ''
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
