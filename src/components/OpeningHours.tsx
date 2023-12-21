import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogContent from '@mui/material/DialogContent';

interface OpeningHours {
    [day: string]: {
      Open: boolean;
      OpenTime: number;
      CloseTime: number;
    };
  }
const OpeningHours = (props:{ openingHours:OpeningHours }) => {
  return (
    <DialogContent>
      <Typography variant="h6" gutterBottom>
        Opening Hours
      </Typography>
      <List>
        {Object.entries(props.openingHours).map(([day, { Open, OpenTime, CloseTime }]) => (
          <ListItem key={day}>
            <ListItemText primary={day} secondary={Open ? `${OpenTime} - ${CloseTime}` : 'Closed'} />
          </ListItem>
        ))}
      </List>
    </DialogContent>
  );
};

export default OpeningHours;