interface AlphabetKeysProps {
  word: string;
  isActive: boolean;
  special?: boolean;
  tabkey?: boolean;
  capskey?: boolean;
}

export const AlphabetKeys: React.FC<AlphabetKeysProps> = ({
  word,
  isActive,
  special,
  tabkey,
  capskey,
}) => {
  const keyContent = () => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(word)) {
      switch (word) {
        case "ArrowUp":
          return "↑";
        case "ArrowDown":
          return "↓";
        case "ArrowLeft":
          return "←";
        case "ArrowRight":
          return "→";
        default:
          return word;
      }
    }
    return word;
  };

  return (
    <div
      className={`keyContainer ${
        special ? "specialKey" : tabkey ? "tabkey" : capskey ? "capskey" : ""
      }`}
      style={{
        backgroundColor: isActive ? "lime" : "white",
        color: isActive ? "white" : "#828183",
      }}
    >
      <p>{keyContent()}</p>
    </div>
  );
};
