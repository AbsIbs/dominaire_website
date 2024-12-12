import Link from "next/link";

const FilterComponent = ({ searchParams }) => {
  const options = ["All", "Development", "Design"];

  const FilterButton = ({ name }) => (
    <Link
      href={`?filter=${name}`}
      className={`rounded-full border py-4 px-10 ${
        !searchParams.filter && name === "All"
          ? "border-transparent bg-white text-text-normal"
          : searchParams.filter === name
          ? "border-transparent bg-white text-text-normal"
          : "border-[rgba(136,136,136)]"
      }`}
    >
      <p className="res-text-28">{name}</p>
    </Link>
  );

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((name, index) => (
        <FilterButton key={index} name={name} />
      ))}
    </div>
  );
};

export default FilterComponent;
