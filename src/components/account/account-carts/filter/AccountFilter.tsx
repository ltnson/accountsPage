import { Button } from "@mui/material";
import FilterForm from "./FilterForm";
import CloseSVG from "../../../../assets/SVG/accountsSVG/CloseSVG";
import { useContext } from "react";
import { AccountContext } from "../../../../store/AccountContext";

const AccountFilter = () => {
  const { showArr, setShowArr } = useContext(AccountContext);
  return (
    <div className="bg-cart">
      <div className="cart-filter relative">
        <div
          className="absolute top-6 right-8"
          onClick={() => setShowArr({ ...showArr, filter: false })}
        >
          <CloseSVG />
        </div>
        <p className="font-bold ">Filter</p>
        <FilterForm label="Hair Color" array={["Brown", "Chestnut", "Black"]} />
        <hr className="text-t-neutral/d2" />
        <FilterForm
          label="Hair Type"
          array={["Curly", "Straight", "Very curly"]}
        />
        <FilterForm
          label="Eye color"
          array={["Blue", "Gray", "Amber", "Brown"]}
        />
        <FilterForm label="Level" array={["test ", "test 2"]} />
        <FilterForm label="Skill" array={["skill 1", "skill 2"]} />
        <hr className="text-t-neutral/d2" />
        <FilterForm label="Contact Type" array={["skill 1", "skill 2"]} />
        <div className="flex gap-4 w-full">
          <Button className="filter-clear">Clear All</Button>
          <Button className="filter-show">Show</Button>
        </div>
      </div>
    </div>
  );
};

export default AccountFilter;
