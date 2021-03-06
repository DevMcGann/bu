import * as React from 'react';

import { NavLink } from '..';
import { TypedSecondaryMenuQuery } from './queries';
import { SocialMediaIcon } from '..';
import { SOCIAL_MEDIA } from '../../core/config';
import CopyrightSection from './CopyrightSection';

import './scss/index.scss';

class Nav extends React.PureComponent {
  render() {
    return (
      <footer className="footer-nav">
        <div className="container">
          <div className="footer__favicons container">
            {SOCIAL_MEDIA.map((medium) => (
              <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
            ))}
          </div>
          <div className="footer-nav__links">
            <TypedSecondaryMenuQuery>
              {({ data }) => {
                return data.shop.navigation.secondary.items.map((item) => (
                  <div className="footer-nav__section" key={item.id}>
                    <h4 className="footer-nav__section-header">
                      <NavLink item={item} />
                    </h4>
                    <div className="footer-nav__section-content">
                      {item.children.map((subItem) => (
                        <p key={subItem.id}>
                          <NavLink item={subItem} />
                        </p>
                      ))}
                    </div>
                  </div>
                ));
              }}
            </TypedSecondaryMenuQuery>
          </div>
          <CopyrightSection />
        </div>
      </footer>
    );
  }
}

export default Nav;
