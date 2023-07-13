import { TableHead, TableRow, TableCell, Checkbox } from '@mui/material';
import SortTwoSVG from '../../../assets/SVG/accountsSVG/SortTwoSVG';
import { useDispatch, useSelector } from 'react-redux';
import { accountsSlice } from '../../../store/slice/AccountSlice';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { allCheckboxSelector } from '../../../store/selects';

const HeadTableTodo = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const allCheckbox = useSelector(allCheckboxSelector);
  useEffect(() => {
    dispatch(accountsSlice.actions.setAllCheckbox(false));
  }, [pathname]);
  const headerData: string[] = [
    'ID',
    'Text',
    'Author',
    'Complete',
    'Created Date',
    'Actions',
    'Delete',
  ];
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Checkbox
            size="small"
            checked={allCheckbox}
            onChange={(e) =>
              dispatch(accountsSlice.actions.setAllCheckbox(e.target.checked))
            }
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

export default HeadTableTodo;
