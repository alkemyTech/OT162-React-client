const ActivityContent = ({ description }) => {
  return (
    <>
      {description ? (
        <span dangerouslySetInnerHTML={{ __html: description }} />
      ) : (
        <span>No hay descripción</span>
      )}
    </>
  );
};

export default ActivityContent;
