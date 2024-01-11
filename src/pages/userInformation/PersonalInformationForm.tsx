import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React from "react";

const TravellerType = [
  'business',
  'family',
  'student'
]
const Gender = [
  'male',
  'female'
]
const Age = [
  '18 to 24',
  '25 to 34',
  '35 to 44',
  '45 to 59',
  '60+'
]
const Country = [
  'Germany',
  'Japan',
  'USA'
]
type PersonalInformationData = {
    name: string
    surname: string
    age: string[],
    country: string[],
    travellerType: string[],
    gender: string[]
  }

  type PersonalInformationFormProps = PersonalInformationData & {
    updateFields: (fields: Partial<PersonalInformationData>) => void
  }
export function PersonalInformationForm ({
    name,
    surname,
    age,
    country,
    travellerType,
    gender,
    updateFields,
  }: PersonalInformationFormProps) {
    return (
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", rowGap:"2rem", flexWrap: "wrap"}}>
        
        <TextField style = {{width: 120}} autoFocus id="name" label="name" variant="filled" required  value={name}
        onChange={e => updateFields({ name: e.target.value })}/>

        <TextField style = {{width: 200}} id="surname" label="surname" variant="filled" required  value={surname}
        onChange={e => updateFields({ surname: e.target.value })}/>
        
        <FormControl variant="filled" sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={e => updateFields({ age: e.target.value as string []})}
        >
          <MenuItem value={Age[0]}>18 to 24</MenuItem>
          <MenuItem value={Age[1]}>25 to 34</MenuItem>
          <MenuItem value={Age[2]}>35 to 44</MenuItem>
          <MenuItem value={Age[3]}>45 to 59</MenuItem>
          <MenuItem value={Age[4]}>60+</MenuItem>
        </Select>
        </FormControl>

        <FormControl variant="filled" sx={{ minWidth: 200 }}>
        <InputLabel id="demo-simple-select-filled-label">country</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={country}
          onChange={e => updateFields({ country: e.target.value as string []})}
        >
          <MenuItem value={Country[0]}>Germany</MenuItem>
          <MenuItem value={Country[1]}>Japan</MenuItem>
          <MenuItem value={Country[2]}>USA</MenuItem>
        </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">gender</InputLabel>
        <Select
          labelId="gender"
          id="gender"
          value={gender}
          onChange={e => updateFields({ gender: e.target.value as string []})}
        >
          <MenuItem value={Gender[0]}>male</MenuItem>
          <MenuItem value={Gender[1]}>female</MenuItem>
        </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ minWidth: 200 }}>
        <InputLabel id="demo-simple-select-filled-label">traveller type</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={travellerType}
          onChange={e => updateFields({ travellerType: e.target.value as string []})}
        >
          <MenuItem value={TravellerType[0]}>business</MenuItem>
          <MenuItem value={TravellerType[1]}>family</MenuItem>
          <MenuItem value={TravellerType[2]}>student</MenuItem>
        </Select>
        </FormControl>
        </div>
    )
}