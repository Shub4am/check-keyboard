import { useState, useEffect } from "react";
import { AlphabetKeys } from "./AlphabetKeys";

export function Testkey() {
  const [pressedKeys, setPressedKeys] = useState(new Set<string>());
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let key = e.key;
      if (e.ctrlKey) key = "Ctrl";
      if (key === "Escape") key = "esc";
      if (key.length === 1) key = key.toLowerCase();
      if (e.getModifierState("CapsLock")) {
        setPressedKeys((prevKeys) => new Set(prevKeys).add("CapsLock"));
      }
      if (
        [
          "Tab",
          "PageUp",
          "PageDown",
          "/",
          "'",
          "ArrowLeft",
          "ArrowRight",
          "ArrowUp",
          "ArrowDown",
          "F1",
          "F2",
          "F3",
          "F4",
          "F5",
          "F6",
          "F7",
          "F8",
          "F9",
          "F10",
          "F11",
          "F12",
          "Delete",
        ].includes(e.key)
      ) {
        e.preventDefault();
      }
      if (key === "Meta") key = "win";
      let formattedKey = key === " " ? "space" : key;
      setPressedKeys((prevKeys) => new Set(prevKeys).add(formattedKey));
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      let key = e.key;
      if (key === "PrintScreen") {
        setPressedKeys((prevKeys) => new Set(prevKeys).add("PrintScreen"));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const functionKeys = [
    "esc",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "Delete",
  ];

  const numberRow = [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
  ];

  const qwertyRow1 = [
    "Tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "\\",
  ];
  const qwertyRow2 = [
    "CapsLock",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "Enter",
  ];
  const qwertyRow3 = [
    "Shift",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "/",
    "Shift",
    "ArrowUp",
  ];
  const bottomRow = [
    "Fn",
    "Ctrl",
    "win",
    "Alt",
    "space",
    "Alt",
    "Ctrl",
    "ArrowLeft",
    "ArrowDown",
    "ArrowRight",
  ];

  const navigationKeys = [
    "PrintScreen",
    "ScrollLock",
    "Pause",
    "Insert",
    "Home",
    "PageUp",
    "Delete",
    "End",
    "PageDown",
  ];

  return (
    <div className="container">
      <div className="keyboardContainer">
        {/* Function Keys Row */}
        <div className="row functionKeys">
          {functionKeys.map((key) => (
            <AlphabetKeys
              key={key}
              word={key}
              isActive={pressedKeys.has(key)}
              tabkey={key === "Delete"}
            />
          ))}
        </div>

        {/* Number Row */}
        <div className="row numbers">
          {numberRow.map((key) => (
            <AlphabetKeys
              key={key}
              word={key}
              isActive={pressedKeys.has(key)}
              capskey={key === "Backspace"}
            />
          ))}
        </div>

        {/* QWERTY Row 1 */}
        <div className="row tabs">
          {qwertyRow1.map((key) => (
            <AlphabetKeys
              key={key}
              word={key}
              isActive={pressedKeys.has(key)}
              tabkey={key === "Tab" || key === "\\"}
            />
          ))}
        </div>

        {/* QWERTY Row 2 */}
        <div className="row caps">
          {qwertyRow2.map((key) => (
            <AlphabetKeys
              key={key}
              word={key}
              isActive={pressedKeys.has(key)}
              special={key === "Enter"}
              capskey={key === "CapsLock"}
            />
          ))}
        </div>

        {/* QWERTY Row 3 */}
        <div className="row">
          {qwertyRow3.map((key) => (
            <AlphabetKeys
              key={key}
              word={key}
              isActive={pressedKeys.has(key)}
              special={key === "Shift"}
            />
          ))}
        </div>

        {/* Bottom Row */}
        <div className="row bottomRow">
          {bottomRow.map((key) => (
            <AlphabetKeys
              key={key}
              word={key}
              isActive={pressedKeys.has(key)}
              special={key === "space"}
            />
          ))}
        </div>

        {/* Navigation  */}
        <div className="navigation">
          {navigationKeys.map((key) => (
            <AlphabetKeys
              key={key}
              word={key}
              isActive={pressedKeys.has(key)}
              special
            />
          ))}
        </div>
      </div>
    </div>
  );
}
