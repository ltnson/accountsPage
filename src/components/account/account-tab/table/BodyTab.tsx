import { TableBody } from '@mui/material';
import ItemTab from './ItemTab';
import { Accounts } from '../../../../model/types';

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
