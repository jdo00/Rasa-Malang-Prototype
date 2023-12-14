import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useEffect, useState } from "react";

type DietaryCriteriaData = {
    dietaryChips: ChipData[]
  }

  type DietaryCriteriaFormProps = DietaryCriteriaData & {
    updateFields: (fields: Partial<DietaryCriteriaData>) => void
  }

  export interface ChipData {
    key: number;
    label: string;
    focused: boolean;
  }
export function DietaryCriteriaForm ({dietaryChips, updateFields}:DietaryCriteriaFormProps) {

  const [chipData, setChipData] = useState<readonly ChipData[]>(dietaryChips);
  
  useEffect(() => {
    console.log(chipData);
    updateFields({dietaryChips: [...chipData]})
  }, [chipData]);

  const handleClick = (chipToToggle: ChipData) => {
     setChipData(prevState => prevState.map(chip =>
      chip.key === chipToToggle.key
        ? { ...chip, focused: !chip.focused } 
   : chip ))
   }
    return (
     <div style={{display:"flex", flexWrap:"wrap", gap:"2rem"}}>
        {chipData.map((chip) => {
        return (
         
          <div key={chip.key} style={{display: 'flex' }}>
            <Chip
              label={chip.label}
              onClick= {()=>handleClick(chip)}
              color= {chip.focused ? "primary": "default"}
              sx={{width: "9rem"}}
            />
          </div>
      
        );
      })}
      </div>
    )
    }