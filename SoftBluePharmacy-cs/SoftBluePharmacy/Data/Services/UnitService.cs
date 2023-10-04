using SoftBluePharmacy.Data.Models;

namespace SoftBluePharmacy.Data.Services
{
    public class UnitService
    {
        private readonly PharmacyContext _db;
        public UnitService(PharmacyContext db)
        {
            _db = db;
        }

        public List<UnitModel> GetAllUnits()
        {
            var UnitsList = _db.Units.ToList();
            return UnitsList;
        }

        public void AddUnit(UnitModel pUnit)
        {
            _db.Units.Add(pUnit);
            _db.SaveChanges();
        }

        public UnitModel GetUnitByID(int ID)
        {
            UnitModel Unit = _db.Units.FirstOrDefault(x => x.Id == ID);
            return Unit;
        }

        public void UpdateUnit(UnitModel pUnit)
        {
            _db.Units.Update(pUnit);
            _db.SaveChanges();
        }

        public void DeleteUnit(int id)
        {
            var entity = _db.Units.FirstOrDefault(x => x.Id == id);

            if (entity is null)
                return;

            _db.Remove(entity);
            _db.SaveChanges();
        }
    }
}
