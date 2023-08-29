import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function AltertToast(prope) {
  const [showA, setShowA] = useState(true);
  console.log("iam render in altertost",showA);
  const date = new Date();
  // {!showA && setShowA(true) }
  // setShowA(true);
  //  date and time 
  function getCurrentDateTime() {
    const currentDate = new Date();
  
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
  
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
  
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
  }
  // end of the date and time 


  const toggleShowA = () => setShowA(!showA);
 

  return (
    <Row>
      <Col md="12" className="mb-2">
        {/* <Button onClick={toggleShowA} className="mb-2">
          Toggle Toast <strong>with</strong> Animation
        </Button> */}
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
           
            <strong className="me-auto">City name not found </strong>
            <small> {getCurrentDateTime()} </small>
          </Toast.Header>
          {/* <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body> */}
        </Toast>
      </Col>
     
    </Row>
  );
}

export default AltertToast;