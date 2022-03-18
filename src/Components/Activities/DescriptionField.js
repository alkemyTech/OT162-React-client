import CKEditor from "ckeditor4-react";

const DescriptionField = (props) => {
  return (
    <CKEditor
      name={props.field.name}
      onChange={props.onChange}
      data={props.field.value}
    />
  );
};

export default DescriptionField;
