/* ---------- Sample Data ----------
Generate with https://json-generator.com/

Sample data:
[
  '{{repeat(5, 30)}}',
  {
    brand: '{{random("adidas", "nike", "puma")}}',
    category: '{{random("shoes", "tshirt", "bag", "accesoriss")}}',
    color: '{{random("blue sky", "maroon", "brown", "black", "purple", "gold")}}',
    gender: '{{random("men", "women", "unisex")}}',
    id: '{{objectId()}}',
    picture: 'https://picsum.photos/400?image={{Math.floor(Math.random()*1000)}}',
    price: '{{((Math.random() * (+2000 - +150)) + +150).toFixed(3)}}',
    name: '{{firstName()}} {{surname()}}'
  }
]
*/

export interface ProductDataModel {
  brand: string,
  category: string | string[];
  color: string;
  gender: string;
  id: string;
  picture: string;
  price: number
  name: string;
}
export class SampleProductsData {
  static data: ProductDataModel[] = [
      {
        brand: 'puma',
        category: 'tshirt',
        color: 'brown',
        gender: 'unisex',
        id: '62122871cb242f1f01d916f9',
        picture: 'https://picsum.photos/400?image=172',
        price: 1851.141,
        name: 'Herminia Ray'
      },
      {
        brand: 'puma',
        category: 'accesoriss',
        color: 'purple,brown', // Sample multiple data with string -> makesure split with (,)
        gender: 'women',
        id: '621228716682ceb404a69e75',
        picture: 'https://picsum.photos/400?image=702',
        price: 1513.896,
        name: 'Brittany Neal'
      },
      {
        brand: 'puma',
        category: ['tshirt', 'accesoriss'], // Sample multiple data with array
        color: 'blue sky',
        gender: 'men',
        id: '62122871b37e4c94421a90b9',
        picture: 'https://picsum.photos/400?image=665',
        price: 1879.761,
        name: 'Mamie Ballard'
      },
      {
        brand: 'nike',
        category: 'tshirt',
        color: 'gold',
        gender: 'unisex',
        id: '621228717d370fa59663fbc6',
        picture: 'https://picsum.photos/400?image=569',
        price: 1928.284,
        name: 'Agnes Vasquez'
      },
      {
        brand: 'puma',
        category: 'bag',
        color: 'blue sky',
        gender: 'women',
        id: '62122871b22f15e370556788',
        picture: 'https://picsum.photos/400?image=80',
        price: 199.605,
        name: 'Natalia Banks'
      },
      {
        brand: 'puma',
        category: 'tshirt',
        color: 'blue sky',
        gender: 'women',
        id: '62122871d3064c9c3d22940e',
        picture: 'https://picsum.photos/400?image=9',
        price: 1991.265,
        name: 'Ivy Britt'
      },
      {
        brand: 'adidas',
        category: 'bag',
        color: 'black',
        gender: 'men',
        id: '62122871e2bc91cceceef297',
        picture: 'https://picsum.photos/400?image=233',
        price: 297.125,
        name: 'Avila Frost'
      },
      {
        brand: 'nike',
        category: 'shoes',
        color: 'brown',
        gender: 'women',
        id: '62122871ed30be6e9244151c',
        picture: 'https://picsum.photos/400?image=359',
        price: 165.846,
        name: 'Watkins Mcfadden'
      },
      {
        brand: 'adidas',
        category: 'bag',
        color: 'blue sky',
        gender: 'women',
        id: '621228713d4ff358c8098f56',
        picture: 'https://picsum.photos/400?image=718',
        price: 218.997,
        name: 'Savannah Gallagher'
      },
      {
        brand: 'puma',
        category: 'shoes',
        color: 'black',
        gender: 'men',
        id: '621228711aeac703e1bee7d8',
        picture: 'https://picsum.photos/400?image=269',
        price: 1058.347,
        name: 'Williamson Mathis'
      },
      {
        brand: 'nike',
        category: 'shoes',
        color: 'gold',
        gender: 'men',
        id: '6212287125fc36f642b5793b',
        picture: 'https://picsum.photos/400?image=47',
        price: 512.173,
        name: 'Rivera Velasquez'
      },
      {
        brand: 'nike',
        category: 'bag',
        color: 'brown',
        gender: 'unisex',
        id: '6212287173971e46b379930f',
        picture: 'https://picsum.photos/400?image=28',
        price: 938.782,
        name: 'Farrell Stewart'
      },
      {
        brand: 'nike',
        category: 'tshirt',
        color: 'gold',
        gender: 'unisex',
        id: '6212287181ca8fb227aae28b',
        picture: 'https://picsum.photos/400?image=490',
        price: 473.732,
        name: 'Emma Hooper'
      },
      {
        brand: 'nike',
        category: 'bag',
        color: 'gold',
        gender: 'women',
        id: '621228712d8613ecc9e68410',
        picture: 'https://picsum.photos/400?image=17',
        price: 1550.707,
        name: 'Amanda Dorsey'
      },
      {
        brand: 'puma',
        category: 'accesoriss',
        color: 'black',
        gender: 'unisex',
        id: '62122871fe01a1e86d53b006',
        picture: 'https://picsum.photos/400?image=907',
        price: 196.935,
        name: 'Gay Sharpe'
      },
      {
        brand: 'puma',
        category: 'shoes',
        color: 'black',
        gender: 'unisex',
        id: '621228719fa5aa8e962c47a8',
        picture: 'https://picsum.photos/400?image=40',
        price: 1828.412,
        name: 'Ayers Summers'
      },
      {
        brand: 'puma',
        category: 'accesoriss',
        color: 'brown',
        gender: 'men',
        id: '62122871c96dee89fde0f847',
        picture: 'https://picsum.photos/400?image=219',
        price: 1893.291,
        name: 'Bettie Sullivan'
      },
      {
        brand: 'nike',
        category: 'tshirt',
        color: 'blue sky',
        gender: 'men',
        id: '621228717a73f662eac5318f',
        picture: 'https://picsum.photos/400?image=195',
        price: 198.97,
        name: 'Christensen Sutton'
      },
      {
        brand: 'puma',
        category: 'tshirt',
        color: 'brown',
        gender: 'unisex',
        id: '6212287119f879fbc63f5fd7',
        picture: 'https://picsum.photos/400?image=369',
        price: 1248.454,
        name: 'Herring Harrington'
      },
      {
        brand: 'adidas',
        category: 'tshirt',
        color: 'purple',
        gender: 'unisex',
        id: '621228711769db5f88772644',
        picture: 'https://picsum.photos/400?image=390',
        price: 1121.162,
        name: 'Claudette Jackson'
      },
      {
        brand: 'nike',
        category: 'bag',
        color: 'brown',
        gender: 'women',
        id: '62122871f0bf8a92622c8834',
        picture: 'https://picsum.photos/400?image=413',
        price: 1416.068,
        name: 'Margery Mckay'
      },
      {
        brand: 'puma',
        category: 'tshirt',
        color: 'purple',
        gender: 'unisex',
        id: '62122871bfb8de08670608f7',
        picture: 'https://picsum.photos/400?image=845',
        price: 303.838,
        name: 'Malone Montoya'
      },
      {
        brand: 'puma',
        category: 'accesoriss',
        color: 'purple',
        gender: 'unisex',
        id: '62122871e3f6fbd004dabef3',
        picture: 'https://picsum.photos/400?image=190',
        price: 192.999,
        name: 'Camacho Barber'
      },
      {
        brand: 'nike',
        category: 'shoes',
        color: 'blue sky',
        gender: 'unisex man',
        id: '62122871a03b2f7db5183760',
        picture: 'https://picsum.photos/400?image=377',
        price: 1276.999,
        name: 'Lenora Moran'
      },
      {
        brand: 'nike',
        category: 'accesoriss',
        color: 'gold',
        gender: 'women',
        id: '6212287160dbf7120014bd54',
        picture: 'https://picsum.photos/400?image=207',
        price: 234.562,
        name: 'Walter Briggs'
      },
      {
        brand: 'nike',
        category: 'tshirt',
        color: 'purple',
        gender: 'unisex',
        id: '621228716c6612b8095f9156',
        picture: 'https://picsum.photos/400?image=613',
        price: 1447.673,
        name: 'Rebecca Cervantes'
      },
      {
        brand: 'puma',
        category: 'shoes',
        color: 'blue sky',
        gender: 'women',
        id: '62122871217e3d09f943ddbc',
        picture: 'https://picsum.photos/400?image=102',
        price: 1529.446,
        name: 'Cheryl Olsen'
      }
  ];
}
