function ProfileCard({title, handle}) {
   
    // destructuring in the function argument is the same as:
    // const { title, handle } = props;
    
    return(
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    );
}

export default ProfileCard;