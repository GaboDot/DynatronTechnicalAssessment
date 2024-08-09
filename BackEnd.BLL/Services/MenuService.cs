using AutoMapper;
using BackEnd.BLL.Services.Contract;
using BackEnd.DAL.Repositories.Contract;
using BackEnd.DTO;
using BackEnd.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BackEnd.BLL.Services
{
    public class MenuService: IMenuService
    {
        private readonly IGenericRepository<Menu> _menuRepo;
        private readonly IGenericRepository<ProfileHasMenu> _profileRepo;
        private readonly IMapper _mapper;

        public MenuService(IGenericRepository<Menu> menuRepo, IMapper mapper, IGenericRepository<ProfileHasMenu> profileRepo)
        {
            _menuRepo = menuRepo;
            _mapper = mapper;
            _profileRepo = profileRepo;
        }

        public async Task<List<MenuDTO>> CreateMenu(int profileID)
        {
            IQueryable<ProfileHasMenu> tbProfileMenu = await _profileRepo.Query(p => p.ProfileId == profileID);
            IQueryable<Menu> tbMenu = await _menuRepo.Query();

            try
            {
                IQueryable<Menu> tbResult = (from p in tbProfileMenu
                                             join m in tbMenu on p.MenuId equals m.MenuId
                                             select m).AsQueryable().Where(m => m.MenuStatus == true);

                var menuList = _mapper.Map<List<MenuDTO>>(tbResult).ToList();

                foreach (var menu in menuList)
                    menu.SubMenus = await GetSubMenus(menu.MenuId);

                return menuList;
            }
            catch (Exception) { return null!; }
        }

        private async Task<List<MenuDTO>> GetSubMenus(int menuID)
        {
            IQueryable<Menu> tbMenu = await _menuRepo.Query();
            try
            {
                IQueryable<Menu> tbResult = (from m in tbMenu
                                             where m.ParentMenu == menuID
                                             select m).AsQueryable().Where(m => m.MenuStatus == true).OrderBy( m => m.MenuText);
                var menuList = _mapper.Map<List<MenuDTO>>(tbResult.ToList());
                foreach (var menu in menuList)
                    menu.SubMenus = await GetSubMenus(menu.MenuId);

                return menuList;
            }
            catch(Exception) { return null!; }
        }
    }
}
