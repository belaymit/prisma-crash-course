import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const continentsData = [
    {
      name: 'Asia',
      countries: [
        { name: 'China', code: 'Beijing' },
        { name: 'India', code: 'New Delhi' },
        { name: 'Japan', code: 'Tokyo' },
      ],
    },
    {
      name: 'Europe',
      countries: [
        { name: 'Germany', code: 'Berlin' },
        { name: 'France', code: 'Paris' },
        { name: 'Italy', code: 'Rome' },
      ],
    },
  ];

  for (const continentData of continentsData) {
    const continent = await prisma.continent.create({
      data: {
        name: continentData.name,
        countries: {
          create: continentData.countries, 
        },
      },
    });
    console.log(`Created continent: ${continent.name}`);
  }
}

main()
.then(async() => {
  await prisma.$disconnect();
})
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
