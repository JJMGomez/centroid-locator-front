"use client";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import DrawCircle from "./DrawCircle";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import TemporaryDrawer from './uploadFileDrawer';
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Upload() {
 
  const [selectedFile, setSelectedFile] = useState(null);
  const [circleData, setCircleData] = useState("");
  const [fileName, setFileName] = useState("");
  //选择了多个文件时，也只取第一个
  const selectedFileHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const sendCircleData = (data) => {
    setCircleData(data);
  };
  const uploadFileHandler = () => {
    let form_data = new FormData();
    form_data.append("file", selectedFile);
    fetch("http://127.0.0.1:8000/parse", {
      method: "POST",
      body: form_data,
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        // data.forEach(element => {
        //   console.log(element)
        // });
        // console.log(data)
        sendCircleData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <TemporaryDrawer></TemporaryDrawer>
      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid size={20}>
            <Item>
              
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
              >
                选择CAD文件
                <VisuallyHiddenInput
                  type="file"
                  onChange={selectedFileHandler}
                />
              </Button>
              <div>当前文件：{fileName}</div>
              
            </Item>
          </Grid>

          <Grid size={12}>
            <Button variant="outlined" onClick={uploadFileHandler}>
                上传
              </Button>
            <Item>
              <DrawCircle data={circleData} />
            </Item> 
          </Grid>
        </Grid>
      </Box> */}
    </>
  );
}
