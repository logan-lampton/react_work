function ProfileCard({title, handle, image, description}) {
   
    // destructuring in the function argument is the same as:
    // const { title, handle, image, description } = props;
    
    // you can console.log() the props to make sure that you put in their keys properly in the parent
    // console.log(title, handle, image, description);

    return(
        // be sure to write in JSX format, not HTML (ex: className, not class)
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    {/* add in an image  (img src=...) to see the image prop values */}
                    <img src={image} alt="pda logo" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
            </div>

            <div className="content">
                {description}
            </div>

        </div>
    );
}

export default ProfileCard;