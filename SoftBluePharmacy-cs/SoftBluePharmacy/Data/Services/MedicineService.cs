using SoftBluePharmacy.Data.Models;

namespace SoftBluePharmacy.Data.Services
{
    public class MedicineService
    {
        private readonly PharmacyContext _db;
        public MedicineService(PharmacyContext db)
        {
            _db = db;
        }

        public List<MedicineModel> GetAllMedicines()
        {
            var MedicinesList = _db.Medicines.ToList();
            return MedicinesList;
        }

        public void AddMedicine(MedicineModel pMedicine)
        {
            _db.Medicines.Add(pMedicine);
            _db.SaveChanges();
        }

        public MedicineModel GetMedicineByID(int ID)
        {
            MedicineModel medicine = _db.Medicines.FirstOrDefault(x => x.Id == ID);
            return medicine;
        }

        public void UpdateMedicine(MedicineModel pMedicine)
        {
            _db.Medicines.Update(pMedicine);
            _db.SaveChanges();
        }

        public void DeleteMedicine(int id)
        {
            var entity = _db.Medicines.FirstOrDefault(x => x.Id == id);

            if (entity is null)
                return;

            _db.Remove(entity);
            _db.SaveChanges();
        }
    }
}
