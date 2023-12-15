import Button from "@mui/material/Button";
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export function MenuUploadForm () {
    const [files, setFiles] = useState<string[]>([])
    const [pictures, setPictures] = useState<FileList | null>();
    const [counter, setCounter] = useState(0)
    const pictureAmount = 5;
    const [imageLoading, setImageLoading] = useState(false);
    const [errorTxtUploading, setErrorTxtUploading] = useState("")

    const handleFileChange = (event: React.FormEvent<HTMLInputElement>) => {
        const selectedFiles = [];
        const target = event.target as HTMLInputElement;
        setImageLoading(true);
        setPictures(target.files);
        for (let i = 0; i < target!.files!.length; i++) {
            selectedFiles.push(URL.createObjectURL(target!.files![i]))
        }
        setFiles(selectedFiles);
        setCounter(target!.files!.length);
        target!.files!.length > pictureAmount ? setErrorTxtUploading(`Please upload only ${pictureAmount} pictures`) : setErrorTxtUploading("")
        setImageLoading(false)
    }
    const handleDeleteSelection = (event: React.MouseEvent) => {
        setCounter(0)
        setPictures(null)
        setFiles([])
        setErrorTxtUploading("")
    }
    return (
        <div >
             {imageLoading ?
                <>
                    <div style={{ position: 'fixed', background: 'rgba(0,0,0,0.25)', width: '100%', height: '100%', top: '0', left: '0', zIndex: '2' }}></div>
                    <div style={{ position: 'fixed', left: '50%', top: '50%', zIndex: '2' }}>
                        <CircularProgress />
                    </div>
                </>
                :

                <div style={{
                    backgroundColor: 'rgba(185, 185, 185,0.65)',
                    maxWidth: '800px',
                    width: '100%',
                    margin: '0px auto 0px',
                    overflowX: 'auto', 
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    justifyContent: 'center',
                    borderRadius: "4px"

                }}>
                    {(files || []).map(file => (
                        <div style={{ display: "table-cell", verticalAlign: "middle", padding: "5px" }} key={file}>
                            <img src={file} key={file} alt='Uploaded Picture'
                                style={{ maxWidth: '250px', maxHeight: "150px", objectFit: "contain" }} />
                        </div>
                    ))}
                </div>
            }
            {errorTxtUploading !== "" && <div style={{
                backgroundColor: 'rgba(185, 185, 185,0.65)',
                maxWidth: '800px',
                width: '80%',
                margin: '0px auto 0px',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>

                <p style={{ color: 'rgba(207, 48, 48,1)', textAlign: 'center' }}>{errorTxtUploading}</p>
            </div>}
            {counter > 0 ? (
                <div style={{
                    backgroundColor: 'rgba(185, 185, 185,0.65)',
                    maxWidth: '800px',
                    width: '100%',
                    margin: '10px auto 0px',
                    display: 'flex',
                    justifyContent: 'center',
                    borderRadius: "4px"
                }}>
                    <Button sx={{ width: '100%' }} onClick={handleDeleteSelection}>Delete Images</Button>
                </div>) :
                <></>
            }
        <Button
          variant="contained"
          component="label"
          startIcon={<AddAPhotoOutlinedIcon sx={{ fontSize: 40, margin: '10px', color: 'gray' }}/>}
          sx={{ fontSize: 20,
            padding: '4.5%',
            textAlign: 'center',
            display: 'flex',
            ml: 'auto',
            mr: 'auto',
            mt: '3%',
            width: '100%',
            height: '250px',
            color: 'gray',
            maxWidth: '800px',
            backgroundColor: 'rgba(185, 185, 185,0.65)',
            '&:hover': {
              backgroundColor: 'rgba(185, 185, 185,1)'
            },
            justifyContent: 'center'}}
            >
          Upload Menu
          <input type="file" hidden accept="image/jpeg,image/gif,image/png" name="file" id="file" multiple onChange={handleFileChange}/>
        </Button>
      </div>
    )
}