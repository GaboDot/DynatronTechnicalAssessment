using System.Linq.Expressions;

namespace BackEnd.DAL.Repositories.Contract
{
    public interface IGenericRepository<TModel> where TModel : class
    {
        Task<TModel> Get(Expression<Func<TModel, bool>> filtro);

        Task<TModel> Insert(TModel modelo);

        Task<bool> Update(TModel modelo);

        Task<bool> Delete(TModel modelo);

        Task<IQueryable<TModel>> Query(Expression<Func<TModel, bool>> filtro = null);
    }
}
