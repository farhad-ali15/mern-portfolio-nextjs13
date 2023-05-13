import React, { useId } from "react";

const ProExp = ({ data }) => {
  const { title, experiences } = data;
  const id = useId();
  return (
    <section>
      <h2 className="mb-6">{title}</h2>
      <div className="flex flex-col gap-6">
        {experiences.map(({ role, description, current }, i) => (
          <div key={`${id}_${i}`} className="flex flex-col rounded-lg">
            <span className={`h-2 ${current ? "bg-green" : "bg-grey"}`} />
            <div className="bg-grey-light p-6 drop-shadow-md">
              <h3 className="text-2xl font-semibold">{role}</h3>
              <p className="mb-3 text-lg">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProExp;
