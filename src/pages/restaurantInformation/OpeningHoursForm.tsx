import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export function OpeningHoursForm () {

    const [checked, setChecked] = useState ({
        monday:true,
        tuesday: true,
        wednesday: true, 
        thursday: true, 
        friday: true,
        saturday: false,
        sunday: false
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked({
          ...checked,
          [event.target.name]: event.target.checked,
        });
      };
    return (
        <div style={{display:"flex", flexDirection:"column", rowGap: "2rem"}}>
           <div style={{display:"flex"}}>
                <div style={{display:"flex", alignItems:"center", width:"358px"}}>
                <p style={{width:"85px"}}>Monday</p>
                <Switch style= {{position:"absolute"}} checked={checked.monday} name= "monday" onChange={handleChange}/>
                </div>
                {checked.monday && <div style={{display:"flex", gap: "1rem"}}>
                <TextField id="mon-from" label="from" type="time" size="small" variant="filled" />
                <TextField id="mon-to" label="to" type="time" size="small" variant="filled" />
                </div>}
           </div>
           <div style={{display:"flex"}}>
                <div style={{display:"flex", alignItems:"center", width:"358px"}}>
                <p style={{width:"85px"}}>Tuesday</p>
                <Switch style= {{position:"absolute"}} checked={checked.tuesday} name= "tuesday" onChange={handleChange}/>
                </div>
                {checked.tuesday && <div style={{display:"flex", gap: "1rem"}}>
                <TextField id="tue-from" label="from" type="time" size="small" variant="filled" />
                <TextField id="tue-to" label="to" type="time" size="small" variant="filled" />
                </div>}
           </div>
           <div style={{display:"flex"}}>
                <div style={{display:"flex", alignItems:"center", width:"358px"}}>
                <p>Wednesday</p>
                <Switch style= {{position:"absolute"}} checked={checked.wednesday} name= "wednesday" onChange={handleChange}/>
                </div>
                {checked.wednesday && <div style={{display:"flex", gap: "1rem"}}>
                <TextField id="wed-from" label="from" type="time" size="small" variant="filled" />
                <TextField id="wed-to" label="to" type="time" size="small" variant="filled" />
                </div>}
           </div>
           <div style={{display:"flex"}}>
                <div style={{display:"flex", alignItems:"center", width:"358px"}}>
                <p style={{width:"85px"}}>Thursday</p>
                <Switch style= {{position:"absolute"}} checked={checked.thursday} name= "thursday" onChange={handleChange}/>
                </div>
                {checked.thursday && <div style={{display:"flex", gap: "1rem"}}>
                <TextField id="thu-from" label="from" type="time" size="small" variant="filled" />
                <TextField id="thu-to" label="to" type="time" size="small" variant="filled" />
                </div>}
           </div>
           <div style={{display:"flex"}}>
                <div style={{display:"flex", alignItems:"center", width:"358px"}}>
                <p style={{width:"85px"}}>Friday</p>
                <Switch style= {{position:"absolute"}} checked={checked.friday} name= "friday" onChange={handleChange}/>
                </div>
                {checked.friday && <div style={{display:"flex", gap: "1rem"}}>
                <TextField id="fri-from" label="from" type="time" size="small" variant="filled" />
                <TextField id="fri-to" label="to" type="time" size="small" variant="filled" />
                </div>}
           </div>
           <div style={{display:"flex"}}>
                <div style={{display:"flex", alignItems:"center", width:"358px"}}>
                <p style={{width:"85px"}}>Saturday</p>
                <Switch style= {{position:"absolute"}} checked={checked.saturday} name= "saturday" onChange={handleChange}/>
                </div>
                {checked.saturday && <div style={{display:"flex", gap: "1rem"}}>
                <TextField id="sat-from" label="from" type="time" size="small" variant="filled" />
                <TextField id="sat-to" label="to" type="time" size="small" variant="filled" />
                </div>}
           </div>
           <div style={{display:"flex"}}>
                <div style={{display:"flex", alignItems:"center", width:"358px"}}>
                <p style={{width:"85px"}}>Sunday</p>
                <Switch style= {{position:"absolute"}} checked={checked.sunday} name= "sunday" onChange={handleChange}/>
                </div>
                {checked.sunday && <div style={{display:"flex", gap: "1rem"}}>
                <TextField id="sun-from" label="from" type="time" size="small" variant="filled" />
                <TextField id="sun-to" label="to" type="time" size="small" variant="filled" />
                </div>}
           </div>
        </div>
    )
}