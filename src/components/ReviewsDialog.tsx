import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Rating from "@mui/material/Rating";

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
  }

  const reviews = [
    {
      title: 'Bestes Lippenmasken-Duo!',
      text: 'This is 💯 one hundred percent the best lip mask duo ever !!! The scent is delicious and it’s so smooth from the scrub & mask ~ This is perfection~ Smells just like honey 🍯 & the packaging is so adorable ~ I’m so very happy with this product 🐻 🍯 ~',
      rating: 5,
    },
    {
      title: 'Hervorragende Essenserfahrung!',
      text: 'Absolutely thrilled with this dining experience! 🌟 The ambiance was delightful, and the attention to detail was impeccable. The menu presented a perfect duo, much like the best lip mask set ever. Each dish was a flavorful journey, just like the delicious scent of honey in the lip mask. The smooth transition from the appetizer (scrub)',
      rating: 4,
    },
    {
      title: 'Fantastische Hautpflege!',
      text: 'I am in love with this skincare routine! The products are gentle yet effective. My skin feels so refreshed and hydrated. The packaging is also eco-friendly, which is a big plus for me. I highly recommend this skincare line!',
      rating: 4,
    },
    {
      title: 'Perfekter Sommerduft!',
      text: 'The fragrance of this summer perfume is absolutely divine. It\'s like a burst of sunshine in a bottle. The notes are well-balanced, and the longevity is impressive. I receive compliments every time I wear it. A must-have for any perfume enthusiast!',
      rating: 5,
    },
    {
      title: 'Stilvolles Accessoire!',
      text: 'This accessory is the perfect addition to my wardrobe. The craftsmanship is exceptional, and it adds a touch of elegance to any outfit. The versatility of this piece makes it a staple in my collection. I couldn\'t be happier with my purchase!',
      rating: 4,
    },
  ];
export function ReviewsDialog (props: SimpleDialogProps) {

    const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog onClose={handleClose} open={open}  fullWidth
    maxWidth="sm" sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "380px",
          },
        },
      }}>
      <DialogTitle>Deteailed reviews</DialogTitle>
      <List sx={{ pt: 0 , padding:"1rem"}}>
      {reviews.map((review, index) => (
          <ListItem disableGutters key={index}>
          <ListItemText
            primary={review.title}
            secondary={review.text}
          />
          <Rating name="read-only" value={review.rating} readOnly sx={{ ml: 'auto', alignSelf: 'flex-start' }} />
        </ListItem>
      ))}
      </List>
      <Button onClick={handleClose}>close</Button>
    </Dialog>
  );
}
