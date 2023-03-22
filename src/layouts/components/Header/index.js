import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css";

import images from "~/assets/images";
import Button from "~/components/Button";
import routes from "~/config";
import {
  CoinIcon,
  FeedbackIcon,
  KeyboardIcon,
  LanguageIcon,
  MailIcon,
  MessageIcon,
  PersonIcon,
  PlusIcon,
  SettingIcon,
  SignOutIcon,
} from "~/components/Icons";
import Image from "~/components/Image";
import Menu from "~/components/Popper/Menu";
import Search from "~/layouts/components/Search";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

const currentUser = true;

const MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
    title: "Tiếng Việt",
    children: {
      title: "Ngôn ngữ",
      data: [
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt (Việt Nam)",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
      ],
    },
  },
  {
    icon: <FeedbackIcon />,
    title: "Phản hồi và trợ giúp",
    to: "/feedback",
  },
  {
    icon: <KeyboardIcon />,
    title: "Phím tắt trên bàn phím",
  },
];

function Header() {
  //Handle Logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        break;

      default:
        break;
    }
  };

  const userMenu = [
    {
      icon: <PersonIcon />,
      title: "Xem hồ sơ",
      to: "/@real",
    },
    {
      icon: <CoinIcon />,
      title: "Nhận xu",
      to: "/coin",
    },
    {
      icon: <SettingIcon />,
      title: "Cài đặt",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <SignOutIcon />,
      title: "Đăng xuất",
      to: "/",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={routes.routes.home} className={cx("logo-link")}>
          <img src={images.logo} alt="Tiktok" />
        </Link>

        <Search />

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Button text leftIcon={<PlusIcon />}>
                Tải lên
              </Button>
              <Tippy delay={[0, 100]} content="Tin nhắn">
                <button className={cx("action-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 100]} content="Hộp thư" placement="bottom">
                <button className={cx("action-btn")}>
                  <MailIcon />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text leftIcon={<PlusIcon />}>
                Tải lên
              </Button>
              <Button primary>Đăng nhập</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/408425553189400b86593befb58226f5~c5_100x100.jpeg?x-expires=1679130000&x-signature=32U7S4ynI2P15fS9nxCOd38VuNQ%3D"
                alt="Anh loi"
                fallback="https://files.fullstack.edu.vn/f8-prod/user_photos/300208/64000d18142c7.jpg"
              />
            ) : (
              <button style={{ color: "red" }} className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
