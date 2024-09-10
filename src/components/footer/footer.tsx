import React from "react";

export default function footer() {
  return (
    <div id="wrapper">
      <div className="wrapper">
        <div id="footer">
          <div className="right">
            <a href="http://gerege.biz/" target="_blank" />
            <div className="gerege-agency">
              <a href="http://gerege.biz/" target="_blank">
                <div className="gerege-info">
                  <span className="gerege-icon-code" />
                  by
                </div>
              </a>
              <a href="http://gerege.agency/" target="_blank">
                <span className="gerege-icon-char-g" />
                <span className="gerege-icon-char-e" />
                <span className="gerege-icon-char-r" />
                <span className="gerege-icon-char-e" />
                <span className="gerege-icon-char-g" />
                <span className="gerege-icon-char-e" />
              </a>
            </div>
          </div>
          <span>Copyright © 2011. All rights reserved.</span>
          <div className="clear" />
        </div>
      </div>
    </div>
  );
}
