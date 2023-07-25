import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import FilterSVG from '../../../../assets/SVG/accountsSVG/FilterSVG';
import CloseSVG2 from '../../../../assets/SVG/accountsSVG/CloseSVG2';
import FilterActionSVG from '../../../../assets/SVG/accountsSVG/FilterActionSVG';
import { showFilterSelector } from '../../../../store/selects';
import { accountsSlice } from '../../../../store/slice/AccountSlice';

const TabHeadFilter = ({ totalTab }: { totalTab: number }) => {
  const { pathname } = useLocation();
  const showFilter = useSelector(showFilterSelector);
  const dispatch = useDispatch();
  const { setShowFilter } = accountsSlice.actions;

  if (pathname.includes('/accounts/filter')) {
    return (
      <>
        <a
          className="btn-w-a w-8 h-8 sm:w-10 sm:h-10 bg-blue/10"
          onClick={() => dispatch(setShowFilter())}
        >
          <FilterActionSVG />
        </a>
        <div className="flex items-center pl-2">
          <CloseSVG2 className="filter-text" />
          <p className="text-add-blue text-sm">
            Clear {100 - totalTab} filters
          </p>
        </div>
      </>
    );
  }
  return (
    <a
      className={`btn-w-a w-8 h-8 sm:w-10 sm:h-10 ${
        showFilter && 'bg-blue/10'
      }`}
      onClick={() => dispatch(setShowFilter())}
    >
      <FilterSVG />
    </a>
  );
};

export default TabHeadFilter;
