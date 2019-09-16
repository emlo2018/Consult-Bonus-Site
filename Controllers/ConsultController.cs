using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class ConsultController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Consult
        public IQueryable<Consult> GetConsult()
        {
            return db.Consult;
        }

        // GET: api/Consult/5
        //[ResponseType(typeof(Consult))]
        //public IHttpActionResult GetConsult(int id)
        //{
        //    Consult consult = db.Consult.Find(id);
        //    if (consult == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(consult);
        //}

        // PUT: api/Consult/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutConsult(int id, Consult consult)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            if (id != consult.ConsultID)
            {
                return BadRequest();
            }

            db.Entry(consult).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConsultExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Consult
        [ResponseType(typeof(Consult))]
        public IHttpActionResult PostConsult(Consult consult)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            db.Consult.Add(consult);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = consult.ConsultID }, consult);
        }

        // DELETE: api/Consult/5
        [ResponseType(typeof(Consult))]
        public IHttpActionResult DeleteConsult(int id)
        {
            Consult consult = db.Consult.Find(id);
            if (consult == null)
            {
                return NotFound();
            }

            db.Consult.Remove(consult);
            db.SaveChanges();

            return Ok(consult);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ConsultExists(int id)
        {
            return db.Consult.Count(e => e.ConsultID == id) > 0;
        }
    }
}