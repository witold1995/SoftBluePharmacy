using Microsoft.AspNetCore.Mvc;
using SoftBluePharmacy.Data.Models;
using SoftBluePharmacy.Data.Services;

namespace SoftBluePharmacy.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MedicineController : ControllerBase
    {
        MedicineService _service;
        public MedicineController(MedicineService service)
        {
            _service = service;
        }

        [HttpGet()]
        public List<MedicineModel> GetAll()
        {
            return _service.GetAllMedicines();
        }

        [HttpGet("{id}")]
        public MedicineModel Get(int id)
        {
            return _service.GetMedicineByID(id);
        }

        [HttpPost()]
        public void Post([FromBody] MedicineModel pMedicine)
        {
            _service.AddMedicine(pMedicine);
        }

        [HttpPut()]
        public void Put([FromBody] MedicineModel pMedicine)
        {
            _service.UpdateMedicine(pMedicine);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _service.DeleteMedicine(id);
        }
    }
}