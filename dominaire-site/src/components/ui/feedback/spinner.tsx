type Props = {
  size?: number;
  thickness?: number;
  spinnerColor?: string;
  trackColor?: string;
};

const Spinner = ({
  size = 12,
  thickness = 2,
  spinnerColor = "#fff",
  trackColor = "#d1d5dc",
}: Props) => {
  return (
    <div
      className="rounded-full animate-spin"
      style={{
        height: `${size}px`,
        width: `${size}px`,
        border: `${thickness}px solid ${trackColor}`,
        borderTopColor: spinnerColor,
      }}
    />
  );
};

export default Spinner;
