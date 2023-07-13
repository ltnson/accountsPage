import { useEffect } from 'react';

import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import FooterContent from './footer/FooterContent';
import FooterPagination from './footer/FooterPagination';
import { useDispatch, useSelector } from 'react-redux';
import {
  limitTabSelector,
  searchingSelector,
  skipTabSelector,
} from '../../../store/selects';
import { accountsSlice } from '../../../store/slice/AccountSlice';

const AccountTabFooter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const limitStr = searchParams.get('limit');
  const pageStr = searchParams.get('page');
  const limitTab = useSelector(limitTabSelector);
  const skipTab = useSelector(skipTabSelector);
  const searching = useSelector(searchingSelector);
  const dispatch = useDispatch();

  //change data if client change pathName
  useEffect(() => {
    const limit = limitStr && parseInt(limitStr);
    const page = pageStr && parseInt(pageStr);
    if (limit && page) {
      dispatch(accountsSlice.actions.setLimitTab(limit));
      dispatch(accountsSlice.actions.setSkipTab(Math.ceil((page - 1) * limit)));
    }
  }, [limitStr, pageStr]);

  // rerender if client change option of table
  useEffect(() => {
    if (pathname.includes('/accounts/tab'))
      navigate(
        `/accounts/tab?limit=${limitTab}&page=${Math.ceil(
          skipTab / limitTab + 1,
        )}`,
      );
  }, [limitTab, skipTab]);

  return (
    <div className="tab-footer">
      <FooterContent />
      {!searching && pathname.includes('/accounts/tab') && <FooterPagination />}
    </div>
  );
};

export default AccountTabFooter;
