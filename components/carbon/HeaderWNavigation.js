import {
  HeaderContainer,
  Header,
  SkipToContent,
  HeaderMenu,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  Theme
  } from 'carbon-components-react';

export const HeaderWNavigation = () => <HeaderContainer render={({
  isSideNavExpanded,
  onClickSideNavExpand
}) => <>
  <Theme theme="g90" >
    <Header aria-label="IBM Platform Name">
    <SkipToContent />
    <HeaderMenuButton aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'} onClick={onClickSideNavExpand} isActive={isSideNavExpanded} aria-expanded={isSideNavExpanded} />
    <HeaderName href="#" prefix="IBM">
      MyReport
    </HeaderName>
    <HeaderNavigation aria-label="IBM [Platform]">
      <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
      <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
      <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
      <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
        <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
        <HeaderMenuItem isActive href="#">
          Sub-link 2
        </HeaderMenuItem>
        <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
      </HeaderMenu>
    </HeaderNavigation>
    <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} isPersistent={false} onSideNavBlur={onClickSideNavExpand}>
      <SideNavItems>
        <HeaderSideNavItems>
          <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
          <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
            <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
            <HeaderMenuItem isActive href="#">
              Sub-link 2
            </HeaderMenuItem>
            <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
          </HeaderMenu>
        </HeaderSideNavItems>
      </SideNavItems>
    </SideNav>
        </Header>
  </Theme>
        
      </>} />;