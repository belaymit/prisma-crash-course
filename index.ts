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

  // for (const continentData of continentsData) {
  //   const continent = await prisma.continent.create({
  //     data: {
  //       name: continentData.name,
  //       countries: {
  //         create: continentData.countries, 
  //       },
  //     },
  //   });
  //   console.log(`Created continent: ${continent.name}`);
  // }

  // const continents = await prisma.continent.findMany({
  //   include: {
  //     countries: true,
  //   },
  // });
  // console.log(JSON.stringify(continents, null, 2));
  const countries = await prisma.country.findMany();

  const capitals: { [key: string]: string } = {
    'Ethiopia': 'Addis Ababa',
    'Kenya': 'Nairobi',
    'South Africa': 'Pretoria',
    'Germany': 'Berlin',
    'France': 'Paris',
    'Italy': 'Rome',
    'China': 'Beijing',
    'India': 'New Delhi',
    'Japan': 'Tokyo',
  };

  // for (const country of countries) {
  //   const capitalName = capitals[country.name];
  //   if (capitalName) {
  //     const existingCapital = await prisma.capitalCity.findUnique({
  //       where: { countryId: country.id },
  //     });

  //     if (!existingCapital) {
  //       await prisma.capitalCity.create({
  //         data: {
  //           name: capitalName,
  //           countryId: country.id,
  //         },
  //       });
  //       console.log(`Created capital ${capitalName} for country ${country.name}`);
  //     } else {
  //       console.log(`Capital already exists for country ${country.name}`);
  //     }
  //   } else {
  //     console.log(`No capital defined for country ${country.name}`);
  //   }
  // }

  const continent = await prisma.continent.findMany({
    include: {
      countries: {
        include: {
          capital: true,
        },
      }
    },
  });

  console.log("capitalsData", JSON.stringify(continent, null, 2));
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
