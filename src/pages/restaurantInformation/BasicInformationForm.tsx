import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React from "react";

const PaymentOptions = [
    'cash',
    'scan',
    'paypal'
]
type BasicInformationData = {
    restaurantName: string
    address: string
    zip: string
    paymentOptions: string[],
    cuisineType : string
    establishmentType: string
  }

  type BasicInformationFormProps = BasicInformationData & {
    updateFields: (fields: Partial<BasicInformationData>) => void
  }
export function BasicInformationForm ({
    restaurantName,
    address,
    zip,
    paymentOptions,
    cuisineType,
    establishmentType,
    updateFields,
  }: BasicInformationFormProps) {
    return (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", rowGap:"2rem"}}>
        <TextField autoFocus id="restaurantName" label="restaurant name" variant="filled" required  value={restaurantName}
        onChange={e => updateFields({ restaurantName: e.target.value })}/>

        <TextField id="address" label="address" variant="filled" required  value={address}
        onChange={e => updateFields({ address: e.target.value })}/>

        <TextField id="zip" label="postal code" variant="filled" required  value={zip}
        onChange={e => updateFields({ zip: e.target.value })}/>
        <FormControl variant="filled" sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">payment options</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={paymentOptions}
          multiple
          onChange={e => updateFields({ paymentOptions: e.target.value as string []})}
        >
          <MenuItem value={PaymentOptions[0]}>cash</MenuItem>
          <MenuItem value={PaymentOptions[1]}>scan</MenuItem>
          <MenuItem value={PaymentOptions[2]}>paypal</MenuItem>
        </Select>
        </FormControl>
        <TextField id="cuisineType" label="cuisine type" variant="filled" required  value={cuisineType}
        onChange={e => updateFields({ cuisineType: e.target.value })}/>
    
        <TextField id="establishmentType" label="establishment type" variant="filled" required  value={establishmentType}
        onChange={e => updateFields({ establishmentType: e.target.value })}/>
        </div>
    )
}