using Microsoft.EntityFrameworkCore;
using SoftBluePharmacy.Data.Models;

namespace SoftBluePharmacy.Data.Services
{
    public class UnitMedicineService
    {
        private readonly PharmacyContext _db;
        public UnitMedicineService(PharmacyContext db)
        {
            _db = db;
        }

        public List<UnitMedicineModel> GetAllUnitMedicines()
        {
            var UnitMedicinesList = _db.UnitMedicines.Include(x=>x.Medicine).Include(x=>x.Unit).ToList();
            return UnitMedicinesList;
        }

        public void AddUnitMedicine(UnitMedicineModel pUnitMedicine)
        {
            var medicine = _db.Medicines.FirstOrDefault(x => x.Id == pUnitMedicine.MedicineId);
            if (medicine == null)
                throw new InvalidOperationException("Specified medicine does not exist");

            var unit = _db.Units.FirstOrDefault(x => x.Id == pUnitMedicine.UnitId);
            if (unit == null)
                throw new InvalidOperationException("Specified unit does not exist");

            pUnitMedicine.Medicine = medicine;
            pUnitMedicine.Unit = unit;


            _db.UnitMedicines.Add(pUnitMedicine);
            _db.SaveChanges();
        }

        public UnitMedicineModel GetUnitMedicineByID(int ID)
        {
            UnitMedicineModel UnitMedicine = _db.UnitMedicines.FirstOrDefault(x => x.Id == ID);
            return UnitMedicine;
        }

        public void UpdateUnitMedicine(UnitMedicineModel pUnitMedicine)
        {
            _db.UnitMedicines.Update(pUnitMedicine);
            _db.SaveChanges();
        }

        public void DeleteUnitMedicine(int id)
        {
            var entity = _db.UnitMedicines.FirstOrDefault(x => x.Id == id);

            if (entity is null)
                return;

            _db.Remove(entity);
            _db.SaveChanges();
        }
    }
}
