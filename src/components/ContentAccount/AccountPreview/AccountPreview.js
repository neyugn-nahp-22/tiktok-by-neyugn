import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import Image from "~/components/Image";
import styles from "./AccountPreview.module.scss";

const cx = classNames.bind(styles);

const defaultFn = () => {};

function AccountPreview({ value, onClick = defaultFn }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Image
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/408425553189400b86593befb58226f5~c5_100x100.jpeg?x-expires=1679130000&x-signature=32U7S4ynI2P15fS9nxCOd38VuNQ%3D"
          alt=""
        />
        {!!value ? (
          <Button onClick={onClick} className={cx("follow-btn")} primary>
            Follow
          </Button>
        ) : (
          <Button onClick={onClick} className={cx("followed-btn")}>
            Đang Follow
          </Button>
        )}
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>gianngtit</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Cosplay girl phố 💃🏻</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>1.4M</strong>
          <span className={cx("label")}>Follower</span>
          <strong className={cx("value")}>15M </strong>
          <span className={cx("label")}>Thích</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
