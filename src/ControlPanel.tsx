import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { SCREEN_TYPES, ScreenType } from "./utils";

const ControlPanelBase: FC = () => {
  const [selected, setSelected] = useState<ScreenType[]>(SCREEN_TYPES);
  const handler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = e.target;

      if (checked) {
        const newValue = SCREEN_TYPES.find((s) => s.value === value);
        newValue && setSelected([...selected, newValue]);
      } else {
        setSelected(selected.filter((s) => s.value !== value));
      }
    },
    [selected],
  );

  const checkedState = (value: string) =>
    selected.some((s) => s.value === value);
  return (
    <div className="control-panel">
      <form action="">
        <h3>IMAX / Dolby 検索</h3>
      </form>
      <div className="forms" style={{ display: "flex", gap: "0.5rem" }}>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          {SCREEN_TYPES.map((ST) => (
            <div>
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
          ))}
        </form>
      </div>
    </div>
  );
};

export const ControlPanel = memo(ControlPanelBase);
