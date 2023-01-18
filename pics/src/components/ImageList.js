// maps and creates the list of images consisting of ImageShow.js
import ImageShow from './ImageShow';

function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        return <ImageShow image={image} />
    })

    return <div>{renderedImages}</div>
}

export default ImageList;