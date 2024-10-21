const Card = ({ children }) => {

    const estiloCard = {
      border: '1px solid #ccc', 
      borderRadius: '8px',      
      padding: '16px',      
      margin: '10px',            
    };
  
    return <div style={estiloCard}>{children}</div>;
  };
export default Card