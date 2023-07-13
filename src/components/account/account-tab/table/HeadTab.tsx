import { Checkbox, TableCell, TableHead, TableRow } from '@mui/material';
import SortTwoSVG from '../../../../assets/SVG/accountsSVG/SortTwoSVG';
import { useDispatch, useSelector } from 'react-redux';
import { accountsSlice } from '../../../../store/slice/AccountSlice';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { allCheckboxSelector } from '../../../../store/selects';

const HeadTab = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const allCheckbox = useSelector(allCheckboxSelector);
  const { setAllCheckbox } = accountsSlice.actions;
  useEffect(() => {
    dispatch(setAllCheckbox(false));
  }, [pathname]);
  const headerData: string[] = [
    'ID',
    'First Name',
    'Alias',
    'Email',
    'Team',
    'Company',
    'Posision',
    'Role',
    'Status',
    'Action',
  ];
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Checkbox
            size="small"
            checked={allCheckbox}
            onChange={(e) => dispatch(setAllCheckbox(e.target.checked))}
          />
        </TableCell>
        {headerData.map((title, index) => (
          <TableCell key={index}>
            <div className="flex flex-nowrap gap-2 justify-evenly items-center">
              <p className="text-t-light whitespace-nowrap">{title}</p>
              <SortTwoSVG />
            </div>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default HeadTab;
