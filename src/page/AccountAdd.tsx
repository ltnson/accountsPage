import TextForm from "../components/account/account-add-edit/TextForm";
import SelectForm from "../components/account/account-add-edit/SelectForm";
import DateForm from "../components/account/account-add-edit/DateForm";
import SkillForm from "../components/account/account-add-edit/SkillForm";
import PhoneForm from "../components/account/account-add-edit/PhoneForm";
import { Button } from "@mui/material";

const AccountAdd = () => {
  return (
    <div className=" w-full h-screen pt-14 sm:pt-20 p-2 sm:p-4 ">
      <div className="bg-white w-full h-full rounded-xl p-5 overflow-y-auto">
        <form className="max-w-[680px]">
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 gap-4 pb-4 sm:pb-6 border-b border-t-neutral/DE">
            <TextForm label="First Name" span="1" data="tesx" />
            <TextForm label="Last Name" span="1" data={`${""}`} />
            <TextForm label="Alias" span="1" data={`${""}`} />
            <SelectForm label="Role" span="1" array={["1", "2"]} />
            <TextForm label="Email" span="2" data={`${""}`} />
            <PhoneForm label="Phone" span="2" data={``} />
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 gap-4 py-4 sm:py-6 border-b border-t-neutral/DE">
            <SelectForm label="Contract type" span="2" array={[""]} />
            <DateForm label="Contract Start Date" span="1" />
            <DateForm label="Contract End Date" span="1" />
            <SelectForm label="Company" span="1" array={["1", "2"]} />
            <SelectForm label="Office" span="1" array={["1", "2"]} />
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 gap-4 py-4 sm:py-6">
            <SelectForm label="Team" span="1" array={["1", "2"]} />
            <SelectForm label="Position" span="1" array={["1", "2"]} />
            <SelectForm label="Level" span="2" array={["1", "2"]} />
            <SkillForm />
          </div>
          <Button className="save col-span-2">Save</Button>
        </form>
      </div>
    </div>
  );
};

export default AccountAdd;
