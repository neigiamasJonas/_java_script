import randColor from "../../Functions/randColor";

function Animal({ name, img }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <figure>
          <figcaption style={{ backgroundColor: randColor(), width: "200px" }}>
            {name}
          </figcaption>
          <img style={{ width: "200px" }} src={img} alt={name + "-animal"} />
        </figure>
      </div>
    </>
  );
}

export default Animal;
