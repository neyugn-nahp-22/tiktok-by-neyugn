import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./FollowingAccount.module.scss";

import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function FollowingAccount({ label, data = [], onSeeMore }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>

      {data.map((account) => (
        <AccountItem key={account.id} data={account} />
      ))}

      <p className={cx("more-btn")} onClick={onSeeMore}>
        Xem thêm
      </p>
    </div>
  );
}

FollowingAccount.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array,
};

export default FollowingAccount;
