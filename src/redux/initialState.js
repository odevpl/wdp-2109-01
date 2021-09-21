const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  feedbacks: [
    {
      id: 'quote-1',
      clientName: 'John Smith',
      clientText:
        'Vestibulum eu ante non enim malesuada vestibulum quis ac nisl. Nullam eget lacus iaculis, blandit augue in, pulvinar ipsum. Curabitur quis ligula tempus, tristique sapien pulvinar, dictum enim. Etiam tempor mollis tellus, id interdum ipsum condimentum id.',
      clientImage:
        'https://i.pinimg.com/originals/75/8b/70/758b70c854cfc2bd1c3a0fbc903fb7bb.png',
    },
    {
      id: 'quote-2',
      clientName: 'Mary Shelley',
      clientText:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis tellus est. Sed sapien mi. Mauris diam quam, consequat vitae neque in, pretium efficitur mauris. Donec vulputate consectetur ipsum non dictum. Aenean enim dui.',
      clientImage:
        'https://i.pinimg.com/originals/75/8b/70/758b70c854cfc2bd1c3a0fbc903fb7bb.png',
    },
    {
      id: 'quote-3',
      clientName: 'Jane Doe',
      clientText:
        'Etiam accumsan dui a lacus pulvinar gravida. Duis eu congue urna. Pellentesque facilisis justo vitae enim viverra dictum. Proin non lacus. Phasellus in blandit leo, a maximus magna. Phasellus cursus eros sit amet lacus fermentum ultrices. Etiam eget sapien at erat.',
      clientImage:
        'https://i.pinimg.com/originals/75/8b/70/758b70c854cfc2bd1c3a0fbc903fb7bb.png',
    },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 4,
      isStarred: true,
      quantity: 1,
      oldPrice: 35,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum pharetra metus, id tristique massa pulvinar ut.',
      compare: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Duis justo mauris, suscipit vitae elit quis, feugiat vehicula nisi. Quisque eleifend vitae quam eu facilisis.',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/6758245/pexels-photo-6758245.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Aliquam suscipit, erat non dictum venenatis, metus ante molestie nunc, et vehicula dolor metus id nunc.',
      compare: true,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/7018400/pexels-photo-7018400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Proin convallis tincidunt leo, vitae imperdiet turpis aliquet vitae. ',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Sed non odio ut magna sollicitudin eleifend nec vel lorem. Quisque vestibulum orci nec facilisis dapibus.',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      oldPrice: 20,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/5998138/pexels-photo-5998138.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'In nec velit facilisis velit porttitor varius vitae eget massa. Sed sollicitudin nec velit vel bibendum.',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      oldPrice: 25,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/6538933/pexels-photo-6538933.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'In porttitor finibus laoreet. Ut non purus quis diam condimentum tempor ut sed risus. Praesent condimentum congue mauris. ',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/6782476/pexels-photo-6782476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida non augue et dignissim. ',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/7088273/pexels-photo-7088273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Integer eu purus diam. Aliquam sagittis arcu odio, at auctor sapien iaculis vel. ',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      oldPrice: 20,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/6969824/pexels-photo-6969824.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Praesent consectetur lorem vel justo convallis, in eleifend tellus egestas. ',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      oldPrice: 18,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/6588592/pexels-photo-6588592.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Cras commodo magna ut dolor sagittis finibus. Praesent vitae nisi mollis arcu tincidunt lacinia ac ac felis.',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/6947272/pexels-photo-6947272.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Vivamus ultricies euismod accumsan. Etiam hendrerit pretium eros, porttitor vehicula ligula ultrices in.',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      oldPrice: 25,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Aliquam pharetra est nunc, vitae feugiat enim gravida et. Donec sit amet eros consectetur, eleifend ipsum vel, tristique lacus. ',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      oldPrice: 45,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Phasellus et risus vel nibh condimentum pretium in vitae risus. Donec pretium quam mattis purus efficitur, non condimentum leo porttitor.',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      oldPrice: 60,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/6969834/pexels-photo-6969834.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Mauris at tincidunt lorem, commodo hendrerit turpis. Proin dignissim odio nisl, nec vulputate tellus interdum a.',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Duis suscipit pharetra gravida. In malesuada nibh at dolor auctor tristique. Aliquam massa risus, viverra sed pharetra ut, dapibus in lacus.',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      oldPrice: 25,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/6480198/pexels-photo-6480198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Nunc ac mi ac odio malesuada auctor id non sapien. Etiam in velit bibendum, consequat nulla quis, scelerisque quam. ',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Aliquam consectetur, velit non porta vehicula, massa nunc faucibus nisi, vel lobortis odio nibh quis lacus. Etiam tristique a sapien nec elementum.',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Cras laoreet, tortor ac rutrum vulputate, odio urna faucibus tortor, in semper diam risus ac nisl.',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      oldPrice: 25,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Sed pretium eros ac varius volutpat. Mauris convallis dapibus neque non congue. Suspendisse ac urna et lectus eleifend hendrerit. ',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: true,
      image:
        'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Integer hendrerit sollicitudin leo sit amet convallis. Nullam viverra lectus vel vulputate ultricies. Aenean at est nec turpis porta pulvinar.',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Etiam hendrerit pretium eros, porttitor vehicula ligula ultrices in. Aliquam pharetra est nunc, vitae feugiat enim gravida et.',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      oldPrice: 25,
      stars: 2,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
  ],
  cart: {
    products: [
      {
        productId: 'aenean-ru-bristique-24',
        quantity: 1,
        name: 'Aenean Ru Bristique 24',
        price: 30,
        image:
          'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        productId: 'aenean-ru-bristique-19',
        quantity: 1,
        name: 'Aenean Ru Bristique 19',
        price: 30,
        image:
          'https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
      {
        productId: 'aenean-ru-bristique-2',
        quantity: 2,
        name: 'Aenean Ru Bristique 2',
        price: 30,
        image:
          'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      },
    ],
  },
};

export default initialState;
