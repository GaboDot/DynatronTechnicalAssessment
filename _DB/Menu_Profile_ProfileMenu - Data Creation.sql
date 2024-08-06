INSERT INTO Menu (MenuText, MenuIcon, MenuLink, ParentMenu) --Root menus
VALUES
('Admin', '', '', 0),
('Dashboard', '', '', 0),
('Reports', '', '', 0),
('Tools', '', '', 0);

INSERT INTO Menu (MenuText, MenuIcon, MenuLink, ParentMenu) --Admin
VALUES
('Users', '', '', 1),
('Settings', '', '', 1);

INSERT INTO Menu (MenuText, MenuIcon, MenuLink, ParentMenu) --Users SubMenu
VALUES
('Add User', '', '', 5),
('Manage Users', '', '', 5);

INSERT INTO Menu (MenuText, MenuIcon, MenuLink, ParentMenu) --Dashboard
VALUES
('Submenu 1', '', '', 2),
('Submenu 2', '', '', 2);

INSERT INTO Menu (MenuText, MenuIcon, MenuLink, ParentMenu) --Reports
VALUES
('Sales Report', '', '', 3),
('User Report', '', '', 3);

INSERT INTO Menu (MenuText, MenuIcon, MenuLink, ParentMenu) --Tools
VALUES
('Tool 1', '', '', 4),
('Tool 2', '', '', 4);

INSERT INTO Profile_Has_Menu (MenuID, ProfileID) -- Admin profile, all menus
VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1);

INSERT INTO Profile_Has_Menu (MenuID, ProfileID) -- Read profile
VALUES
(2, 2),
(3, 2),
(4, 2);

INSERT INTO Profile_Has_Menu (MenuID, ProfileID) -- Report profile
VALUES
(3, 3);

SELECT * FROM Menu
SELECT * FROM UserProfile
SELECT * FROM Profile_Has_Menu
