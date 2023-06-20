import CloseSVG from '../../../../assets/SVG/accountsSVG/CloseSVG';
import ImportSVG from '../../../../assets/SVG/accountsSVG/ImportSVG';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../../../../store/AccountContext';

const AccountUpdate = () => {
  const { setShowArr, showArr } = useContext(AccountContext);

  return (
    <div className="bg-cart">
      <div className="cart-update">
        <div
          className="absolute top-6 right-6"
          onClick={() => setShowArr({ ...showArr, update: false })}
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
            <ul className="pl-8 list-disc">
              <li>
                <p>Only csv, excel, xlsx</p>
              </li>
              <li>
                <p>File can not exceed 5MB</p>
              </li>
            </ul>
          </div>
        </div>
        <Button className="save">Submit</Button>
      </div>
    </div>
  );
};

export default AccountUpdate;
