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
    
    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
           {/* only show Modal if setModal(true) */}
           {showModal && <Modal />}
        </div>
    )
};

export default ModalPage;