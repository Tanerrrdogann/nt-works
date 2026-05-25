from __future__ import annotations

import subprocess
import textwrap
from pathlib import Path


DEMO_CODE = r"""
from pathlib import Path

import cv2
import numpy as np

output_dir = Path("/app/storage/demo")
output_dir.mkdir(parents=True, exist_ok=True)
output_path = output_dir / "demo-motion.mp4"

width, height = 960, 540
fps = 24
seconds = 8
writer = cv2.VideoWriter(
    str(output_path),
    cv2.VideoWriter_fourcc(*"mp4v"),
    fps,
    (width, height),
)

for frame_index in range(fps * seconds):
    frame = np.full((height, width, 3), (26, 32, 27), dtype=np.uint8)
    cv2.rectangle(frame, (70, 80), (410, 430), (42, 74, 62), -1)
    cv2.rectangle(frame, (520, 80), (890, 430), (54, 46, 32), -1)

    x = 80 + int((frame_index / (fps * seconds - 1)) * 690)
    y = 230 + int(45 * np.sin(frame_index / 9))
    cv2.circle(frame, (x, y), 46, (71, 181, 129), -1)

    person_x = 130 + int((frame_index / (fps * seconds - 1)) * 520)
    cv2.circle(frame, (person_x, 170), 24, (67, 190, 132), -1)
    cv2.rectangle(frame, (person_x - 18, 198), (person_x + 18, 320), (67, 190, 132), -1)
    cv2.line(frame, (person_x - 18, 245), (person_x - 58, 285), (67, 190, 132), 12)
    cv2.line(frame, (person_x + 18, 245), (person_x + 58, 285), (67, 190, 132), 12)
    cv2.line(frame, (person_x - 10, 320), (person_x - 42, 395), (67, 190, 132), 12)
    cv2.line(frame, (person_x + 10, 320), (person_x + 42, 395), (67, 190, 132), 12)

    cv2.putText(
        frame,
        "Video Analytics Demo",
        (54, 58),
        cv2.FONT_HERSHEY_SIMPLEX,
        1.1,
        (245, 241, 232),
        2,
        cv2.LINE_AA,
    )
    writer.write(frame)

writer.release()
print(f"Created {output_path}")
"""


def main() -> None:
    try:
        exec(DEMO_CODE, {})
        return
    except ModuleNotFoundError as exc:
        if exc.name != "cv2":
            raise

    command = [
        "docker",
        "compose",
        "exec",
        "-T",
        "worker",
        "python",
        "-c",
        textwrap.dedent(DEMO_CODE),
    ]
    print("Local OpenCV is not installed; generating the demo video inside the worker container.")
    subprocess.run(command, check=True)

    output_path = Path("storage/demo/demo-motion.mp4")
    if not output_path.exists():
        raise SystemExit("Demo video was not created. Make sure `docker compose up -d` is running.")


if __name__ == "__main__":
    main()
