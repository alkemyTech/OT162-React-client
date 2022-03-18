import CKEditor from "ckeditor4-react";

const DescriptionField = (props) => {
  //   const handleInput = (e) => {
  // Por algun motivo no funciona (hay un issue respecto a esto pero no encontre solucion)
  //      props.setFieldValue("description", e.editor.getData());
  //   };
  return <CKEditor name={props.field.name} onChange={props.onChange} />;
};

export default DescriptionField;
