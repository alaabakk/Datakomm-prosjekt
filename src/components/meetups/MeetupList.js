import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function UserList(props) {
  return (
    <ul className={classes.list}>
      {props.allUserData.map((userData) => (
        <MeetupItem
          key={userData.id}
          id={userData.id}
          image={userData.image} //må fjernes senere
          first_name={userData.first_name}
          last_name={userData.last_name}
          address={userData.address}
          description={userData.description}
        />
      ))}
    </ul>
  );
}



export default UserList;
