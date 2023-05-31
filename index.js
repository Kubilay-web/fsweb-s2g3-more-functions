// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/
function dosyaAdiniBul(dizinDizisi) {
  const dosyaAdi = dizinDizisi.substring(dizinDizisi.lastIndexOf("/") + 1);
  return dosyaAdi;
}

console.log(
  "dosyaAdi",
  dosyaAdiniBul("C:/Users/johnsmith/Music/Beethoven_5.mp3")
);
/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

function ortalamaBul2(sayiDizisi) {
  if (sayiDizisi.length === 0) {
    return null;
  }
  const diziToplami = sayiDizisi.reduce((toplam, sayi) => toplam + sayi, 0);
  console.log("diziToplami", diziToplami);
  return diziToplami / sayiDizisi.length;
}

function ortalamaBul(arr) {
  if (arr.length === 0) {
    return null;
  }
  const ort = arr.reduce((toplam, sayi) => (toplam += sayi), 0) / arr.length;
  return ort;
}
console.log(ortalamaBul[(109, 216, 288, 143, 71, 185, -278, 194, 5)]);

console.log("ortalamaBul boş", ortalamaBul([]));
console.log("ortalamaBul", ortalamaBul([50, -26, 153, 7]));

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(sayiDizisi, ortalamaCallBack) {
  const ort = ortalamaCallBack(sayiDizisi);
  console.log("ort", ort);
  if (ort === null) {
    return null;
  }
  const buyukler = [];
  for (let i = 0; i < sayiDizisi.length; i++) {
    if (sayiDizisi[i] >= ort) {
      buyukler.push(sayiDizisi[i]);
    }
  }
  return buyukler;
}

console.log(
  "ortalamadanBuyukleriBul",
  ortalamadanBuyukleriBul(
    [109, 216, 288, 143, 71, 185, -278, 194, 5],
    ortalamaBul
  )
);

/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
