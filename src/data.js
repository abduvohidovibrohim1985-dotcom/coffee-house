export const products = [
  { id: 'kapuchino', name: 'Kapuchino', cat: 'Sutli', price: 26000, art: { liquid: '#a4703f', heart: true }, desc: 'Espresso, iliq sut va yumshoq ko\'pik.' },
  { id: 'amerikano', name: 'Amerikano', cat: 'Qora', price: 20000, art: { liquid: '#24120a' }, desc: 'Espresso va issiq suv, yengil va toza ta\'m.' },
  { id: 'espresso', name: 'Espresso', cat: 'Espresso', price: 18000, art: { liquid: '#3d2010', crema: true, small: true }, desc: 'Quyuq, kuchli va xushbo\'y.' },
  { id: 'doppio', name: 'Doppio', cat: 'Doppio', price: 24000, art: { liquid: '#331a0c', crema: true }, desc: 'Ikki porsiya espresso, ko\'proq kuch.' },
  { id: 'latte', name: 'Latte', cat: 'Sutli', price: 28000, art: { liquid: '#b88455', heart: true }, desc: 'Ko\'p sutli, mayin ta\'mli.' },
  { id: 'filtr', name: 'Filtr qahva', cat: 'Qora', price: 22000, art: { liquid: '#2f190d' }, desc: 'Sekin damlangan, toza va yengil.' },
  { id: 'ristretto', name: 'Ristretto', cat: 'Espresso', price: 19000, art: { liquid: '#3a1d0e', crema: true, small: true }, desc: 'Espressoning eng quyuq ko\'rinishi.' },
  { id: 'mokka', name: 'Mokka', cat: 'Sutli', price: 30000, art: { liquid: '#5b3320', swirl: true }, desc: 'Qahva, shokolad va sut uyg\'unligi.' },
]

export const categories = ['Hammasi', 'Qora', 'Espresso', 'Doppio', 'Sutli']

export const reviews = [
  { name: 'Dilnoza Karimova', role: 'Doimiy mijoz', text: 'Bu yerga ko\'p marta kelganman va har safar ajoyib. Qahva ham, xizmat ham yuqori darajada. Do\'stlarimga ham tavsiya qilaman.' },
  { name: 'Jasur Aliyev', role: 'Freelancer', text: 'Ish uchun eng yaxshi joy: tinch, Wi-Fi tez, kapuchinosi esa shahardagi eng mazalisi.' },
  { name: 'Madina Rahimova', role: 'Talaba', text: 'Hafta oxiri dugonalar bilan shu yerda yig\'ilamiz. Kruassan va latte juftligi meniki.' },
]

export const facilities = [
  { icon: 'wifi', title: 'Bepul Wi-Fi', text: 'Tez va barqaror internet har bir stolda.' },
  { icon: 'leaf', title: 'Yozgi terrasa', text: 'Ochiq havoda qahva ichish uchun qulay joy.' },
  { icon: 'bag', title: 'Olib ketish', text: 'Buyurtmangiz 5 daqiqada qadoqlab beriladi.' },
  { icon: 'music', title: 'Jonli musiqa', text: 'Juma va shanba kunlari kechki 19:00 da.' },
]

export const fmt = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
