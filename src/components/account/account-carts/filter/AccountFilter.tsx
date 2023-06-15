import { Button } from "@mui/material";
import FilterForm from "./FilterForm";
import CloseSVG from "../../../../assets/SVG/accountsSVG/CloseSVG";
import { useContext } from "react";
import { AccountContext } from "../../../../store/AccountContext";

const AccountFilter = () => {
  const { setShowFilter } = useContext(AccountContext);
  return (
    <div className="bg-cart">
      <div className="cart-filter relative">
        <div
          className="absolute top-6 right-8"
          onClick={() => setShowFilter(false)}
        >
          <CloseSVG />
        </div>
        <p className="font-bold ">Filter</p>
        <FilterForm label="Role" array={["1", "2"]} />
        <hr className="text-t-neutral/d2" />
        <FilterForm label="Team" array={["1", "2"]} />
        <FilterForm label="Position" array={["1", "2"]} />
        <FilterForm label="Level" array={["1", "2"]} />
        <FilterForm label="Skill" array={["1", "2"]} />
        <hr className="text-t-neutral/d2" />
        <FilterForm label="Contact Type" array={["1", "2"]} />
        <div className="flex gap-4 w-full">
          <Button className="filter-clear">Clear All</Button>
          <Button className="filter-show">Show</Button>
        </div>
      </div>
    </div>
  );
};

export default AccountFilter;
