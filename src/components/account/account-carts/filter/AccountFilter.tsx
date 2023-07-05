import { useState } from 'react';

import { Button } from '@mui/material';
import FilterForm from './FilterForm';
import { useNavigate } from 'react-router-dom';
import { FilterOption } from '../../../../model/types';

const AccountFilter = () => {
  const navigate = useNavigate();
  const [filterOption, setFilterOption] = useState<FilterOption>({
    'hair.color': '',
    'hair.type': '',
    eyeColor: '',
  });
  const [reset, setReset] = useState<boolean>(false);

  const handleClearAll = () => {
    setReset(!reset);
    navigate('/accounts/tab?limit=10&page=1');
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
      navigate(`/accounts${firstNonEmptyKeyValue}`);
    }
  };

  return (
    <div className="cart-filter">
      <div className="px-4 sm:px-6">
        <p className="font-bold p-0 w-full">Filter</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1">
          <FilterForm
            label="Hair Color"
            array={['Brown', 'Chestnut', 'Black']}
            onValue={(value: string) =>
              setFilterOption({ ...filterOption, 'hair.color': value })
            }
            onReset={reset}
          />
          <hr className="text-t-neutral/d2 hidden xl:block" />
          <FilterForm
            label="Hair Type"
            array={['Curly', 'Straight', 'Very curly']}
            onValue={(value: string) =>
              setFilterOption({ ...filterOption, 'hair.type': value })
            }
            onReset={reset}
          />
          <FilterForm
            label="Eye color"
            array={['Blue', 'Gray', 'Amber', 'Brown']}
            onValue={(value: string) =>
              setFilterOption({ ...filterOption, eyeColor: value })
            }
            onReset={reset}
          />
          <FilterForm
            label="Level"
            array={['Intern ', 'test 1', 'test 2', 'test 3']}
            onValue={() => setFilterOption(filterOption)}
            onReset={reset}
          />
          <FilterForm
            label="Skill"
            array={['React', 'JavaScript', 'HTML', 'CSS']}
            onValue={() => setFilterOption(filterOption)}
            onReset={reset}
          />
          <hr className="text-t-neutral/d2 hidden xl:block" />
          <FilterForm
            label="Contact Type"
            array={['Type', 'Type2', 'Type3', 'Type4']}
            onValue={() => setFilterOption(filterOption)}
            onReset={reset}
          />
        </div>
        <div className="flex gap-4 w-80 xl:w-full pt-4 pb-2 xl:pt-10 ">
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
