import classNames from "classnames/bind";
import ContentAccount from "~/components/ContentAccount/ContentAccount";
import styles from "./Content.module.scss";

const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx("wrapper")}>
      <ContentAccount />
    </div>
  );
}

export default Content;
