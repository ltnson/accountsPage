import { useState } from 'react';

import { TextField, TextareaAutosize, Typography } from '@mui/material';
import CloseSVG2 from '../../../assets/SVG/accountsSVG/CloseSVG2';

const SkillForm = () => {
  const [newSk, setNewSk] = useState<string[]>([
    '.NET',
    'Native React',
    'Node.Js',
    'Next',
  ]);
  const [skill, setSkill] = useState<string[]>(['']);

  return (
    <div className="col-span-2">
      <TextField
        className="input-form input-skill"
        InputProps={{
          startAdornment: (
            <div className="flex gap-x-1 items-center flex-nowrap  ml-2 w-auto pr-2">
              {skill.map((sk, index) => (
                <div
                  className={`rounded-xl border border-t-light text-center flex items-center flex-nowrap ${
                    sk === '' && 'hidden'
                  }`}
                  key={index}
                >
                  <Typography
                    className="s12-gray"
                    sx={{
                      padding: '2px 6px',
                      display: 'flex',
                      width: 'auto',
                      whiteSpace: 'nowrap',
                    }}
                  >
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
            <div className="flex gap-x-1 items-center flex-nowrap  ml-2 w-auto pr-2">
              {newSk.map((sk, index) => (
                <div
                  className={`rounded-xl border border-t-light text-center flex items-center flex-nowrap ${
                    sk === '' && 'hidden'
                  }`}
                  key={index}
                  onClick={() => {
                    setSkill([...skill, sk]);
                    setNewSk(() => newSk.filter((_, i) => i !== index));
                  }}
                >
                  <Typography
                    className="s12-gray"
                    sx={{
                      padding: '2px 6px',
                      display: 'flex',
                      width: 'auto',
                      whiteSpace: 'nowrap',
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
    </div>
  );
};

export default SkillForm;
