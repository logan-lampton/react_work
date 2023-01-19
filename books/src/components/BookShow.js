import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete }) {
    const [showEdit, setShowEdit] = useState(false);
    
    // make a handleDeleteClick instead of directly calling onDelete on the onClick, since onDelete needs the id of the book
    const handleDeleteClick = () => {
        onDelete(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    // toggle logic to show component BookEdit
    let content = <h3>{book.title}</h3>;
    if(showEdit) {
        content = <BookEdit />;
    }

    return (
        <div className="book-show">
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BookShow;