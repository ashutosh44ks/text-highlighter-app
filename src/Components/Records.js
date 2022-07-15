import SectionHead from "./SectionHead";

const Records = () => {
  return (
    <section className="side-section">
      <SectionHead title="Records" />
      {[1, 2, 3, 4, 5, 6].map((item) => 
        <div className={item===1?"record-item record-item-selected":"record-item"} key={item}>
          {item} Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Tempore et dolores deserunt totam eveniet facere, possimus sequi?
          Ipsam vitae fugit quod hic magni? Ducimus aliquid incidunt asperiores.
          Eaque, facere qui!
        </div>
      )}
    </section>
  );
};

export default Records;
