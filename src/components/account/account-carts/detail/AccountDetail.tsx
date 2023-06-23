import { useContext, useEffect } from 'react';
import { AccountContext } from '../../../../store/AccountContext';

import { Toaster } from 'react-hot-toast';

import { catchErr, getAccountDetail } from '../../../../hooks/Accounts';
import { Typography, CircularProgress } from '@mui/material';
import CloseSVG from '../../../../assets/SVG/accountsSVG/CloseSVG';

const AccountDetail = () => {
  const { showArr, setShowArr, idDetail } = useContext(AccountContext);

  const { data, isLoading, error } = getAccountDetail(idDetail);
  useEffect(() => {
    if (error) {
      catchErr(error);
      setShowArr({ ...showArr, detail: false });
    }
  }, [error]);

  return (
    <div
      className="bg-cart"
      onClick={() => setShowArr({ ...showArr, detail: false })}
    >
      <Toaster />
      {isLoading && (
        <div className="cart-loading">
          <CircularProgress size="lg" />
        </div>
      )}
      {data && (
        <div
          className="cart-detail"
          onClick={(event) => event.stopPropagation()}
        >
          <div
            className="absolute top-6 right-8"
            onClick={() => setShowArr({ ...showArr, detail: false })}
          >
            <CloseSVG />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 grid-flow-row-dense border-b border-t-light gap-2 sm:gap-4 pb-4">
            <p className="col-span-2 sm:col-span-3 font-semibold">
              Account Detail
            </p>
            <div>
              <Typography className="s12-gray">Frist Name</Typography>
              <Typography className="s14">{data.firstName}</Typography>
            </div>
            <div>
              <Typography className="s12-gray">Last Name</Typography>
              <Typography className="s14">{data.lastName}</Typography>
            </div>
            <div>
              <Typography className="s12-gray">Ailas</Typography>
              <Typography className="s14">{data.company.department}</Typography>
            </div>
            <div>
              <Typography className="s12-gray">Role</Typography>
              <Typography className="s14">{data.age}</Typography>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Typography className="s12-gray">Email</Typography>
              <Typography className="s14 email-break">{data.email}</Typography>
            </div>
            <div>
              <Typography className="s12-gray">Status</Typography>
              <Typography className="s14-green">{data.domain}</Typography>
            </div>
            <div>
              <Typography className="s12-gray">ID</Typography>
              <Typography className="s14">{data.id}</Typography>
            </div>
            <div>
              <Typography className="s12-gray">Phone</Typography>
              <Typography className="s14">{data.phone}</Typography>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 border-b border-t-light gap-4 py-4">
            <div>
              <Typography className="s12-gray">Contract Type</Typography>
              <Typography className="s14">{data.company.title}</Typography>
            </div>
            <div>
              <Typography className="s12-gray">Contract Start Date</Typography>
              <Typography className="s14">{data.age}</Typography>
            </div>
            <div>
              <Typography className="s12-gray">Contract End Date</Typography>
              <Typography className="s14">{data.birthDate}</Typography>
            </div>
            <div>
              <Typography className="s12-gray">Company</Typography>
              <Typography className="s14">{data.company.name}</Typography>
            </div>
            <div>
              <Typography className="s12-gray">Office</Typography>
              <Typography className="s14">{data.address.state}</Typography>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 border-b border-t-light gap-4 py-4">
            <div>
              <Typography className="s12-gray">Team</Typography>
              <Typography className="s14">{data.address.city}</Typography>
            </div>
            <div>
              <Typography className="s12-gray">Position</Typography>
              <Typography className="s14">{data.bloodGroup}</Typography>
            </div>
            <div>
              <Typography className="s12-gray">Level</Typography>
              <Typography className="s14">{data.age}</Typography>
            </div>
            <div className="col-span-2 sm:col-span-3">
              <Typography className="s12-gray">Skill</Typography>
              <Typography className="s14">{data.university}</Typography>
            </div>
          </div>
          <div className="text-start pt-2">
            <Typography className="s12-gray">
              Create on {data.birthDate}
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountDetail;
