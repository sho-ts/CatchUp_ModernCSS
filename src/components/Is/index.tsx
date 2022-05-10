import { css } from "@emotion/react";

const Is: React.FC = () => {
  return (
    <div>
      <input
        placeholder="isで複数セレクタをまとめることができる"
        css={styles.base}
        type="text"
      />
    </div>
  );
};

const styles = {
  base: css`
    outline: none;
    border: 1px solid #000;
    padding: 8px 16px;
    border-radius: 8px;
    width: 100%;
    font-size: 14px;
    &:is(:hover, :focus) {
      background: var(--bg-gradient);
      border-color: #ddd;
      color: #fff;
      &::placeholder {
        color: #fff;
      }
    }
  `,
};

export default Is;
