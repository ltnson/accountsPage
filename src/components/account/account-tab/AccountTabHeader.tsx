import { useContext } from 'react';
import { AccountContext } from '../../../store/AccountContext';
import { useNavigate } from 'react-router-dom';

const AccountTabHeader = () => {
  const { setOpMember, opMember, setPathName, limitTab, skipTab } =
    useContext(AccountContext);
  const navigate = useNavigate();

  const handleShowAccount = (value: string) => {
    if (value === 'vinova') {
      setOpMember('vinova');
      setPathName('/filter?key=gender&value=male');
      navigate('/accounts/vinova');
    }
    if (value === 'partner') {
      setOpMember('partner');
      setPathName('/filter?key=gender&value=female');
      navigate('/accounts/partner');
    }
    if (value === 'all') {
      setOpMember('all');
      navigate(`/accounts/page=${Math.ceil(skipTab / limitTab + 1)}`);
      return setPathName(`?limit=${limitTab}` + '&' + `skip=${skipTab}`);
    }
  };

  return (
    <div className="px-2 sm:px-5 border-b border-t-light pt-2 grow-0">
      <ul className="flex text-t-light gap-2">
        <li
          className={`py-1 px-2 border-b-2 ${
            opMember === 'all' && 'border-t-blue text-t-blue'
          }`}
        >
          <a className="" href="#" onClick={() => handleShowAccount('all')}>
            All
          </a>
        </li>
        <li
          className={`py-1 px-2 border-b-2 ${
            opMember === 'vinova' && 'border-t-blue text-t-blue'
          }`}
        >
          <a className="" href="#" onClick={() => handleShowAccount('vinova')}>
            Vinova
          </a>
        </li>
        <li
          className={`py-1 px-2 border-b-2 ${
            opMember === 'partner' && 'border-t-blue text-t-blue'
          }`}
        >
          <a className="" href="#" onClick={() => handleShowAccount('partner')}>
            Partner
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AccountTabHeader;
