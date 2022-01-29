const PersonalDetails = ({data, handleChange, next}) => {
  return (
    <form>
      <label htmlFor="first-name">First Name:</label>
      <input
        type="text"
        name="firstname"
        value={data.firstname}
        onChange={handleChange}
      />

      <label htmlFor="last-name">Last Name:</label>
      <input
        type="text"
        name="lastname"
        value={data.lastname}
        onChange={handleChange}
      />

      <button type="button" onClick={next}>
        Next
      </button>
    </form>
  );
};

export default PersonalDetails;
