import { useContext, useEffect } from 'react';
import { AccountContext } from '../../../store/AccountContext';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import FooterContent from './footer/FooterContent';
import FooterPagination from './footer/FooterPagination';

const AccountTabFooter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const limitStr = searchParams.get('limit');
  const pageStr = searchParams.get('page');
  const { skipTab, setSkipTab, limitTab, setLimitTab, searching } =
    useContext(AccountContext);

  useEffect(() => {
    const limit = limitStr && parseInt(limitStr);
    const page = pageStr && parseInt(pageStr);
    if (limit && page) {
      setLimitTab(limit);
      setSkipTab(Math.ceil((page - 1) * limit));
    }
  }, []);

  useEffect(() => {
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
