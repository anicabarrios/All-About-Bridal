const allData = [
  // Dresses
  {
    id: 1, category: 'A-Line', name: 'Elegant A-Line',
    images: ['/images/148.webp', '/images/149.webp']
  },

  {
    id: 2, category: 'A-Line', name: 'Elegant A-Line',
    images: ['/images/167.webp', '/images/302.webp', '/images/319.webp']
  },

  {
    id: 3, category: 'A-Line', name: 'Elegant A-Line',
    images: ['/images/300.webp', '/images/301.webp', '/images/320.webp']
  },
  {
    id: 4, category: 'A-Line', name: 'Elegant A-Line',
    images: ['/images/204.webp' ]
  },
  {
    id: 17, category: 'A-Line', name: 'Elegant A-Line',
    images: ['/images/225.webp', '/images/226.webp']
  },
  {
    id: 20, category: 'A-Line', name: 'Elegant A-Line',
    images: ['/images/235.webp', '/images/236.webp', '/images/237.webp', '/images/238.webp']
  },
  {
    id: 30, category: 'A-Line', name: 'Elegant A-Line',
    images: ['/images/285.webp', '/images/284.webp', '/images/286.webp']
  },
  {
    id: 32, category: 'A-Line', name: 'Elegant A-Line',
    images: ['/images/293.webp', '/images/294.webp']
  },
  {
    id: 33, category: 'A-Line', name: 'Elegant A-Line',
    images: ['/images/295.webp', '/images/296.webp', '/images/297.webp']
  },
  {
    id: 38, category: 'A-Line', name: 'Elegant A-Line',
    images: ['/images/314.webp']
  },
  {
    id: 39, category: 'A-Line', name: 'Elegant A-Line',
    images: ['/images/315.webp', '/images/316.webp']
  },
  {
    id: 40, category: 'A-Line', name: 'Elegant A-Line',
    images: ['/images/317.webp']
  },
  {
    id: 41, category: 'A-Line', name: 'Elegant A-Line',
    images: ['/images/318.webp']
  },



  {
    id: 5, category: 'Ball Gown', name: 'Beautiful Ball Gown',
    images: ['/images/4.webp', '/images/5.webp', '/images/image6.webp']
  },

  {
    id: 6, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/154.webp', '/images/155.webp']
  },

  {
    id: 7, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/156.webp', '/images/157.webp', '/images/158.webp']
  },

  {
    id: 8, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/161.webp', '/images/162.webp', '/images/163.webp', '/images/164.webp', '/images/165.webp']
  },

  {
    id: 9, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/166.webp', '/images/205.webp']
  },
  {
    id: 10, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/172.webp', '/images/173.webp', '/images/174.webp', '/images/175.webp', '/images/176.webp']
  },
  {
    id: 11, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/192.webp', '/images/193.webp', '/images/194.webp', '/images/195.webp']
  },
  {
    id: 12, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/197.webp']
  },
  {
    id: 13, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/198.webp', '/images/199.webp', '/images/200.webp', '/images/201.webp', '/images/202.webp']
  },
  {
    id: 14, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/207.webp', '/images/208.webp', '/images/209.webp', '/images/210.webp', '/images/211.webp']
  },
  {
    id: 15, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/212.webp', '/images/213.webp', '/images/214.webp', '/images/215.webp', '/images/216.webp']
  },
  {
    id: 16, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/219.webp', '/images/221.webp', '/images/222.webp']
  },
  {
    id: 18, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/230.webp', '/images/231.webp']
  },
  {
    id: 19, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/232.webp', '/images/233.webp', '/images/234.webp']
  },
  {
    id: 21, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/239.webp', '/images/240.webp', '/images/241.webp']
  },
  {
    id: 22, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/242.webp', '/images/243.webp', '/images/244.webp', '/images/245.webp']
  },
  {
    id: 23, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/246.webp', '/images/250.webp', '/images/251.webp', '/images/249.webp']
  },
  {
    id: 24, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/252.webp', '/images/253.webp', '/images/254.webp']
  },
  {
    id: 25, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/256.webp', '/images/257.webp', '/images/258.webp', '/images/259.webp']
  },
  {
    id: 26, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/262.webp', '/images/261.webp', '/images/260.webp']
  },
  {
    id: 27, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/271.webp', '/images/270.webp', '/images/268.webp','/images/272.webp']
  },
  {
    id: 28, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/273.webp', '/images/274.webp', '/images/275.webp','/images/276.webp', '/images/277.webp', '/images/278.webp','/images/279.webp']
  },
  {
    id: 29, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/283.webp', '/images/281.webp']
  },
  {
    id: 31, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/291.webp', '/images/292.webp']
  },
  {
    id: 34, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/304.webp', '/images/303.webp', '/images/305.webp']
  },
  {
    id: 35, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/306.webp', '/images/307.webp']
  },
  {
    id: 36, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/310.webp', '/images/311.webp']
  },
  {
    id: 37, category: 'Fit&Flare', name: 'Stunning Mermaid',
    images: ['/images/312.webp', '/images/313.webp',]
  },



  // Quinceañera
  {
    id: 42, category: 'Dresses', name: 'Quinceañera Ball Gown',
    images: ['/images/1.webp']
  },
  {
    id: 43, category: 'Dresses', name: 'Quinceañera Ball Gown',
    images: ['/images/2.webp', '/images/3.webp', '/images/4.webp', '/images/6.webp']
  },
 
  
  // {
  //   id: 5, category: 'Accessories', name: 'Beautiful Tiara',
  //   images: ['/images/2.webp', '/images/3.webp', '/images/4.webp']
  // },
  // Special Occasions
  {
    id: 44, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/8.webp', '/images/9.webp', '/images/10.webp']
  },
  {
    id: 45, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/11.webp', '/images/12.webp']
  },
  {
    id: 46, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/13.webp', '/images/14.webp', '/images/15.webp','/images/16.webp', '/images/17.webp', '/images/18.webp', '/images/19.webp', '/images/20.webp', '/images/21.webp', '/images/22.webp' ]
  },
  {
    id: 47, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/23.webp']
  },
  {
    id: 48, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/24.webp', '/images/25.webp', '/images/26.webp']
  },
  {
    id: 49, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/27.webp', '/images/28.webp', '/images/29.webp',  '/images/30.webp']
  },
  {
    id: 50, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/31.webp', '/images/32.webp']
  },
  {
    id: 51, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/33.webp', '/images/34.webp', '/images/35.webp', '/images/36.webp', '/images/37.webp',  '/images/38.webp']
  },
  {
    id: 52, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/39.webp', '/images/40.webp', '/images/41.webp', '/images/42.webp', '/images/43.webp']
  },
  {
    id: 53, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/44.webp', '/images/45.webp', '/images/46.webp']
  },
  {
    id: 54, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/47.webp', '/images/48.webp', '/images/49.webp', '/images/50.webp', '/images/51.webp',  '/images/52.webp']
  },
  {
    id: 55, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/53.webp', '/images/54.webp', '/images/55.webp']
  },
  {
    id: 56, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/56.webp', '/images/57.webp', '/images/58.webp','/images/59.webp', '/images/60.webp', '/images/61.webp', '/images/62.webp', '/images/63.webp', '/images/64.webp', '/images/65.webp', '/images/66.webp', '/images/67.webp', '/images/68.webp' ]
  },
  {
    id: 57, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/69.webp', '/images/70.webp', '/images/71.webp', '/images/72.webp', '/images/73.webp',  '/images/74.webp']
  },
  {
    id: 58, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/75.webp', '/images/76.webp']
  },
  {
    id: 59, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/77.webp', '/images/78.webp']
  },
  {
    id: 60, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/79.webp', '/images/80.webp', '/images/81.webp', '/images/82.webp', '/images/83.webp']
  },
  {
    id: 61, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/84.webp', '/images/85.webp', '/images/86.webp', '/images/88.webp', '/images/89.webp',  '/images/90.webp', '/images/121.webp']
  },
  {
    id: 62, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/91.webp']
  },
  {
    id: 63, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/92.webp', '/images/93.webp']
  },
  {
    id: 64, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/94.webp', '/images/95.webp', '/images/96.webp', '/images/97.webp', '/images/98.webp',  '/images/99.webp']
  },
  {
    id: 65, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/100.webp', '/images/102.webp', '/images/103.webp', '/images/104.webp']
  },
  {
    id: 66, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/101.webp', '/images/105.webp']
  },
  {
    id: 67, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/106.webp', '/images/107.webp', '/images/108.webp']
  },
  {
    id: 68, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/110.webp', '/images/111.webp', '/images/112.webp', '/images/122.webp']
  },
  {
    id: 69, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/109.webp']
  },
  {
    id: 70, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/113.webp', '/images/114.webp', '/images/115.webp', '/images/116.webp', '/images/117.webp',  '/images/118.webp ', '/images/119.webp',  '/images/120.webp ']
  },
  {
    id: 71, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/123.webp']
  },
  {
    id: 72, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/124.webp', '/images/125.webp', '/images/126.webp', '/images/127.webp', '/images/128.webp',  '/images/129.webp ']
  },
  {
    id: 73, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/130.webp', '/images/131.webp']
  },
  {
    id: 74, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/134.webp', '/images/133.webp', '/images/135.webp', '/images/136.webp', '/images/137.webp',  '/images/138.webp ',  '/images/139.webp ']
  },
  {
    id: 75, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/140.webp']
  },
  {
    id: 76, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/141.webp', '/images/142.webp']
  },
  {
    id: 77, category: 'Evening/Prom', name: 'Elegant Evening Gown',
    images: ['/images/143.webp', '/images/144.webp']
  },





  {
    id: 7, category: 'Cocktail/Homecoming', name: 'Stylish Cocktail Dress',
    images: ['/images/5.webp', '/images/cocktail2.webp', '/images/cocktail3.webp']
  },
  // Mother of the Bride
  {
    id: 8, category: 'Mother of the Bride', name: 'Graceful Mother of the Bride Dress',
    images: ['/images/1.webp', '/images/2.webp', '/images/mother3.webp']
  },
  {
    id: 9, category: 'Mother of the Bride', name: 'Chic Mother of the Bride Gown',
    images: ['/images/mother4.webp', '/images/mother5.webp', '/images/mother6.webp']
  },
  // Bridesmaids
  {
    id: 10, category: 'Bridesmaids', name: 'Elegant Bridesmaid Dress',
    images: ['/images/1.webp', '/images/2.webp', '/images/3.webp']
  },
  {
    id: 11, category: 'Bridesmaids', name: 'Charming Bridesmaid Gown',
    images: ['/images/4.webp', '/images/bridesmaid5.webp', '/images/bridesmaid6.webp']
  },
  // Add more items here
];

const categories = ['All', 'A-Line', 'Ball Gown', 'Fit&Flare', 'Dresses', 'Accessories', 'Evening/Prom', 'Cocktail/Homecoming'];

export { allData, categories };
