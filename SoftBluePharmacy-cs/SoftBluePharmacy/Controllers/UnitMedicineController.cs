using Microsoft.AspNetCore.Mvc;
using SoftBluePharmacy.Data.Models;
using SoftBluePharmacy.Data.Services;
using System.Linq.Expressions;

namespace SoftBluePharmacy.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UnitMedicineController : ControllerBase
    {
        UnitMedicineService _service;
        public UnitMedicineController(UnitMedicineService service)
        {
            _service = service;
        }

        [HttpGet()]
        public List<UnitMedicineModel> GetAll()
        {
            return _service.GetAllUnitMedicines();
        }

        [HttpGet("{id}")]
        public UnitMedicineModel Get(int id)
        {
            return _service.GetUnitMedicineByID(id);
        }

        [HttpPost()]
        public IActionResult Post([FromBody] UnitMedicineModel pUnitMedicine)

        {
            try
            {
                _service.AddUnitMedicine(pUnitMedicine);
            }
            catch (InvalidOperationException e)
            {
                return BadRequest(e.Message);
            }
            return Ok();
        }

        [HttpPut()]
        public void Put([FromBody] UnitMedicineModel pUnitMedicine)
        {
            _service.UpdateUnitMedicine(pUnitMedicine);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _service.DeleteUnitMedicine(id);
        }
    }
}