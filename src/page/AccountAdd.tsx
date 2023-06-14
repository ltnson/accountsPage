import TextForm from "../components/account/account-add-edit/TextForm";
import SelectForm from "../components/account/account-add-edit/SelectForm";
import DateForm from "../components/account/account-add-edit/DateForm";

const AccountAdd = () => {
  return (
    <div className=" w-full h-screen pt-14 sm:pt-20 p-2 sm:p-4">
      <div className="bg-white w-full h-full rounded-xl p-5">
        <form className="grid grid-cols-1 sm:grid-cols-2 max-w-[680px] md:gap-6 sm:gap-4">
          <TextForm label="Test" span="1" data="tesx" />
          <SelectForm
            label="test"
            span="2"
            array={["test", "test2", "test3", "test4"]}
          />
          <DateForm label="test2" span="1" data="" />
        </form>
      </div>
    </div>
  );
};

export default AccountAdd;
