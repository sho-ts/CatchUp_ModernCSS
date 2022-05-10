import { css } from "@emotion/react";

const FlexGap: React.FC = () => {
  return (
    <div css={styles.base}>
      <div css={styles.col}></div>
      <div css={styles.col}></div>
      <div css={styles.col}></div>
      <div css={styles.col}></div>
    </div>
  );
};

const styles = {
  base: css`
    display: flex;
    flex-wrap: wrap;
    gap: 20px 30px;
  `,
  col: css`
    width: calc(33% - 30px);
    height: 200px;
    background: var(--bg-gradient);
  `,
};

export default FlexGap;
