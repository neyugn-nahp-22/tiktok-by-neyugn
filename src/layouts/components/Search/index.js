import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import "tippy.js/dist/tippy.css";
import * as searchServices from "~/services/searchService";

import { useDebounce } from "~/hooks";

import AccountItem from "~/components/AccountItem";
import { ClearIcon, LoadingIcon, SearchIcon } from "~/components/Icons";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debouncedValue);
      setSearchResult(result);

      setLoading(false);
    };
    fetchApi();
  }, [debouncedValue]);

  const handleClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    if (searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  return (
    <HeadlessTippy
      interactive
      appendTo={() => document.body}
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Tài khoản</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          onChange={handleChange}
          onFocus={() => setShowResult(true)}
          placeholder="Tìm kiếm tài khoản và video"
          spellCheck={false}
        />
        {!!searchValue && !loading && (
          <button onClick={handleClear} className={cx("clear")}>
            <ClearIcon />
          </button>
        )}
        {loading && <LoadingIcon className={cx("loading")} />}

        <button className={cx("search-btn")} onMouseDown={(e) => e.preventDefault()}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
