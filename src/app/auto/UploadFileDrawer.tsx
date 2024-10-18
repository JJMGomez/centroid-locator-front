import { useState, Fragment, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, Drawer, Button, List, Divider, Paper, TextField, FormControl, FormLabel } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { uploadCAD } from "../lib/cadAPI";
import { useFormState } from "react-dom";
import { toast, Toaster } from 'react-hot-toast';

type Anchor = "right";

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

export default function UploadFileDrawer() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [circleData, setCircleData] = useState("");
  const [fileName, setFileName] = useState("");
  const [description, setDescription] = useState("");
  const [uploadCADMessage, uploadCADFile] = useFormState(uploadCAD, [-1, undefined]);
  const [fileError, setFileError] = useState(false);
  const [fileErrorMessage, setFileErrorMessage] = useState("");
  //选择了多个文件时，也只取第一个
  const selectedFileHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const [state, setState] = useState({
    right: false
  });

  //TODO 文件校验
  const handleFormSubmit = () => {
    setFileError(false);
    setFileErrorMessage("");
    // if(uploadCADMessage[1]){
    //   toast.success("上传成功")
    // }else{
    //   toast.error("上传失败")
    // }
  }

  useEffect(() => {
  if (uploadCADMessage[0] == 0){
    toast.success(uploadCADMessage[1])
    setState({right: false})
  }
  if (uploadCADMessage[0] == 1){
    toast.error(uploadCADMessage[1])
  }
  },[uploadCADMessage]
  )

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      component="form"
      sx={{ width: 500 }}
      role="presentation"
      action={uploadCADFile}
    >
      <List>
        <FormControl>
          <FormLabel htmlFor="raised-button-file">CAD文件</FormLabel>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              选择CAD文件
              <VisuallyHiddenInput id="file" name="file" type="file" onChange={selectedFileHandler} />
            </Button>
        </FormControl>
        {/* <div>文件名：{selectedFile}</div> */}
        <Divider />  
        <FormControl>
          <FormLabel htmlFor="description">简介: </FormLabel> 
            <TextField
              id="description"
              name="description"
              placeholder="请输入简介"
              multiline
              onChange={descriptionHandler}
          />
        </FormControl>
        <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleFormSubmit}
            >
              提交
        </Button>
      </List>
      <Button
        fullWidth
        onClick={toggleDrawer(anchor, false)}
        >
        取消
      </Button>
    </Box>
  );

  return (
    <div>
      <Toaster />
      {(["right"] as const).map((anchor) => (
        <Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>上传CAD文件</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}