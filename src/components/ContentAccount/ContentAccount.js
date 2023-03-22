import classNames from "classnames/bind";
import styles from "./ContentAccount.module.scss";

import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function ContentAccount() {
  return (
    <div className={cx("wrapper")}>
      <AccountItem />
    </div>
  );
}

export default ContentAccount;
