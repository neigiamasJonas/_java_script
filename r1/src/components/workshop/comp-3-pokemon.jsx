function Pokemon({ name, url }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        marginBottom: "20px",
      }}
    >
      <div>
        <b>Name:</b> <i style={{fontSize: '20px', fontWeight: '500', marginLeft: '10px'}}>{name}</i>
      </div>
      <div>
        <b>Link:</b> <a style={{marginLeft: '10px'}} href={url}> Press Here</a>
      </div>
    </div>
  );
}

export default Pokemon;
