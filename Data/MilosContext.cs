using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MilosMission.Models;

namespace MilosMission.Data
{
    public class MilosContext : DbContext
    {
        public MilosContext (DbContextOptions<MilosContext> options)
            : base(options)
        {
        }

        public DbSet<Animal> Animals { get; set; }
        
    }
}
