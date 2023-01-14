function ProfileCard({title, handle, image}) {
   
    // destructuring in the function argument is the same as:
    // const { title, handle, image } = props;
    
    // you can console.log() the props to make sure that you put in their keys properly in the parent
    // console.log(title, handle, image);

    return(
        <div>
            {/* add in an image element to see the image prop values */}
            <img src={image} alt="pda logo" />
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    );
}

export default ProfileCard;