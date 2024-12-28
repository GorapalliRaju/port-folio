const TabButton = ({ selectTab, active, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`px-4 py-2 font-medium relative transition duration-300 ${
        active
          ? "text-primary-500"
          : "text-gray-400 hover:text-primary-500"
      }`}
    >
      {children}
      {active && (
        <span
          className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-primary-400 to-secondary-500 rounded transition-all duration-500"
        ></span>
      )}
    </button>
  );
};

export default TabButton;
