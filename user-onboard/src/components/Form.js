export default function UserForm(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  return (
    <div className="container">
      <h1>Simple Form</h1>

      <form onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={onChange}
            value={values.name}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={onChange}
            value={values.email}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={onChange}
            value={values.password}
          />
        </label>
        <label>
          Terms of Service
          <input type="checkbox" name="termsOfService" />
        </label>
        <div className="submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
