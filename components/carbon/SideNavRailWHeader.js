import {
  Header, 
  HeaderContainer, 
  HeaderMenuButton, 
  HeaderName, 
  HeaderGlobalBar, 
  HeaderGlobalAction, 
  SkipToContent, 
  SideNav, 
  SideNavItems,
  SideNavLink, 
  SideNavMenu, 
  SideNavMenuItem,
  Theme
  } from 'carbon-components-react';
import { useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import { Alarm, Report, Receipt , UserAvatar } from '@carbon/icons-react';
import Link from 'next/link';


export const SideNavRailWHeader = ({router, ...args}) => {

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <HeaderContainer render={({
      isSideNavExpanded,
      onClickSideNavExpand,
    }) => <>
            <Theme theme="g10">
              <Header aria-label="IBM Platform Name">
                <SkipToContent />
                <HeaderMenuButton aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'} onClick={onClickSideNavExpand} isActive={isSideNavExpanded} aria-expanded={isSideNavExpanded} />
                <HeaderName href="/" prefix="IBM">
                  [Platform]
                </HeaderName>
                <HeaderGlobalBar>
                  <HeaderGlobalAction aria-label="Usuario" onClick={action('app-switcher click')} tooltipAlignment="end">
                    <UserAvatar size={20} />
                  </HeaderGlobalAction>
                </HeaderGlobalBar>
                <SideNav inert={undefined} aria-label="Side navigation" expanded={isSideNavExpanded} onOverlayClick={onClickSideNavExpand} href="#main-content" onSideNavBlur={onClickSideNavExpand} isRail {...args}>
                  <SideNavItems>
                    <SideNavMenu isActive={true} renderIcon={Alarm} title="Section 1">
                      <SideNavMenuItem href="/">
                        Home
                      </SideNavMenuItem>
                      <SideNavMenuItem href="/">
                        Home
                      </SideNavMenuItem>
                      <SideNavMenuItem href="/">
                        Home
                      </SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu renderIcon={Report} title="Section 2">
                      <SideNavMenuItem href="/">
                        Home
                      </SideNavMenuItem>
                      <SideNavMenuItem href="/">
                        Home
                      </SideNavMenuItem>
                      <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                        Carbon Design
                      </SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavLink  renderIcon={Receipt}>
                      {domLoaded && <Link href="/greet">Greet 👋</Link>} 
                    </SideNavLink>
                  </SideNavItems>
                </SideNav>
              </Header>
            </Theme>
          </>}/>
  )
}

