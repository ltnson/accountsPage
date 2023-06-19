import TextForm from "../components/account/account-add-edit/TextForm";
import SelectForm from "../components/account/account-add-edit/SelectForm";
import DateForm from "../components/account/account-add-edit/DateForm";
import SkillForm from "../components/account/account-add-edit/SkillForm";
import PhoneForm from "../components/account/account-add-edit/PhoneForm";
import { Button } from "@mui/material";
import {
  getAccountDetail,
  postAccountEdit,
  postAccountAdd,
  catchErr,
} from "../hooks/Accounts";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Account, EditForm } from "../model/types";
import { Toaster, toast } from "react-hot-toast";

const AccountAdd = () => {
  const [editData, setEditData] = useState<Account | null>(null);
  const [editForm, setEditForm] = useState<EditForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    birthDate: "",
  });

  const { idAccount } = useParams();
  const navigate = useNavigate();

  const editDataQuery = idAccount
    ? getAccountDetail(parseInt(idAccount))
    : null;

  useEffect(() => {
    if (editDataQuery?.error) {
      catchErr(editDataQuery.error);
    }
    if (editDataQuery?.data) {
      setEditForm({ ...editForm, id: editDataQuery.data.id });
      setEditData(editDataQuery.data);
    }
  }, [editDataQuery?.data]);

  const editMutation = idAccount ? postAccountEdit(parseInt(idAccount)) : null;

  const addMutation = postAccountAdd();

  const handleAddAndEdit = (e: any) => {
    e.preventDefault();
    if (idAccount && editForm.id) {
      return editMutation?.mutate(editForm, {
        onSuccess: (data) => {
          toast.success(`Account with id ${data.id} is Update`);
          navigate("/accounts");
        },
        onError: (error) => catchErr(error),
      });
    }
    addMutation?.mutate(editForm, {
      onSuccess: (data) => {
        toast.success(`Account with id ${data.id} is Created`);
        navigate("/accounts");
      },
      onError: (error) => catchErr(error),
    });
  };

  return (
    <div className="w-full h-screen pt-14 sm:pt-20 p-2 sm:p-4 ">
      <Toaster />
      <div className="bg-white w-full h-full rounded-xl p-5 overflow-y-auto">
        <form className="max-w-[680px]" onSubmit={handleAddAndEdit}>
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 gap-4 pb-4 sm:pb-6 border-b border-t-neutral/DE">
            <TextForm
              label="First Name"
              span="1"
              data={`${editData ? editData.firstName : ""}`}
              onValue={(value: string) =>
                setEditForm({ ...editForm, firstName: value })
              }
            />
            <TextForm
              label="Last Name"
              span="1"
              data={`${editData ? editData.lastName : ""}`}
              onValue={(value: string) =>
                setEditForm({ ...editForm, lastName: value })
              }
            />
            <TextForm
              label="Alias"
              span="1"
              data={`${editData ? editData.username : ""}`}
              onValue={(value: string) =>
                setEditForm({ ...editForm, username: value })
              }
            />
            <SelectForm label="Role" span="1" array={["1", "2"]} />
            <TextForm
              label="Email"
              span="2"
              data={`${editData ? editData.email : ""}`}
              onValue={(value: string) =>
                setEditForm({ ...editForm, email: value })
              }
            />
            <PhoneForm
              label="Phone"
              span="2"
              data={`${editData ? editData.phone : ""}`}
              onValue={(value: string) =>
                setEditForm({ ...editForm, phone: value })
              }
            />
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 gap-4 py-4 sm:py-6 border-b border-t-neutral/DE">
            <SelectForm
              label="Contract type"
              span="2"
              array={["Test", "Test 2", "Test 3"]}
            />
            <DateForm
              label="Contract Start Date"
              span="1"
              date={editData ? new Date(editData.birthDate) : new Date()}
            />
            <DateForm label="Contract End Date" span="1" date={new Date()} />
            <SelectForm
              label="Company"
              span="1"
              array={["Vinova", "Another"]}
            />
            <SelectForm label="Office" span="1" array={["Another", "Test 1"]} />
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 gap-4 py-4 sm:py-6">
            <SelectForm
              label="Team"
              span="1"
              array={["Front-end", "Back-end"]}
            />
            <SelectForm
              label="Position"
              span="1"
              array={["Absolute", "Fixed"]}
            />
            <SelectForm label="Level" span="2" array={["Intern", "Junior"]} />
            <SkillForm />
          </div>
          <Button className="save col-span-2" type="submit">
            Save
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AccountAdd;
