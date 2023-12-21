import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { RestaurantReview } from "./RestaurantReview";
import { useState } from "react";
import OpeningHours from "./OpeningHours";

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
  }

export function RestaurantProfileDialog (props: SimpleDialogProps) {

    const { onClose, open } = props;

    const handleClose = () => {
      onClose();
    };
    const [currentContent, setCurrentContent] = useState('review');

    const handleButtonClick = (content:string) => {
      setCurrentContent(content);
    };
    const openingHoursData: OpeningHours = {
        Friday: { Open: true, OpenTime: 1000, CloseTime: 2100 },
        Monday: { Open: true, OpenTime: 1000, CloseTime: 2100 },
        Saturday: { Open: true, OpenTime: 1000, CloseTime: 2100 },
        Sunday: { Open: true, OpenTime: 1000, CloseTime: 2100 },
        Thursday: { Open: true, OpenTime: 1000, CloseTime: 2100 },
        Tuesday: { Open: true, OpenTime: 1000, CloseTime: 2100 },
        Wednesday: { Open: true, OpenTime: 1000, CloseTime: 2100 },
      };
      
    return (
        <Dialog
        onClose={handleClose}
        open={open}
        fullWidth
        maxWidth="sm"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "380px",
              backgroundColor: "#e6e2dd"
            },
          },
        }}
      >
        {currentContent === 'review' && <RestaurantReview />}
        {currentContent === 'openingHours' && <OpeningHours openingHours={openingHoursData}/>}
        
        {currentContent === 'openingHours' && <Button onClick={() => handleButtonClick('review')}>Restaurant Review</Button>}
        {currentContent === 'review' && <Button onClick={() => handleButtonClick('openingHours')}>Opening Hours</Button>}
        <Button onClick={handleClose}>Close</Button>
      </Dialog>
    );
} 