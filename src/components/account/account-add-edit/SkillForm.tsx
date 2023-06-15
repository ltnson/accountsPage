import {
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import CalendarSVG from "../../../assets/SVG/accountsSVG/CalendarSVG";
import CloseSVG2 from "../../../assets/SVG/accountsSVG/CloseSVG2";

const SkillForm = () => {
  const arr: string[] = [".NET", "PM", "Native React"];
  const [newSk, setNewSk] = useState<string>("");
  const [skill, setSkill] = useState<string[]>(arr ? arr : [""]);

  return (
    <div className="col-span-2">
      <TextField
        sx={{ overflow: "hidden" }}
        disabled
        className="input-form"
        fullWidth
        InputProps={{
          startAdornment: (
            <div className="flex gap-x-1 items-center flex-nowrap min-w-[1280px] overflow-auto ml-2">
              {skill.map((sk, index) => (
                <div
                  className="rounded-xl border border-t-light text-center flex items-center"
                  key={index}
                >
                  <div
                    onClick={() =>
                      setSkill(() => skill.filter((_, i) => i !== index))
                    }
                    className="px-1"
                  >
                    <CloseSVG2 />
                  </div>
                  <Typography
                    className="s12-gray"
                    sx={{
                      paddingRight: "5px",
                      padding: "2px 4px 2px 0",
                    }}
                  >
                    {sk}
                  </Typography>
                </div>
              ))}
            </div>
          ),
        }}
      />
      <TextField
        className="input-form skill-form"
        value={newSk}
        onChange={(e) => setNewSk(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  setNewSk("");
                  setSkill([...skill, newSk]);
                }}
              >
                <CalendarSVG />
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
    </div>
  );
};

export default SkillForm;
