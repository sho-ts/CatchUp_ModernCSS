import { css } from "@emotion/react";

// アスペクト比の計算方法 - http://kentiku-kouzou.jp/2kyu-asupekutohi.html

const AspectRatio: React.FC = () => {
  return (
    <div css={styles.base}>
      <div css={styles["16-9"]}>16 / 9</div>
      <div css={styles["1-1"]}>1 / 1</div>
    </div>
  );
};

const styles = {
  base: css`
    width: 500px;
    & > * {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-weight: bold;
      background: var(--bg-gradient);
    }
    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
  `,
  "16-9": css`
    aspect-ratio: 16 / 9;
  `,
  "1-1": css`
    aspect-ratio: 1 / 1;
  `,
};

export default AspectRatio;
