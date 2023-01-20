import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);
    
    // make a handleDeleteClick instead of directly calling onDelete on the onClick, since onDelete needs the id of the book
    const handleDeleteClick = () => {
        onDelete(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    };

    // toggle logic to show component BookEdit
    let content = <h3>{book.title}</h3>;
    if(showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />;
    }

    return (
        <div className="book-show">
            {/* picsum website gives random images (300 width, 200 tall) */}
            <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
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