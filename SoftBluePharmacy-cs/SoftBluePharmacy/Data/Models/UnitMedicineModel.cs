namespace SoftBluePharmacy.Data.Models
{
    public class UnitMedicineModel
    {
        public int Id { get; set; }
        public int MedicineId { get; set; }
        public int UnitId { get; set; }
        public int AmountAvailable { get; set; }

        public MedicineModel? Medicine { get; set; } = null!;
        public UnitModel? Unit { get; set; } = null!;
    }
}
