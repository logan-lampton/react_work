import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    // set state
    const [showModal, setShowModal] = useState(false);

    // click event handler
    const handleClick = () => {
        setShowModal(true);
    };

    // close click event handler
    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            This is important! Do you accept that this is important?
        </p>    
    </Modal>
    
    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
           {/* only show Modal if setModal(true) */}
           {showModal && modal}
        </div>
    )
};

export default ModalPage;