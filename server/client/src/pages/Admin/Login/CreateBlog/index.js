import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import axios from "axios";
import CustomInput from "../../../../components/Custom/textinput";
// <<<<<<< Updated upstream
import { useDropzone } from "react-dropzone";

import Dropzone from "react-dropzone";
// import Editor from "./editor";
// // >>>>>>> Stashed changes
import Select from "react-select";
import * as Yup from "yup";
import { CreateBlog } from "../../../../services/services";
import { Card, CardBody, Label, Button, Input } from "reactstrap";
import JoditEditor from "jodit-react";
import { useRef } from "react";
const Example = ({ onChange }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  const onBlur = (event) => {
    console.log("=====================", event);
    const editorValue = event.target.innerHTML;
    setContent(editorValue);
    onChange && onChange(editorValue);
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={onBlur} // preferred to use only this option to update the content for performance reasons
      onChange={(newContent) => {}}
    />
  );
};

// import "./index.css";

const AddPost = () => {
  const history = useHistory();
  const blogSchema = Yup.object().shape({
    title: Yup.string().required("Please enter title"),
    // content: Yup.string().required("Please enter content"),
  });
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  const Options = [
    { label: "Women", value: "women" },
    { label: "Men", value: "men" },
    { label: "Products", value: "products" },
    { label: "Nailarts", value: "nailarts" },
    { label: "Hairstyles", value: "hairstyles" },
    { label: "Hair Spa", value: "hairspa" },
  ];
  const [categoryError, setCategoryError] = useState("");
  const [category, setCategory] = useState("");
  const handleUrlSelectChange = (item) => {
    setCategory(item);
    setCategoryError("");
  };
  const [file, setFile] = useState(null);
  const [dimension, setDimension] = useState({});
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // const handleCallback = (files) => {
  //   if (files.length <= 0) {
  //     setIsError(true);
  //     setErrorMessage("Please enter valid image file");
  //   }
  //   files.map((file) => {
  //     Object.assign(file, {
  //       preview: URL.createObjectURL(file),
  //     });
  //     var img = new Image();
  //     img.src = file.preview;
  //     img.onload = () => {
  //       setDimension({
  //         height: img.height,
  //         width: img.width,
  //       });

  //       // if (img.height < 1000 || img.width < 1000) {
  //       //   setIsError(true);
  //       //   setErrorMessage(
  //       //     "Blog Image too small. Must be at least 1000x1000 px."
  //       //   );
  //       // } else {
  //       //   setIsError(false);
  //       //   setErrorMessage("");
  //       // }
  //     };
  //   });

  //   if (!files) return;
  // };

  // const onDrop = useCallback(
  //   async (acceptedFiles) => {
  //     handleCallback(acceptedFiles);
  //     setImageFile(
  //       acceptedFiles.map((file) =>
  //         Object.assign(file, {
  //           preview: URL.createObjectURL(file),
  //         })
  //       )
  //     );
  //   },

  //   //eslint-disable-next-line
  //   [imagefile]
  // );

  // const { getRootProps, getInputProps } = useDropzone({
  //   onDrop,
  //   accept: {
  //     "image/*": [
  //       ".pjp",
  //       ".jfif",
  //       ".bmp",
  //       ".gif",
  //       ".svg",
  //       ".png",
  //       ".dib",
  //       ".jxl",
  //       ".jpeg",
  //       ".svgz",
  //       ".jpg",
  //       ".webp",
  //       ".ico",
  //       ".pjpeg",
  //       ".avif",
  //     ],
  //   },
  //   multiple: false,
  //   // minSize: 0,
  //   // maxSize: 84,
  // });

  // const removeFile = (file) => {
  //   const newFiles = [...imagefile];
  //   newFiles.splice(file, 1);
  //   setImageFile(newFiles);
  //   setIsError(false);
  // };

  // const thumbs = imagefile.map((file, index) => (
  //   <div className="imgthumb mr-3" key={file.name}>
  //     <div className="thumbInner">
  //       <img
  //         src={file.preview}
  //         alt="wallpaper"
  //         className="previewimg"
  //         style={{ width: 100 }}
  //       ></img>
  //     </div>
  //     <button
  //       type="button"
  //       className="thumbButton"
  //       onClick={() => removeFile(index)}
  //     >
  //       ❌
  //     </button>
  //   </div>
  // ));

  const contentFieldChanaged = (data) => {
    setPost({ ...post, content: data });
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log("---------category", category);
    if (category === "") {
      setCategoryError("Please select category");
    } else {
      setCategoryError("");
    }
    // console.log("Image Data***************",imagefile)
    const data = new FormData();
    // data.append("title", values.title);
    // data.append("article", post.content);
    // data.append("authorname", values.author);
    data.append("file", file);
    data.append("upload_preset", "uploads");
    // data.append("category", category.value);
    const uploadRes = await axios.post(
      "https://api.cloudinary.com/v1_1/quarec/image/upload",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const { url } = uploadRes.data;

    const blogData = {
      title: values.title,
      article: values.content,
      authorname: values.author,
      articleImage: url,
      category: category.value,
    };
    // const blogData = new FormData();
    // blogData.append("title", values.title);
    // blogData.append("article", values.content);
    // blogData.append("authorname", values.author);
    // blogData.append("articleImage", url);
    // blogData.append("category", category.value);

    // console.log("URL", url);
    console.log("blogData===================", blogData);
    const res = await axios.post("/blog", blogData);
    if (res.status === 200) {
      history.push("/blogs");
      localStorage.clear();
    }
    resetForm();
    console.log("------------res------------", res);
    // const data = {
    //   title: values.title,
    //   article: post.content,
    //   authorname: values.author,
    //   articleImage: imagefile[0].name,
    //   category: category.value,
    // };
    // CreateBlog(data)
    //   .then((response) => {
    //     console.log("----Response----- ", response);
    //   })
    //   .catch((err) => {
    //     console.log("{errrr", err);
    //   });
  };

  //create post function

  return (
    <div className="wrapper">
      {/* <div className="container my-2 flex justify-end ">
      <Button className="bg-black">Show Appointment Data</Button>
      </div> */}
      <Card className="container shadow-lg  border-0 my-5 ">
        <CardBody>
          {/* {JSON.stringify(post)} */}
          <h3 className="flex justify-center text-2xl">Create New Blog</h3>

          <Formik
            initialValues={{
              title: "",
              content: "",
              author: "",
            }}
            validationSchema={blogSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, values, handleChange }) => (
              <Form>
                <Label for="title">Blog title</Label>
                <CustomInput
                  type="text"
                  placeholder="Enter blog title"
                  className="rounded-0"
                  name="title"
                  handleChange={handleChange}
                  values={values}
                  touched={touched}
                  errors={errors}
                />

                <Label for="title">Blog Content</Label>

                <Input
                  type="textarea"
                  name="content"
                  value={values.content}
                  onChange={handleChange}
                  placeholder="Enter Blog Content"
                  className="rounded-0"
                  touched={touched}
                  errors={errors}
                />

                {/* <JoditEditor
                  ref={editor}
                  name="content"
                  value={post.content}
                  onChange={(newContent) => contentFieldChanaged(newContent)}
                /> */}
                {/* <Example onChange={handleChange} />
                      <div dangerouslySetInnerHTML={{ __html: content }}></div> */}

                <Label for="title" className="mt-4">
                  Author Name
                </Label>
                <CustomInput
                  type="text"
                  placeholder="Enter author name"
                  className="rounded-0"
                  name="author"
                  handleChange={handleChange}
                  values={values}
                  touched={touched}
                  errors={errors}
                />

                <Label for="title">Upload Blog Image</Label>
                <Input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />

                {/* <div className="drop-zone-container mb-30">
                  
                  <section>
                    <div
                      {...getRootProps({
                        className: "dropzone",
                      })}
                    >
                      <input {...getInputProps()} />
                      <p
                        className="text-center"
                        
                      >
                        Drag `n` drop some image file here, or click to select
                        files
                      </p>
                    </div>
                    <aside className="thumbsContainer">{thumbs}</aside>
                    {imagefile.length > 6 && (
                                <div
                                  style={{ fontSize: 14 }}
                                  className="text-left text-danger"
                                >
                                  {"Please enter only 6 ringtones"}
                                </div>
                              )}
                    {isError ? (
                      <div
                        style={{ fontSize: 14 }}
                        className="text-left mt-1 text-danger"
                      >
                        {errorMessage !== "" ? errorMessage : null}
                      </div>
                    ) : null}
                  </section>
                </div> */}

                <Label for="title" className="mt-4">
                  Select Category
                </Label>
                <Select
                  name="category"
                  options={Options}
                  getOptionLabel={(option) => option.label}
                  getOptionValue={(option) => option.value}
                  onChange={handleUrlSelectChange}
                />
                <div className="mt-1 text-danger">
                  {categoryError ? categoryError : null}
                </div>

                <div className="flex justify-center mt-10 ">
                  <Button
                    type="submit"
                    className="bg-black"
                    onSubmit={handleSubmit}
                  >
                    Create
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
      {/* <Editor /> */}
    </div>
  );
};

export default AddPost;
