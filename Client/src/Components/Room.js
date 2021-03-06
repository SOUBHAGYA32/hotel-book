import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Carousel } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration:'1000'
});


function Room({ room, fromdate, todate }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="row box-s" data-aos="zoom-in">
      <div className="col-md-4">
        <img src={room.image_urls[0]} alt="" className="smallimg" />
      </div>
      <div className="col-md-7 text-left">
        <h1>{room.name}</h1>
        <b>
          <p>Max Count : {room.maxcount}</p>
          <p>Phone Number : {room.phonenumber}</p>
          <p>Type : {room.type}</p>
        </b>
        <div style={{ float: "right" }}>

        {(fromdate && todate) && (
          <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
          <button className="btn">Book Now</button>
        </Link>
        )}
          <button className="btn m-2" onClick={handleShow}>
            View Details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel='Previous' nextLabel='Next'>
          {room.image_urls.map( url =>{
              return <Carousel.Item>
              <img
                className="d-block w-100 bigimg"
                src={url}
              />
            </Carousel.Item>
          })}
            
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;
