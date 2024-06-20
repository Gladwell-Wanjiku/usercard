import './index.css'
const UserCard = ({image, fullName})=>{
    return(
        <div className='image'>
            <img src={image} alt={`${fullName} profile`}/>
            <h3>{fullName}</h3>
            <img/>
        </div>
    );
};
export default UserCard;