import { Accounts } from '../../../../model/types';

import { TableBody } from '@mui/material';
import ItemTab from './ItemTab';

const BodyTab = ({ accountsArray }: { accountsArray: Accounts }) => {
  return (
    <TableBody>
      {accountsArray.map((dt, index) => (
        <ItemTab key={index} item={dt} />
      ))}
    </TableBody>
  );
};

export default BodyTab;
