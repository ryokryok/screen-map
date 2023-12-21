import { ChangeEvent, FC } from "react";
import { SCREEN_TYPES, ScreenType } from "./utils";

// Remove “other” that is not used in search
const DISPLAY_SCREEN_TYPES = SCREEN_TYPES.filter((ST) => ST.group !== "other");

type ControlPanelProps = {
  selected: ScreenType[];
  handler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const ControlPanel: FC<ControlPanelProps> = ({ selected, handler }) => {
  const checkedState = (value: string) =>
    selected.some((s) => s.value === value);
  return (
    <div className="control-panel">
      <form action="">
        <h2>IMAX / Dolby 検索</h2>
      </form>
      <div className="forms" style={{ display: "flex", gap: "0.5rem" }}>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          {DISPLAY_SCREEN_TYPES.filter((ST) => ST.group !== "other").map(
            (ST) => (
              <div key={ST.value}>
                <input
                  type="checkbox"
                  name={ST.value}
                  id={ST.value}
                  value={ST.value}
                  onChange={handler}
                  checked={checkedState(ST.value)}
                />
                <label htmlFor={ST.value}>{ST.label}</label>
              </div>
            )
          )}
        </form>
      </div>
    </div>
  );
};
