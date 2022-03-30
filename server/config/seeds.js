const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Medicine' },
    { name: 'Electronics' },
    { name: 'Clothes' },
    { name: 'Toys' }
  ]);
  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Green Cabbage',
      description:
        'Get creative in the kitchen with super versatile and yummy Green Cabbage. Green cabbage is low in calories and high in fiber and antioxidants making it a great part of any healthy diet. Best of all, this cabbage can be used a myriad of different recipes and cuisines. This amazing vegetable can be incorporated into everything from delicious and creamy cole slaw, stuffed cabbage, and wraps, to egg rolls, grilled cabbage, curry, kimchi and more. You can even use it during breakfast in a delicious frittata. Green cabbage can be roasted, boiled, braised, grilled, sauted, and even blanched. The possibilities are endless when you bring home Green Cabbage',
      image: 'cabbage.png',
      category: categories[0]._id,
      price: 2.04,
      quantity: 492
    },
    {
      name: 'Cucumber',
      description:
        'Enjoy the fresh, crisp, delicious flavor of Cucumber. Packed with nutritional benefits such as being naturally low in calories, carbohydrates, sodium, fat, and cholesterol, cucumbers also provide potassium, fiber, and vitamin C and clock in at a cool 16 calories per cup. Use this cucumber to make healthy treats such as a cucumber salad with tomatoes and onions in a vinaigrette dressing, toss with fresh mozzarella, tomatoes, and a drizzle of balsamic vinegar, mix diced cucumbers with Greek yogurt, lemon, dill, and garlic for a refreshing tzatziki sauce for gyros or veggies, add to a crisp, fresh veggie salad, or thinly slice and add to a vinegar brine for quick pickles. Any way you slice, dice, or spiralize them, Cucumber is a refreshing, healthy addition to any meal.',
      image: 'cucumber.jpeg',
      category: categories[0]._id,
      price: 0.50,
      quantity: 243
    },
    {
      name: 'Green Onions',
      category: categories[0]._id,
      description:
        'Green Onion Bunches are a versatile addition to your kitchen pantry. You can chop up the stalks into little rings and mix them into sour cream to create a delicious chip dip. Sprinkle these spring onions on salads and other dishes to give them just a hint of boldness. These vegetables have a crisp texture that gives a satisfying crunch. You can put them in almost any reciple, from salads to steak toppings and more.',
      image: 'green-onions.jpeg',
      price: 0.48,
      quantity: 176
    },
    {
      name: 'Band-Aid',
      category: categories[1]._id,
      description:
        'Band-Aid Brand Tough Strips Extra Durable Adhesive Bandages provide heavy duty durable wound care protection that stays with you all day.',
      image: 'band-aid.jpeg',
      price: 6.96,
      quantity: 24
    },
    {
      name: 'Neosporin',
      category: categories[1]._id,
      description:
        'Neosporin + Pain Relief Cream provides dual antibiotic infection protection and soothes painful minor cuts, scrapes, and burns.',
      image: 'neosporin.jepg',
      price: 8.08,
      quantity: 59
    },
    {
      name: 'Equate 91% Isopropyl Alcohol',
      category: categories[1]._id,
      description:
        'Equate 91% Isopropyl Alcohol Antiseptic is the perfect solution for cleaning and sanitizing skin and surfaces. The 91% isopropyl alcohol solution is a powerful agent for cleaning cuts, burns, scrapes, and scratches while also promoting a speedy recovery.',
      image: 'alcohol.jpeg',
      price: 3.46,
      quantity: 77
    },
    {
      name: 'Apple 10.2-inch iPad (2021) Wi-Fi 64GB - Space Gray',
      category: categories[2]._id,
      description:
        'Powerful. Easy to use. Versatile. The new iPad has a beautiful 10.2-inch Retina display, powerful A13 Bionic chip, an Ultra Wide front camera with Center Stage, and works with Apple Pencil and the Smart Keyboard. iPad lets you do more, more easily.',
      image: 'apple-tablet.jpeg',
      price: 309.00,
      quantity: 43
    },
    {
      name: 'Apple Pencil (1st Generation)',
      category: categories[2]._id,
      description:
        'The Apple Pencil for the iPad Pro opens up new creative possibilities.',
      image: 'apple-pen.jpeg',
      price: 95.00,
      quantity: 51
    },
    {
      name: 'Anker Wireless Charger Slim Pad 10W Qi-Certified Charging',
      category: categories[2]._id,
      description: 'An aesthetically-pleasing slimline design adds an air of high-tech sophistication to your desk, while the TPU charging surface prevents your devices from easily sliding off.',
      image: 'anker.jpeg',
      price: 14.99,
      quantity: 87
    },
    {
      name: 'Giselle Paris Womens Ella Shoulder Handbag Nude',
      category: categories[3]._id,
      description:
        'From weekdays on the clock to weekends out on the town, the Ella Shoulder Handbag from Giselle Paris suits your every occasion. Buttery soft vegan leather with a ruched handle sits perfectly on your shoulder with comfort..',
      image: 'giselle.jpeg',
      price: 25.99,
      quantity: 256
    },
    {
      name: 'Ladies Rampage Big Brim Straw Sun Hat with Ribbon Pom',
      category: categories[3]._id,
      description:
        'Ladies Rampage Big Brim Straw Sun Hat with Ribbon Pom',
      image: 'sun-hat.jpeg',
      price: 38.00,
      quantity: 143
    },
    {
      name: 'DC Comics The Batman Turbo Boost Batmobile with Remote Control',
      category: categories[4]._id,
      description:
        'Race into Gotham City with the Batmobile Turbo Boost RC in 1:15 scale!',
      image: 'batman.jpeg',
      price: 39.99,
      quantity: 409
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Bo',
    lastName: 'Kok',
    email: 'bokok123@yahoo.com',
    password: 'password',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@yahoo.com',
    password: 'password'
  });

  console.log('users seeded');

  process.exit();
});
