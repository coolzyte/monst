type badgeProps = {
  title: string;
};

const Badge = ({ title }: badgeProps) => {
  return (
    <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
      {title}
    </span>
  );
};

export default Badge;
