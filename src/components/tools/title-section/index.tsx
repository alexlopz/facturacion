const TitleSeccion: React.FC<any> = ({ title, value }) => {
  return (
    <>
      <span style={{fontSize: 20}}><strong>{title}</strong> {' '}{value}</span> 
    </>
  );
};

export default TitleSeccion;
