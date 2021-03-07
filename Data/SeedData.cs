using MilosMission.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace MilosMission.Data
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new MilosContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<MilosContext>>()))
            {

                if (context.Animals.Any())
                {
                    return;   // DB has been seeded
                }

                var animals = new Animal[]
                           {
                 new Animal {
                     Name = "Teddy",
                     Type = "Cat",
                     Breed = "Moggie",
                     Gender = "Male",
                     CatFriendly = true,
                     DogFriendly = false,
                     ChildFriendly = true,
                     Location = "Nottingham",
                     Sociable = 4,
                     Active = 1,
                     Trained = 4
                 },
                 new Animal {
                     Name = "Mitsy",
                     Type = "Cat",
                     Breed = "Moggie",
                     Gender = "Female",
                     CatFriendly = true,
                     DogFriendly = true,
                     ChildFriendly = true,
                     Location = "Bristol",
                     Sociable = 3,
                     Active = 2,
                     Trained = 5
                 },
                 new Animal {
                     Name = "Todd",
                     Type = "Dog",
                     Breed = "Jack Russel",
                     Gender = "Male",
                     CatFriendly = false,
                     DogFriendly = true,
                     ChildFriendly = true,
                     Location = "London",
                     Sociable = 5,
                     Active = 3,
                     Trained = 3
                 },
                 new Animal {
                     Name = "Lily",
                     Type = "Dog",
                     Breed = "Border Collie",
                     Gender = "Female",
                     CatFriendly = false,
                     DogFriendly = true,
                     ChildFriendly = false,
                     Location = "Manchester",
                     Sociable = 5,
                     Active = 5,
                     Trained = 4
                 },
                 new Animal {
                     Name = "Lola",
                     Type = "Cat",
                     Breed = "Ragdoll",
                     Gender = "Female",
                     CatFriendly = true,
                     DogFriendly = false,
                     ChildFriendly = false,
                     Location = "Milton Keynes",
                     Sociable = 5,
                     Active = 4,
                     Trained = 5
                 },
                 new Animal {
                     Name = "Pepper",
                     Type = "Dog",
                     Breed = "Yorkshire Terrier",
                     Gender = "Male",
                     CatFriendly = false,
                     DogFriendly = false,
                     ChildFriendly = false,
                     Location = "London",
                     Sociable = 2,
                     Active = 1,
                     Trained = 4
                 }
                           };

                context.Animals.AddRange(animals);
                context.SaveChanges();
            }
        }
    }
}
