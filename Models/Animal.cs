using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MilosMission.Models
{
    public class Animal
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Breed { get; set; }
        public string Gender { get; set; }
        public bool CatFriendly { get; set; }
        public bool ChildFriendly { get; set; }
        public bool DogFriendly { get; set; }
        public string Location { get; set; }
        public string Image { get; set; }
        public int Sociable { get; set; }
        public int Active { get; set; }
        public int Trained { get; set; }

    }
}
