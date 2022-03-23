/* eslint-disable */
const Address = () => {
  return (
    <form>
      <label htmlFor="street">Street:</label>
      <input
        type="text"
        name="street"
        value={data.street}
        onChange={handleChange}
      />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        name="city"
        value={data.city}
        onChange={handleChange}
      />
      <label htmlFor="state">State:</label>
      <input
        type="text"
        name="state"
        value={data.state}
        onChange={handleChange}
      />
      <button type="button" onClick={back}>
        Back
      </button>{' '}
      <button type="button" onClick={next}>
        Next
      </button>
    </form>
  );
};

export default Address;
