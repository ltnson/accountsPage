import { useContext } from 'react';
import { AccountContext } from '../../../../store/AccountContext';
import { useLocation } from 'react-router-dom';

import FilterSVG from '../../../../assets/SVG/accountsSVG/FilterSVG';
import CloseSVG2 from '../../../../assets/SVG/accountsSVG/CloseSVG2';
import FilterActionSVG from '../../../../assets/SVG/accountsSVG/FilterActionSVG';

const TabHeadFilter = () => {
  const { setShowArr, showArr, totalTab } = useContext(AccountContext);
  const { pathname } = useLocation();
  if (pathname.includes('/accounts/filter')) {
    return (
      <>
        <a
          className="btn-w-a w-8 h-8 sm:w-10 sm:h-10 bg-blue/10"
          href="#"
          onClick={() => setShowArr({ ...showArr, filter: !showArr.filter })}
        >
          <FilterActionSVG />
        </a>
        <div className="flex items-center pl-2">
          <CloseSVG2 className="filter-text" />
          <p className="text-t-blue text-sm">Clear {100 - totalTab} filters</p>
        </div>
      </>
    );
  }
  return (
    <a
      className={`btn-w-a w-8 h-8 sm:w-10 sm:h-10 ${
        showArr.filter && 'bg-blue/10'
      }`}
      href="#"
      onClick={() => setShowArr({ ...showArr, filter: !showArr.filter })}
    >
      <FilterSVG />
    </a>
  );
};

export default TabHeadFilter;
