import { FC, memo } from "react";

const ControlPanelBase: FC = () => {
  return (
    <div className="control-panel">
      <form action="">
        <h3>IMAX / Dolby 検索</h3>
      </form>
      <div className="forms" style={{ display: "flex", gap: "0.5rem" }}>
        <form action="">
          <div>
            <div>
              <input type="checkbox" name="imax" id="imax" />
              <label htmlFor="imax">IMAX</label>
            </div>
            <div style={{ paddingLeft: "0.5rem" }}>
              <div>
                <input type="checkbox" name="imax-digital" id="imax-digital" />
                <label htmlFor="imax-digital">デジタル</label>
              </div>
              <div>
                <input type="checkbox" name="imax-laser" id="imax-laser" />
                <label htmlFor="imax-laser">レーザー</label>
              </div>
              <div>
                <input type="checkbox" name="imax-gt" id="imax-gt" />
                <label htmlFor="imax-gt">GT</label>
              </div>
            </div>
          </div>
        </form>
        <form action="">
          <div>
            <div>
              <input type="checkbox" name="dolby" id="dolby" />
              <label htmlFor="dolby">Dolby</label>
            </div>
            <div style={{ paddingLeft: "0.5rem" }}>
              <div>
                <input type="checkbox" name="dolby-cinema" id="dolby-cinema" />
                <label htmlFor="dolby-cinema">Cinema</label>
              </div>
              <div>
                <input type="checkbox" name="dolby-atmos" id="dolby-atmos" />
                <label htmlFor="dolby-atmos">Atmos</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export const ControlPanel = memo(ControlPanelBase);
