import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from "./AccountPreview.module.scss";
import PropTypes from "prop-types";
import Image from "~/components/Image";
import { useState } from "react";

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
  const [clickFollow, setClickFollow] = useState(true);
  const handleClickFollow = () => {
    setClickFollow(!clickFollow);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Image className={cx("avatar")} src={data.avatar} alt="" />
        {!!clickFollow ? (
          <Button onClick={handleClickFollow} className={cx("follow-btn")} primary>
            Follow
          </Button>
        ) : (
          <Button onClick={handleClickFollow} className={cx("followed-btn")}>
            Đang Follow
          </Button>
        )}
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>{data.nickname}</strong>
          {data.tick && <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />}
        </p>
        <p className={cx("name")}>{`${data.first_name} ${data.last_name}`}</p>
        <p className={cx("analytics")}>
          {/* if >= 1M follower */}
          {/* {data.followers_count / 1000000 >= 1 ? (
            <strong className={cx("value")}>{data.followers_count / 1000000}M </strong>
          ) : (
            <strong className={cx("value")}>{data.followers_count} </strong>
          )} */}
          <strong className={cx("value")}>{data.followers_count} </strong>
          <span className={cx("label")}>Follower</span>
          <strong className={cx("value")}>{data.likes_count} </strong>
          <span className={cx("label")}>Thích</span>
        </p>
      </div>
    </div>
  );
}

AccountPreview.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountPreview;
