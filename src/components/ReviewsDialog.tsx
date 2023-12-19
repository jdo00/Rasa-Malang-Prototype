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
      title: 'makanan yang sangat lezat',
      text: 'Salah satu comfort food kalo udah gak tau mau makan apa lagi. Rasanya oke, harga lumayan murah, dan porsinya bikin kenyang meskipun tanpa additional nasi karena dari steaknya sendiri udah include sama kentanganya. Pelayanannya lumayan cepet dan stafnya juga ramah bgt. Tempatnya lumayan luas dan bersihhhhhh n rapi bgt. Minusnya di outlet ini pembayarannya cash only, gabisa pake qris:”',
      rating: 4,
    },
    {
      title: 'Sangat populer di kalangan wanita muda',
      text: 'Tempat yg cukup populer apalagi di kalangan sista2 yah.. steak harga murah bersahabat tp kualitas rasa jg oke. Tempatnya nyaman dan luas, ada lantai 2 juga top deh. Pelayanan cepat sat set tempatnya jg bersih. Tp maaf menurutku es tehnya kemanisan sampe aku tambahin air lagi. Dan agak kecewa karena beli air minum harga 5.5k yg datang malah air minum prim* ku kira harga segitu minimal aqu* lah yaa :((',
      rating: 5,
    },
    {
      title: 'Biaya dibawa pulang',
      text: 'Enak aja, worth untuk harga dan rasa👍 tempat nya juga luas. Pelayanan ramah dan bagus, mesen untuk dibungkus pelayanannya cepat. Untuk take away kena charge 1,000 tapi ada tukang parkirnya gais',
      rating: 4,
    },
    {
      title: 'Enak',
      text: 'Outlet disini sama luasnya tempat makannya seperti di Mall Dinoyo City hanya saja yang membedakan sausnya lebih banyak disana sedangkan jagung kentang lebih besar banyak disini. Ukuran steaknya dan rasa masih tetap sama kok 🤭',
      rating: 5,
    },
    {
      title: 'Tolong lebih banyak saus',
      text: 'Rasa steaknya lumayan, tersedia 2 pilihan daging, steak daging ayam dan sapi, harganya pun murah meriah. Cuma untuk yang sapi agak alot dikit. Suasana nya enak, dan santai. Cuma lantai 2 lampunya agak suram. Saran : next untuk saus bisa diberikan beberapa alternatif. Seperti saus lada hitam, saus keju dll',
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
      <DialogTitle>Detailed reviews</DialogTitle>
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
