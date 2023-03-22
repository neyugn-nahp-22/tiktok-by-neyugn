import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { FollowingAccount } from "~/components/FollowingAccount";

import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserActiveIcon,
  UserGroupIcon,
} from "~/components/Icons";
import SuggestedAccounts from "~/components/SuggestedAccounts/SuggestedAccounts";
import config from "~/config";
import * as userService from "~/services/userService";
import * as followingService from "~/services/followingService";
import { Menu, MenuItem } from "./Menu";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
  const [page, setPage] = useState(INIT_PAGE);
  const [seeMore, setSeeMore] = useState(INIT_PAGE);
  const [suggestedUser, setSuggestedUser] = useState([]);
  const [followingUser, setFollowingUser] = useState([]);

  useEffect(() => {
    userService
      .getSuggested({ page, perPage: PER_PAGE })
      .then((data) => {
        setSuggestedUser((prevUsers) => [...prevUsers, ...data]);
      })
      .catch((error) => console.log(error));
  }, [page]);

  useEffect(() => {
    followingService
      .getFollowingUser({ seeMore, perPage: PER_PAGE })
      .then((data) => {
        setFollowingUser((prevUsers) => [...prevUsers, ...data]);
      })
      .catch((error) => console.log(error));
  }, [seeMore]);

  const handleSeeAll = () => {
    setPage(page + 1);
  };

  const handleSeeMore = () => {
    setSeeMore(seeMore + 1);
  };

  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="Dành cho bạn"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Đang Follow"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>

      <SuggestedAccounts
        label="Tài khoản được đề xuất"
        data={suggestedUser}
        onSeeAll={handleSeeAll}
      />
      <FollowingAccount
        label="Các tài khoản đang follow"
        data={followingUser}
        onSeeMore={handleSeeMore}
      />
    </aside>
  );
}

export default Sidebar;
