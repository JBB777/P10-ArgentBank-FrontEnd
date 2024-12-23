function Field({ className, id, label, type, target }) {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} onChange={target} />
    </div>
  );
}

export default Field;
