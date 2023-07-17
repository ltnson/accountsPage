import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { TableRow, TableCell, Checkbox } from '@mui/material';
import { Account } from '../../../../model/types';
import EyeSVG from '../../../../assets/SVG/accountsSVG/EyeSVG';
import WriteSVG from '../../../../assets/SVG/accountsSVG/WriteSVG';
import { useDispatch, useSelector } from 'react-redux';
import { accountsSlice } from '../../../../store/slice/AccountSlice';
import { allCheckboxSelector } from '../../../../store/selects';
import { useQueryClient } from '@tanstack/react-query';
import typeApi from '../../../../api/typeApi';

const ItemTab = ({ item }: { item: Account }) => {
  const allCheckbox = useSelector(allCheckboxSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const { setShowDetail, setIdDetail } = accountsSlice.actions;
  const queryClient = useQueryClient();

  // show detail and set id for api in detail comp
  const handleShowDetail = (id: number) => {
    dispatch(setShowDetail());
    dispatch(setIdDetail(id));
  };

  const callAheadDetail = (id: number) => {
    queryClient.prefetchQuery(['detail', id], {
      queryFn: () => typeApi.getDetail(id),
      staleTime: 1000 * 10,
    });
  };

  return (
    <TableRow>
      <TableCell>
        <Checkbox
          size="small"
          checked={allCheckbox ? allCheckbox : checkbox}
          onChange={() => setCheckbox(!checkbox)}
        />
      </TableCell>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.firstName}</TableCell>
      <TableCell>{item.lastName}</TableCell>
      <TableCell>{item.email}</TableCell>
      <TableCell>{item.company.name}</TableCell>
      <TableCell>{item.age}</TableCell>
      <TableCell>{item.domain}</TableCell>
      <TableCell>{item.address.city}</TableCell>
      <TableCell>
        <p
          className={
            item.gender === 'female'
              ? 'bg-tag/green10 text-center rounded py-0.5 w-3/4'
              : 'text-center rounded py-0.5 w-3/4'
          }
        >
          {item.gender}
        </p>
      </TableCell>
      <TableCell>
        <div className="flex gap-2">
          <a
            href=""
            onClick={() => handleShowDetail(item.id)}
            onMouseEnter={() => callAheadDetail(item.id)}
            className="btn-show-cart"
          >
            <EyeSVG />
          </a>
          <a
            href=""
            onClick={() => navigate(`/accounts/edit/${item.id}`)}
            onMouseEnter={() => callAheadDetail(item.id)}
            className="btn-show-cart "
          >
            <WriteSVG />
          </a>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default ItemTab;
