import React, { useState } from 'react';
import Modal from 'react-modal';

// Custom styles for the modal content
const customStyles = {
  content: {
    width: '35%',    // Adjust the width to your desired size
    height: '35%',   // Adjust the height to your desired size
    margin: 'auto',  // Center the modal
  },
};

function MyComponent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        style={customStyles} // Apply custom styles
      >
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
        <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default MyComponent;
