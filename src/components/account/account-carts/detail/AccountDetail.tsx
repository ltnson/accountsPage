import { Typography, CircularProgress } from '@mui/material';
import CloseSVG from '../../../../assets/SVG/accountsSVG/CloseSVG';
import { detailArr1, detailArr2, detailArr3 } from '.';
import { useDispatch } from 'react-redux';
import { accountsSlice } from '../../../../store/slice/AccountSlice';
import { Account } from '../../../../model/types';

const AccountDetail = ({
  data,
  isLoading,
}: {
  data: Account | undefined;
  isLoading: boolean | undefined;
}) => {
  const dispatch = useDispatch();
  const { setShowDetail } = accountsSlice.actions;

  return (
    <div className="bg-cart" onClick={() => dispatch(setShowDetail())}>
      {isLoading && (
        <div className="cart-loading">
          <CircularProgress size="lg" />
        </div>
      )}
      {data && (
        <div className="cart-detail" onClick={(e) => e.stopPropagation()}>
          <div
            className="absolute sm:top-8 sm:right-9 top-6 right-8"
            onClick={() => dispatch(setShowDetail())}
          >
            <CloseSVG />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 grid-flow-row-dense border-b border-t-light gap-2 sm:gap-5 md:gap-6 pb-3 md:pr-10 lg:pr-16">
            <p className="col-span-2 sm:col-span-3 font-semibold">
              Account Detail
            </p>
            {detailArr1.map((item, index) => (
              <div key={index}>
                <Typography className="s12-gray">{item.name}</Typography>
                <Typography
                  className={`${item.name === 'Email' && 'email-break'} ${
                    item.name === 'Status' ? 's14-green' : 's14'
                  }`}
                >
                  {data[item.key]}
                </Typography>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 border-b border-t-light gap-4 py-4 md:pr-10 lg:pr-16">
            {detailArr2.map((item, index) => (
              <div key={index}>
                <Typography className="s12-gray">{item.name}</Typography>
                <Typography className="s14">{data[item.key]}</Typography>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 border-b border-t-light gap-4 py-4 md:pr-10 lg:pr-16">
            {detailArr3.map((item, index) => (
              <div
                key={index}
                className={`${
                  item.name === 'Skill' && 'col-span-2 sm:col-span-3'
                }`}
              >
                <Typography className="s12-gray">{item.name}</Typography>
                <Typography className="s14">{data[item.key]}</Typography>
              </div>
            ))}
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
