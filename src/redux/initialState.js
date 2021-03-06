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
      stars: 2,
      isStarred: false,
      oldPrice: 35,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum pharetra metus, id tristique massa pulvinar ut.',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldPrice: 40,
      stars: 2,
      isStarred: false,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
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
      isStarred: false,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,

      favourite: false,

      topSeller: true,
      image:
        'https://images.pexels.com/photos/6758245/pexels-photo-6758245.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description:
        'Aliquam suscipit, erat non dictum venenatis, metus ante molestie nunc, et vehicula dolor metus id nunc.',
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 2,
      isStarred: false,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favoritue: true,

      topSeller: true,
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
      price: 40,
      oldPrice: null,
      stars: 2,
      isStarred: false,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      favoritue: false,
      topSeller: true,
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
      isStarred: false,
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
      isStarred: false,
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
      isStarred: false,
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
      isStarred: false,
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
      isStarred: false,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
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
      isStarred: false,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
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
      isStarred: false,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
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
      isStarred: false,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      topSeller: true,
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
      isStarred: false,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
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
      isStarred: false,
      quantity: 1,
      promo: 'sale',
      favourite: false,
      topSeller: true,
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
      isStarred: false,
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
      isStarred: false,
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
      isStarred: false,
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
      isStarred: false,
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
      isStarred: false,
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
      isStarred: false,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
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
      isStarred: false,
      quantity: 1,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
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
      isStarred: false,
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
      isStarred: false,
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
    {
      id: 'aenean-on-chair-01',
      name: 'Aenean Ter Padint 01',
      category: 'chair',
      price: 35,
      oldPrice: 45,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/2258083/pexels-photo-2258083.jpeg?cs=srgb&dl=pexels-artem-lysenko-2258083.jpg&fm=jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-chair-02',
      name: 'Aenean Ter Padint 02',
      category: 'chair',
      price: 50,
      oldPrice: null,
      stars: 4,
      promo: null,
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/2495555/pexels-photo-2495555.jpeg?cs=srgb&dl=pexels-hemanth-nirujogi-2495555.jpg&fm=jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-chair-03',
      name: 'Aenean Ter Padint 03',
      category: 'chair',
      price: 35,
      oldPrice: 45,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/8989497/pexels-photo-8989497.jpeg?cs=srgb&dl=pexels-anna-nekrashevich-8989497.jpg&fm=jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-chair-04',
      name: 'Aenean Ter Padint 04',
      category: 'chair',
      price: 35,
      oldPrice: 45,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?cs=srgb&dl=pexels-anna-shvets-3771691.jpg&fm=jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-sofa-01',
      name: 'Aenean Tum Raden 01',
      category: 'sofa',
      price: 320,
      oldPrice: 400,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/5982764/pexels-photo-5982764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-sofa-02',
      name: 'Aenean Tum Raden 02',
      category: 'sofa',
      price: 420,
      oldPrice: 460,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/6920628/pexels-photo-6920628.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6920628.jpg&fm=jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-sofa-03',
      name: 'Aenean Tum Raden 03',
      category: 'sofa',
      price: 320,
      oldPrice: 400,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/7018400/pexels-photo-7018400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1&w=500',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-sofa-04',
      name: 'Aenean Tum Raden 04',
      category: 'sofa',
      price: 200,
      oldPrice: 300,
      stars: 3,
      promo: null,
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/6933860/pexels-photo-6933860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-sofa-05',
      name: 'Aenean Tum Raden 05',
      category: 'sofa',
      price: 320,
      oldPrice: 400,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/8753032/pexels-photo-8753032.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-sofa-06',
      name: 'Aenean Tum Raden 06',
      category: 'sofa',
      price: 280,
      oldPrice: null,
      stars: 4,
      promo: null,
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-sofa-07',
      name: 'Aenean Tum Raden 07',
      category: 'sofa',
      price: 250,
      oldPrice: 290,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-sofa-08',
      name: 'Aenean Tum Raden 08',
      category: 'sofa',
      price: 320,
      oldPrice: 400,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-sofa-09',
      name: 'Aenean Tum Raden 09',
      category: 'sofa',
      price: 200,
      oldPrice: 300,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/8082204/pexels-photo-8082204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-sofa-10',
      name: 'Aenean Tum Raden 10',
      category: 'sofa',
      price: 420,
      oldPrice: 460,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/8433453/pexels-photo-8433453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-table-01',
      name: 'Aenean Azure Table 01',
      category: 'table',
      price: 80,
      oldPrice: 100,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-table-02',
      name: 'Aenean Azure Table 02',
      category: 'table',
      price: 120,
      oldPrice: 150,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/631411/pexels-photo-631411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-dining-01',
      name: 'Aenean Aduno Dining 01',
      category: 'dining',
      price: 200,
      oldPrice: null,
      stars: 4,
      promo: null,
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-dining-02',
      name: 'Aenean Aduno Dining 02',
      category: 'dining',
      price: 320,
      oldPrice: 400,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-dining-03',
      name: 'Aenean Aduno Dining 03',
      category: 'dining',
      price: 250,
      oldPrice: 290,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/7195850/pexels-photo-7195850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-dining-04',
      name: 'Aenean Aduno Dining 04',
      category: 'dining',
      price: 200,
      oldPrice: 220,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/2029673/pexels-photo-2029673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
    {
      id: 'aenean-on-dining-05',
      name: 'Aenean Aduno Dining 05',
      category: 'dining',
      price: 180,
      oldPrice: 250,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favourite: false,
      image:
        'https://images.pexels.com/photos/3935311/pexels-photo-3935311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      compare: false,
      description:
        'Vestibulum laoreet faucibus commodo. Pellentesque accumsan mi id lectus efficitur, nec dignissim neque tincidunt. ',
    },
  ],
  brands: [
    {
      id: 'brand-1',
      name: 'brand 1',
      image: 'https://i.imgur.com/ZuY7GNH.jpg',
    },
    {
      id: 'brand-2',
      name: 'brand 2',
      image: 'https://i.imgur.com/1MobFGZ.jpg',
    },
    {
      id: 'brand-3',
      name: 'brand 3',
      image: 'https://i.imgur.com/cOyb9mk.jpg',
    },
    {
      id: 'brand-4',
      name: 'brand 4',
      image: 'https://i.imgur.com/1P2Y8zb.jpg',
    },
    {
      id: 'brand-5',
      name: 'brand 5',
      image: 'https://i.imgur.com/spQ9tQf.jpg',
    },
    {
      id: 'brand-6',
      name: 'brand 6',
      image: 'https://i.imgur.com/ZuY7GNH.jpg',
    },
    {
      id: 'brand-7',
      name: 'brand 7',
      image: 'https://i.imgur.com/1MobFGZ.jpg',
    },
    {
      id: 'brand-8',
      name: 'brand 8',
      image: 'https://i.imgur.com/cOyb9mk.jpg',
    },
    {
      id: 'brand-9',
      name: 'brand 9',
      image: 'https://i.imgur.com/1P2Y8zb.jpg',
    },
    {
      id: 'brand-10',
      name: 'brand 10',
      image: 'https://i.imgur.com/spQ9tQf.jpg',
    },
    {
      id: 'brand-11',
      name: 'brand 11',
      image: 'https://i.imgur.com/ZuY7GNH.jpg',
    },
    {
      id: 'brand-12',
      name: 'brand 12',
      image: 'https://i.imgur.com/1MobFGZ.jpg',
    },
    {
      id: 'brand-13',
      name: 'brand 13',
      image: 'https://i.imgur.com/1P2Y8zb.jpg',
    },
    {
      id: 'brand-14',
      name: 'brand 14',
      image: 'https://i.imgur.com/spQ9tQf.jpg',
    },
    {
      id: 'brand-15',
      name: 'brand 15',
      image: 'https://i.imgur.com/ZuY7GNH.jpg',
    },
    {
      id: 'brand-16',
      name: 'brand 16',
      image: 'https://i.imgur.com/1MobFGZ.jpg',
    },
    {
      id: 'brand-17',
      name: 'brand 17',
      image: 'https://i.imgur.com/cOyb9mk.jpg',
    },
    {
      id: 'brand-18',
      name: 'brand 18',
      image: 'https://i.imgur.com/1MobFGZ.jpg',
    },
  ],
  cart: {
    products: [],
  },
  posts: [
    {
      id: 'post-1',
      date: '1 JAN 2021',
      comments: '1 comment',
      title: 'Products that fight static',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:
        'https://images.pexels.com/photos/6438762/pexels-photo-6438762.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 'post-2',
      date: '2 JAN 2021',
      comments: '11 comments',
      title: 'Products that fight static',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:
        'https://images.pexels.com/photos/9565782/pexels-photo-9565782.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    },
    {
      id: 'post-3',
      date: '3 JAN 2021',
      comments: '3 comments',
      title: 'Products that fight static',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:
        'https://images.pexels.com/photos/6510974/pexels-photo-6510974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 'post-4',
      date: '4 JAN 2021',
      comments: '4 comments',
      title: 'Products that fight static',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 'post-5',
      date: '5 JAN 2021',
      comments: '5 comments',
      title: 'Products that fight static',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:
        'https://images.pexels.com/photos/6301170/pexels-photo-6301170.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 'post-6',
      date: '6 JAN 2021',
      comments: '6 comments',
      title: 'Products that fight static',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image:
        'https://images.pexels.com/photos/6890399/pexels-photo-6890399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ],
  filters: {
    searchPhrase: '',
  },
};

export default initialState;
