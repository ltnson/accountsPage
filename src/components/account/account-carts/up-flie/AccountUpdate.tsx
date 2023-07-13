import { Button } from '@mui/material';
import CloseSVG from '../../../../assets/SVG/accountsSVG/CloseSVG';
import ImportSVG from '../../../../assets/SVG/accountsSVG/ImportSVG';
import { useDispatch } from 'react-redux';
import { accountsSlice } from '../../../../store/slice/AccountSlice';

const AccountUpdate = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="bg-cart"
      onClick={() => dispatch(accountsSlice.actions.setShowUpdate())}
    >
      <div className="cart-update" onClick={(event) => event.stopPropagation()}>
        <div
          className="absolute top-7 right-6"
          onClick={() => dispatch(accountsSlice.actions.setShowUpdate())}
        >
          <CloseSVG />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">Import Data</p>

          <label className="update-import" htmlFor="accounts-file">
            <ImportSVG />
            <p className="text-xl font-bold py-2">Drag your csv here</p>
            <p>or, click to select a csv file</p>
            <input type="file" className="hidden" id="accounts-file" />
          </label>
          <div className="">
            <p className="font-semibold text-sm">Requirement:</p>
            <ul className="px-6  list-disc leading-4">
              <li>
                <p>Only csv, excel, xlsx</p>
              </li>
              <li>
                <p>File can not exceed 5MB</p>
              </li>
            </ul>
          </div>
        </div>
        <Button
          className="save"
          onClick={() => dispatch(accountsSlice.actions.setShowUpdate())}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AccountUpdate;
