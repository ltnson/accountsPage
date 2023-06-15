import { Typography } from "@mui/material";
import CloseSVG from "../../../../assets/SVG/accountsSVG/CloseSVG";
import { useContext } from "react";
import { AccountContext } from "../../../../store/AccountContext";

const AccountDetail = () => {
  const { setShowDetail } = useContext(AccountContext);
  return (
    <div className="bg-cart">
      <div className="cart-detail">
        <div
          className="absolute top-6 right-8"
          onClick={() => setShowDetail(false)}
        >
          <CloseSVG />
        </div>
        <div className="grid grid-cols-3 border-b border-t-light gap-4 pb-4">
          <p className="col-span-3 font-semibold">Account Detail</p>
          <div>
            <Typography className="s12-gray">Frist Name</Typography>
            <Typography className="s14">kjdsfnk</Typography>
          </div>
          <div>
            <Typography className="s12-gray">Last Name</Typography>
            <Typography className="s14">kjdbfkjdf</Typography>
          </div>
          <div>
            <Typography className="s12-gray">Ailas</Typography>
            <Typography className="s14">dsfgdf</Typography>
          </div>
          <div>
            <Typography className="s12-gray">Role</Typography>
            <Typography className="s14">kjsbdvkjdbv</Typography>
          </div>
          <div>
            <Typography className="s12-gray">Email</Typography>
            <Typography className="s14">jkabsckb</Typography>
          </div>
          <div>
            <Typography className="s12-gray">Status</Typography>
            <Typography className="s14-green">kjdsnvckcjd</Typography>
          </div>
          <div>
            <Typography className="s12-gray">ID</Typography>
            <Typography className="s14">jkabsckb</Typography>
          </div>
          <div>
            <Typography className="s12-gray">Phone</Typography>
            <Typography className="s14">jkabsckb</Typography>
          </div>
        </div>
        <div className="grid grid-cols-3 border-b border-t-light gap-4 py-4">
          <div>
            <Typography className="s12-gray">Contract Type</Typography>
            <Typography className="s14">kjdsfnk</Typography>
          </div>
          <div>
            <Typography className="s12-gray">Contract Start Date</Typography>
            <Typography className="s14">kjdsfnk</Typography>
          </div>
          <div>
            <Typography className="s12-gray">Contract End Date</Typography>
            <Typography className="s14">kjdsfnk</Typography>
          </div>
          <div>
            <Typography className="s12-gray">Company</Typography>
            <Typography className="s14">kjdsfnk</Typography>
          </div>
          <div>
            <Typography className="s12-gray">Office</Typography>
            <Typography className="s14">kjdsfnk</Typography>
          </div>
        </div>
        <div className="grid grid-cols-3 border-b border-t-light gap-4 py-4">
          <div>
            <Typography className="s12-gray">Team</Typography>
            <Typography className="s14">kjdsfnk</Typography>
          </div>
          <div>
            <Typography className="s12-gray">Position</Typography>
            <Typography className="s14">kjdsfnk</Typography>
          </div>
          <div>
            <Typography className="s12-gray">Level</Typography>
            <Typography className="s14">kjdsfnk</Typography>
          </div>
          <div className="col-span-3">
            <Typography className="s12-gray">Skill</Typography>
            <Typography className="s14">
              kjdsfnk jdhfvjhdsf sdjvljkdsbnv sdkjvnskdjvnksdbjv skdnjvjds
            </Typography>
          </div>
        </div>
        <div className="text-start pt-2">
          <Typography className="s12-gray">Create on 12/02/2022</Typography>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
