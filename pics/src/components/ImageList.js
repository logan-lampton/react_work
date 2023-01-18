// maps and creates the list of images consisting of ImageShow.js
import ImageShow from './ImageShow';
import './ImageList.css';

function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        // always put the key prop on the topmost element
        // Ex: on the div, if the ImageShow was wrapped in a div
        return <ImageShow key={image.id} image={image} />;
    });

    return <div className="image-list">{renderedImages}</div>
}

export default ImageList;