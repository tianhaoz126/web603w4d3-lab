import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ProductModal = ({ product, isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {product?.name}
      </ModalHeader>
      <ModalBody>
        <img 
          src={product?.image} 
          alt={product?.name} 
          width="350"
          className="mx-auto d-block"
        />
        <p>{product?.description}</p>
        <p>
          <span className="text-dark">Ratings:</span> {product?.ratings}/5
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ProductModal;
