import Link from "next/link";

const FilterComponent = ({ searchParams }) => {
  const options = ["All", "Development", "Design"];

  const FilterButton = ({ name }) => (
    <Link
      href={`?filter=${name}`}
      className={`rounded-full border py-6 px-12 ${
        !searchParams.filter && name === "All"
          ? "bg-surface border-transparent text-white"
          : searchParams.filter === name
          ? "bg-surface border-transparent text-white"
          : "border-line"
      }`}
    >
      <p className="res-text-base">{name}</p>
    </Link>
  );

  return (
    <div className="flex gap-2">
      {options.map((name, index) => (
        <FilterButton key={index} name={name} />
      ))}
    </div>
  );
};

export default FilterComponent;
