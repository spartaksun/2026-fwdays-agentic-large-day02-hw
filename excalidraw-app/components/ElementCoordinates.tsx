import { Stats } from "@excalidraw/excalidraw";
import { getCommonBounds, getSelectedElements } from "@excalidraw/element";
import { pointFrom, pointRotateRads, round } from "@excalidraw/math";
import { t } from "@excalidraw/excalidraw/i18n";

import type { NonDeletedExcalidrawElement } from "@excalidraw/element/types";
import type { UIAppState } from "@excalidraw/excalidraw/types";

export type ElementCoordinatesProps = {
  elements: readonly NonDeletedExcalidrawElement[];
  appState: UIAppState;
};

export const ElementCoordinates = ({
  elements,
  appState,
}: ElementCoordinatesProps) => {
  const selected = getSelectedElements(elements, appState);

  if (selected.length === 0) {
    return null;
  }

  if (selected.length === 1) {
    const el = selected[0];
    const center = pointFrom(el.x + el.width / 2, el.y + el.height / 2);
    const [x, y] = pointRotateRads(pointFrom(el.x, el.y), center, el.angle);
    const angleDeg = round((el.angle * 180) / Math.PI, 2);

    return (
      <Stats.StatsRows>
        <Stats.StatsRow heading>Coordinates</Stats.StatsRow>
        <Stats.StatsRow columns={2}>
          <div>X</div>
          <div>{round(x, 2)}</div>
        </Stats.StatsRow>
        <Stats.StatsRow columns={2}>
          <div>Y</div>
          <div>{round(y, 2)}</div>
        </Stats.StatsRow>
        <Stats.StatsRow columns={2}>
          <div>{t("stats.width")}</div>
          <div>{round(el.width, 2)}</div>
        </Stats.StatsRow>
        <Stats.StatsRow columns={2}>
          <div>{t("stats.height")}</div>
          <div>{round(el.height, 2)}</div>
        </Stats.StatsRow>
        <Stats.StatsRow columns={2}>
          <div>{t("stats.angle")}</div>
          <div>{angleDeg}°</div>
        </Stats.StatsRow>
      </Stats.StatsRows>
    );
  }

  const [minX, minY, maxX, maxY] = getCommonBounds(selected);
  const width = maxX - minX;
  const height = maxY - minY;

  return (
    <Stats.StatsRows>
      <Stats.StatsRow heading>Coordinates</Stats.StatsRow>
      <Stats.StatsRow columns={2}>
        <div>X</div>
        <div>{round(minX, 2)}</div>
      </Stats.StatsRow>
      <Stats.StatsRow columns={2}>
        <div>Y</div>
        <div>{round(minY, 2)}</div>
      </Stats.StatsRow>
      <Stats.StatsRow columns={2}>
        <div>{t("stats.width")}</div>
        <div>{round(width, 2)}</div>
      </Stats.StatsRow>
      <Stats.StatsRow columns={2}>
        <div>{t("stats.height")}</div>
        <div>{round(height, 2)}</div>
      </Stats.StatsRow>
    </Stats.StatsRows>
  );
};
