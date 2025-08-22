const UserList = (props) => {
  return (
    <div className="bg-green-400 max-w-80">
      <p>{props.id}</p>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
    </div>
  );
};
export default UserList;
