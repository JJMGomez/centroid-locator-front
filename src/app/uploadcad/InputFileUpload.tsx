import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});



export default function InputFileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);

    //选择了多个文件时，也只取第一个
    const selectedFileHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const uploadfileHandler = () => {
        console.log("The file name is :", selectedFile.name);
        let form_data = new FormData();
        form_data.append("file",selectedFile);
        fetch('http://127.0.0.1:5000/uploadCAD'
          ,{method: 'POST',body: form_data ,mode: 'cors'})
        .catch((err) => {
          console.log(err.message);
       });
    };

  return (
    <>
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload files
      <VisuallyHiddenInput
        type="file"
        onChange={selectedFileHandler}
      />
    </Button>
    <Button onClick={uploadfileHandler}>上传</Button>
    </>
  );
}
