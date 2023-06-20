import { Button } from '@mui/material';
import FilterForm from './FilterForm';
import { useContext, useState } from 'react';
import { AccountContext } from '../../../../store/AccountContext';
import { useNavigate } from 'react-router-dom';
import { FilterOption } from '../../../../model/types';

const AccountFilter = () => {
  const { showArr, setShowArr, setPathName, opMember, skipTab, limitTab } =
    useContext(AccountContext);
  const navigate = useNavigate();
  const [filterOption, setFilterOption] = useState<FilterOption>({
    'hair.color': '',
    'hair.type': '',
    eyeColor: '',
  });

  const handleClearAll = () => {
    setShowArr({ ...showArr, filter: false });
    if (opMember === 'vinova') {
      setPathName('/filter?key=gender&value=male');
      return navigate('/accounts/vinova');
    }
    if (opMember === 'partner') {
      setPathName('/filter?key=gender&value=female');
      return navigate('/accounts/partner');
    }
    navigate(`/accounts/page=${skipTab / limitTab + 1}`);
    return setPathName(`?limit=${limitTab}` + '&' + `skip=${skipTab}`);
  };

  const handleShowFilterOption = () => {
    let firstNonEmptyKeyValue;
    for (const [key, value] of Object.entries(filterOption)) {
      if (value.trim() === '') {
        continue;
      }
      if (!firstNonEmptyKeyValue) {
        firstNonEmptyKeyValue = `/filter?key=${key}&value=${value}`;
      }
      break;
    }
    if (firstNonEmptyKeyValue) {
      setPathName(`${firstNonEmptyKeyValue}`);
      navigate(`/accounts${firstNonEmptyKeyValue}`);
    }
    setShowArr({ ...showArr, filter: false });
  };

  return (
    <div className="bg-cart">
      <div className="cart-filter relative">
        <p className="font-bold ">Filter</p>
        <FilterForm
          label="Hair Color"
          array={['Brown', 'Chestnut', 'Black']}
          onValue={(value: string) =>
            setFilterOption({ ...filterOption, 'hair.color': value })
          }
        />
        <hr className="text-t-neutral/d2" />
        <FilterForm
          label="Hair Type"
          array={['Curly', 'Straight', 'Very curly']}
          onValue={(value: string) =>
            setFilterOption({ ...filterOption, 'hair.type': value })
          }
        />
        <FilterForm
          label="Eye color"
          array={['Blue', 'Gray', 'Amber', 'Brown']}
          onValue={(value: string) =>
            setFilterOption({ ...filterOption, eyeColor: value })
          }
        />
        <FilterForm
          label="Level"
          array={['Intern ', 'test 1', 'test 2', 'test 3']}
          onValue={() => setFilterOption(filterOption)}
        />
        <FilterForm
          label="Skill"
          array={['React', 'JavaScript', 'HTML', 'CSS']}
          onValue={() => setFilterOption(filterOption)}
        />
        <hr className="text-t-neutral/d2" />
        <FilterForm
          label="Contact Type"
          array={['Type', 'Type2', 'Type3', 'Type4']}
          onValue={() => setFilterOption(filterOption)}
        />
        <div className="flex gap-4 w-full">
          <Button className="filter-clear" onClick={handleClearAll}>
            Clear All
          </Button>
          <Button className="filter-show" onClick={handleShowFilterOption}>
            Show
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountFilter;
