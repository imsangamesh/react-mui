import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

type Skill = { id: number; label: string };

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  return (
    <Stack spacing={2} width={250}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(e: any, newVal: string | null) => setValue(newVal)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(e: any, newVal: Skill | null) => setSkill(newVal)}
      />
    </Stack>
  );
};

export default MuiAutoComplete;
