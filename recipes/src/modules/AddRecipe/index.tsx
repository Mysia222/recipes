import {
  Form,
  InputNumber,
  Input,
  Button,
  Upload,
  Rate,
  Space,
  Col,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { observer } from "mobx-react";
import { useStores } from "../../stores/index";
import React, { useCallback, useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import {
  UploadOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import noImage from "../../images/no-image.jpg";
import { Typography } from "antd";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import FormItem from "antd/lib/form/FormItem";

const AddRecipe = observer(() => {
  const { recipeStore } = useStores();
  const { Title } = Typography;
  const images = [{ url: noImage }];
  const addPhoto = (value: any) => console.log(value);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    let a = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.info(a);
  }, []);

  function getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const dummyRequest = async ({ file, onSuccess }: any) => {
    let strImg: any = await getBase64(file);
    recipeStore.addImage(strImg);
    console.info(recipeStore?.imageList?.length && recipeStore.imageList);
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  return (
    <>
      <Title>Add Recipe</Title>
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Required field",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form layout="vertical">
        <div className="slider">
          <SimpleImageSlider
            width={400}
            height={400}
            images={
              (recipeStore?.imageList?.length && recipeStore.imageList) ||
              images
            }
            showBullets={true}
            showNavs={true}
          />
          <Form.Item name="uploadImg">
            <Upload name="uploadImg" customRequest={dummyRequest}>
              <Button icon={<UploadOutlined />}>Add image</Button>
            </Upload>
          </Form.Item>
        </div>
        <div>Ingridients: </div>
        <Form.List name="ingridients">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "name"]}
                    fieldKey={[fieldKey, "name"]}
                    rules={[{ required: true, message: "Required field" }]}
                  >
                    <Input placeholder="Ingridients" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "amount"]}
                    fieldKey={[fieldKey, "amount"]}
                    rules={[{ required: true, message: "Required field" }]}
                  >
                    <InputNumber placeholder="Amount" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Ingridient
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <div
          style={{
            border: "1px solid black",
            padding: "2px",
            minHeight: "400px",
          }}
        >
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={setEditorState}
          />
        </div>
        <FormItem>
          <Button type="primary" htmlType="submit" className="submitBtn">
            Submit
          </Button>
        </FormItem>
      </Form>
    </>
  );
});
export default AddRecipe;
