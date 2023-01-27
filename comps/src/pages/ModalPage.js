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
    
    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
           {/* only show Modal if setModal(true) */}
           {showModal && <Modal onClose={handleClose} />}
        </div>
    )
};

export default ModalPage;