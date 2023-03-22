import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Image from "../Image";
import styles from "./FollowingAccount.module.scss";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <div className={cx("account-item")}>
      <Image className={cx("avatar")} src={data.avatar} alt="" />
      <div className={cx("item-info")}>
        <p className={cx("nickname")}>
          <strong>{data.nickname}</strong>
          {data.tick && <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />}
        </p>
        <p className={cx("name")}>{`${data.first_name} ${data.last_name}`}</p>
      </div>
    </div>
  );
}

export default AccountItem;
