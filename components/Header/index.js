import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(true);
  };

  const hideDropdown = () => {
    setDropdown(false);
  };

  const dropdownTabTextClass = dropdown
    ? "dropdown-tab-text active"
    : "dropdown-tab-text";

  const toggleDropdownClass = dropdown
    ? "dropdown-menu active"
    : "dropdown-menu";

  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="top-header-wrapper">
          <div className="logo-wrapper">
            <Link className="logo-link" href={"/"}>
              <Image
                src="https://bangdb.com/wp-content/uploads/2021/12/docs-logo.png"
                alt="BangDB Logo"
                width={137}
                height={30}
              />
            </Link>
          </div>
          <div className="skid-row">
            <div className="skid-row-upper-tabs">
              <div className="skid-row-tabs">
                <nav>
                  <tab>
                    <Link href={"https://bangdb.com/pricing"} className="srt">
                      Pricing
                    </Link>
                  </tab>
                  <tab>
                    <Link href={"https://bangdb.com/blog"} className="srt">
                      Blog
                    </Link>
                  </tab>
                  <tab>
                    <Link href={"https://bangdb.com/about"} className="srt">
                      About
                    </Link>
                  </tab>
                  <tab>
                    <Link
                      href={"https://bangdb.com/contact-us"}
                      className="srt"
                    >
                      Contact
                    </Link>
                  </tab>
                  <tab>
                    <Link href={"https://bangdb.com/resources"} className="srt">
                      Resources
                    </Link>
                  </tab>
                  <tab
                    className="dropdown-tab"
                    onMouseOver={showDropdown}
                    onMouseOut={hideDropdown}
                  >
                    <Link href={"#"} className={dropdownTabTextClass}>
                      Products
                    </Link>
                    <div
                      className={toggleDropdownClass}
                      onMouseOver={showDropdown}
                      onMouseOut={hideDropdown}
                    >
                      <tab>
                        <Link href={"https://bangdb.com/ampere"}>Ampere</Link>
                      </tab>
                      <tab>
                        <Link href={"https://bangdb.com/product"}>BangDB</Link>
                      </tab>
                    </div>
                  </tab>
                  <div className="download">
                    <div className="download-wrapper">
                      <Link href={"https://bangdb.com/download"}>Download</Link>
                    </div>
                  </div>
                  <div className="download">
                    <div className="download-wrapper">
                      <Link href={"https://cloud.bangdb.com"}>Get Started</Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
