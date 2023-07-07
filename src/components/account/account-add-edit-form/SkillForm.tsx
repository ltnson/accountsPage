import { useState } from 'react';

import { TextField, Typography } from '@mui/material';
import CloseSVG2 from '../../../assets/SVG/accountsSVG/CloseSVG2';

const SkillForm = () => {
  const [newSk, setNewSk] = useState<string[]>(['.NET', 'Native React', 'PM']);
  const [skill, setSkill] = useState<string[]>(['']);

  //option skill and put them to input if client picked
  return (
    <div className="col-span-2">
      <TextField
        className="input-form"
        InputProps={{
          startAdornment: (
            <div className="flex gap-x-1 items-center flex-nowrap sm:flex-nowrap  ml-2 w-auto pr-2 h-6">
              {skill.map((sk, index) => (
                <div
                  className={`rounded-3xl border border-t-neutral/d2 text-center flex items-center flex-nowrap ${
                    sk === '' && 'hidden'
                  }`}
                  key={index}
                >
                  <Typography className="skill-op">
                    <CloseSVG2
                      onClick={() => {
                        setNewSk([...newSk, sk]);
                        setSkill(() => skill.filter((_, i) => i !== index));
                      }}
                    />

                    {sk}
                  </Typography>
                </div>
              ))}
            </div>
          ),
        }}
      />
      <TextField
        disabled
        className="input-form skill-form"
        InputProps={{
          startAdornment: (
            <div className="flex gap-x-1 items-center flex-nowrap  ml-2 w-auto pr-2 h-6">
              {newSk.map((sk, index) => (
                <div
                  className={`rounded-3xl border border-t-neutral/d2 text-center flex items-center flex-wrap ${
                    sk === '' && 'hidden'
                  }`}
                  key={index}
                  onClick={() => {
                    setSkill([...skill, sk]);
                    setNewSk(() => newSk.filter((_, i) => i !== index));
                  }}
                >
                  <Typography className="skill-hover skill-op">{sk}</Typography>
                </div>
              ))}
            </div>
          ),
        }}
      />
    </div>
  );
};

export default SkillForm;
