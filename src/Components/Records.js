import SectionHead from "./SectionHead";
import { ReactComponent as HamMenu } from "./hamburger-menu.svg";
import { useState } from "react";

const Records = () => {
  const [openSideLeft, setOpenSideLeft] = useState(true);

  return (
    <>
      {openSideLeft === true ? (
        <section className="side-section records">
          <SectionHead
            title="Records"
            openSide={openSideLeft}
            setOpenSide={setOpenSideLeft}
          />
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              className={
                item === 1 ? "record-item record-item-selected" : "record-item"
              }
              key={item}
            >
              {item} Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Tempore et dolores deserunt totam eveniet facere, possimus sequi?
              Ipsam vitae fugit quod hic magni? Ducimus aliquid incidunt
              asperiores. Eaque, facere qui!
            </div>
          ))}
        </section>
      ) : (
        <div
          className="mini-side mini-records"
          onClick={() => setOpenSideLeft(!openSideLeft)}
        >
          Records
        </div>
      )}
    </>
  );
};

export default Records;
