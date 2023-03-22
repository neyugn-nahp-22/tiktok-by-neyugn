import PropTypes from "prop-types";
import Header from "~/layouts/components/Header";
import { Sidebar } from "../components/Sidebar";
import classNames from "classnames/bind";
import styles from "./MainLayout.module.scss";
import Content from "../components/Content";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>
          <Content />
          {children}
        </div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
