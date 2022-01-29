const SubmitForm = ({data, back}) => {
  const formItems = Object.entries(data).map(([key, value]) => (
    <li key={data.phone}>
      <strong>{key}:</strong> {value}
    </li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>{formItems}</ul>
        <button type="button" onClick={back}>
          Back
        </button>{' '}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitForm;
