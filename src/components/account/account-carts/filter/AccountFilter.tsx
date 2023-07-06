import { useState } from 'react';

import { Button } from '@mui/material';
import FilterForm from './FilterForm';
import { useNavigate } from 'react-router-dom';
import { filterArr, filterOp, FilterOption } from '.';

const AccountFilter = () => {
  const navigate = useNavigate();
  const [filterOption, setFilterOption] = useState<FilterOption>(filterOp);
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
        <div className="xl:flex flex-wrap gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
          {filterArr.map((item, index) => (
            <div
              className={`w-full ${
                index === 4 && 'xl:border-b border-t-neutral/d2 xl:pb-4'
              } ${index === 1 && 'xl:border-b border-t-neutral/d2 xl:pb-4'}`}
              key={index}
            >
              <FilterForm
                label={item.label}
                array={item.array}
                onValue={(value: string) =>
                  setFilterOption(
                    item.key
                      ? { ...filterOption, [item.key]: value }
                      : filterOption,
                  )
                }
                onReset={reset}
              />
            </div>
          ))}
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
