interface ButtonSideNavProps {
  active?: boolean;
  text: string;
  onClick?: () => void;
}

const ButtonSideNav = ({ active, onClick, text }: ButtonSideNavProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center font-semibold text-lg h-9 hover:text-blue-500 ${
        active ? "text-blue-500" : "text-slate-700"
      }`}
    >
      <span
        className={`rounded-r-full w-1 self-stretch mr-5 ${
          active ? "bg-blue-500" : "bg-transparent"
        }`}
      />
      <span>{text}</span>
    </button>
  );
};

export default ButtonSideNav;
