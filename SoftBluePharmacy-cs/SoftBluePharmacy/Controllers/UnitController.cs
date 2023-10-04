using Microsoft.AspNetCore.Mvc;
using SoftBluePharmacy.Data.Models;
using SoftBluePharmacy.Data.Services;

namespace SoftBluePharmacy.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UnitController : ControllerBase
    {
        UnitService _service;
        public UnitController(UnitService service)
        {
            _service = service;
        }

        [HttpGet()]
        public List<UnitModel> GetAll()
        {
            return _service.GetAllUnits();
        }

        [HttpGet("{id}")]
        public UnitModel Get(int id)
        {
            return _service.GetUnitByID(id);
        }

        [HttpPost()]
        public void Post([FromBody] UnitModel pUnit)
        {
            _service.AddUnit(pUnit);
        }

        [HttpPut()]
        public void Put([FromBody] UnitModel pUnit)
        {
            _service.UpdateUnit(pUnit);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _service.DeleteUnit(id);
        }
    }
}

