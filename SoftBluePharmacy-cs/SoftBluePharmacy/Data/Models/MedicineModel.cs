namespace SoftBluePharmacy.Data.Models
{
    public class MedicineModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Manufacturer { get; set; } 
        public bool OTC { get; set; }
    }
}
