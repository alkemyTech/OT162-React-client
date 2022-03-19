import CKEditor from "ckeditor4-react";

const DescriptionField = (props) => {
  return (
    <CKEditor
      name={props.field.name}
      editor="classic"
      onChange={props.onChange}
      data={props.field.value}
      config={{
        toolbar: [
          ["Source", "-", "NewPage", "Preview", "-", "Templates"],
          [
            "Cut",
            "Copy",
            "Paste",
            "PasteText",
            "-",
            "Undo",
            "Redo",
            "-",
            "Bold",
            "Italic",
            "Underline",
            "-",
            "NumberedList",
            "BulletedList",
            "-",
            "Link",
            "Unlink",
            "Anchor",
            "-",
            "Image",
            "Table",
          ],
          "/",
          ["Styles", "Format", "Font", "FontSize", "-", "TextColor", "BGColor"],
        ],
      }}
    />
  );
};

export default DescriptionField;
