import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./ContentAccount.module.scss";

import { faCheckCircle, faCommentDots, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import videos from "~/assets/videos";
import Button from "../Button";
import Image from "../Image";
import { Wrapper as PopperWrapper } from "../Popper";
import { AccountPreview } from "./AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
  const [isFollow, setIsFollow] = useState(true);
  const [isReact, setIsReact] = useState(true);

  const handleClickReact = () => {
    setIsReact(!isReact);
  };

  const handleFollow = () => {
    setIsFollow(!isFollow);
  };

  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview onClick={handleFollow} value={isFollow} />
        </PopperWrapper>
      </div>
    );
  };
  return (
    <div>
      <div className={cx("account-item")}>
        <Image
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/408425553189400b86593befb58226f5~c5_100x100.jpeg?x-expires=1679130000&x-signature=32U7S4ynI2P15fS9nxCOd38VuNQ%3D"
          alt=""
        />
        <div className={cx("info")}>
          <div className={cx("item-info")}>
            <div>
              <Tippy
                interactive
                delay={[1000, 0]}
                offset={[-100, 37]}
                placement="bottom"
                render={() => renderPreview()}
              >
                <div className={cx("item-user")}>
                  <span className={cx("nickname")}>
                    <strong>gianngtit</strong>
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                  </span>
                  <span className={cx("name")}>Cosplay girl phố 💃🏻</span>
                </div>
              </Tippy>
            </div>
            <div className={cx("item-title")}>
              <span className={cx("title")}>{`=)))))))))))`}</span>
              <span className={cx("hashtag")}>#ChiYeuMinhAnh</span>
            </div>
            <div className={cx("video-list")}>
              <video className={cx("user-video")} controls>
                <source src={videos.demo} type="video/mp4" />
              </video>
              <div className={cx("react")}>
                {!!isReact ? (
                  <button onClick={handleClickReact} className={cx("statis-btn")}>
                    <FontAwesomeIcon className={cx("more-icon")} icon={faHeart} />
                  </button>
                ) : (
                  <button onClick={handleClickReact} className={cx("statis-btn")}>
                    <FontAwesomeIcon className={cx("active-icon")} icon={faHeart} />
                  </button>
                )}
                <strong className={cx("statistic")}>16.8K</strong>

                <button className={cx("statis-btn")}>
                  <FontAwesomeIcon className={cx("more-icon")} icon={faCommentDots} />
                </button>
                <strong className={cx("statistic")}>1000</strong>

                <button className={cx("statis-btn")}>
                  <FontAwesomeIcon className={cx("more-icon")} icon={faShare} />
                </button>
                <strong className={cx("statistic")}>583</strong>
              </div>
              <div className={cx("space")}></div>
            </div>
          </div>
          <div className={cx("more-btn")}>
            {!!isFollow ? (
              <Button onClick={handleFollow} className={cx("follow-btn")} primary outline>
                Follow
              </Button>
            ) : (
              <Button onClick={handleFollow} className={cx("followed-btn")}>
                Đang Follow
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountItem;
