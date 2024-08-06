using BackEnd.DAL.DataBaseContext;
using BackEnd.DAL.Repositories.Contract;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace BackEnd.DAL.Repositories
{
    public class GenericRepository<TModel> : IGenericRepository<TModel> where TModel : class
    {
        private readonly DynatronContext _dbContext;

        public GenericRepository(DynatronContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<TModel> Get(Expression<Func<TModel, bool>> filtro)
        {
            try
            {
                return await _dbContext.Set<TModel>().FirstOrDefaultAsync(filtro);
            }
            catch
            {
                throw;
            }
        }

        public async Task<TModel> Insert(TModel modelo)
        {
            try
            {
                _dbContext.Set<TModel>().Add(modelo);
                await _dbContext.SaveChangesAsync();
                return modelo;
            }
            catch
            {
                throw;
            }
        }

        public async Task<bool> Update(TModel modelo)
        {
            try
            {
                _dbContext.Set<TModel>().Update(modelo);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch
            {
                throw;
            }
        }

        public async Task<bool> Delete(TModel modelo)
        {
            try
            {
                _dbContext.Set<TModel>().Remove(modelo);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch
            {
                throw;
            }
        }

        public async Task<IQueryable<TModel>> Query(Expression<Func<TModel, bool>> filtro = null)
        {
            try
            {
                IQueryable<TModel> queryModel = filtro == null ? _dbContext.Set<TModel>() : _dbContext.Set<TModel>().Where(filtro);
                return queryModel;
            }
            catch
            {
                throw;
            }
        }
    }
}
