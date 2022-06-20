import React, { SetStateAction } from "react";
import Logo from "../../pictures/logo.svg";
import "./style.css";

interface HeaderProps {
  search: string;
  onChange: React.Dispatch<SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ search, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <header>
      <div className="row m-3 ps-4 pe-4 ">
        <img className="logo col-2 " src={Logo} alt="Logo" />
        <h1 className="logo-heading col-2 fw-bolder ">STATISTIC</h1>
        <div className="search row col-sm-4 ms-auto">
          <nav className="navbar navbar-light">
            <div className="search-input container-fluid justify-content-end">
              <form className="d-flex">
                <input
                  className="form-control me-2 p-2 border-0 rounded-pill shadow-sm"
                  type="search"
                  value={search}
                  placeholder="Search..."
                  aria-label="Search"
                  onChange={handleChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search align-self-center"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
