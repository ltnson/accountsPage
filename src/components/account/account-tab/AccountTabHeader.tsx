import { NavLink, useLocation } from 'react-router-dom';
import { OptionSeenArr } from '../../../model/types';

const AccountTabHeader = () => {
  const { pathname } = useLocation();
  const optionSeenArr: OptionSeenArr = [
    {
      path: '/accounts/tab?limit=10&page=1',
      name: 'All',
      includes: '/accounts/tab',
    },
    { path: '/accounts/vinova', name: 'Vinova', includes: '/accounts/vinova' },
    {
      path: '/accounts/partner',
      name: 'Partner',
      includes: '/accounts/partner',
    },
  ];

  return (
    <div className="px-2 sm:px-5 border-b border-t-neutral/d2 pt-[14px] grow-0">
      <ul className="flex text-t-light gap-3">
        {optionSeenArr.map((op, index) => (
          <li
            key={index}
            className={`tab-header-select ${
              pathname.includes(op.includes) ? 'border-t-blue text-t-blue' : ''
            }`}
          >
            <NavLink to={op.path}>{op.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountTabHeader;
