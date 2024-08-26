
# Bölüm - 4

*   TypeScript (TS) Microsoft tarafından geliştirilmiştir.
*   Statik yazılım ve debug desteği sunmaktadır.
*   TS EcmaScript ve JavaScript'i kapsamaktadır.
*   TS kullanılmasının sebebi *derleme zamanı kontrolü* ve *ide desteği* olması, geliştiricinin *verimliliğini* ve *üretkenliğini* arttırır.
*   TS'den JS'ye dönüştürme yapılabilmektedir.
*   Bu dönüşüm işlemini tsc komutu ile yapılmaktadır.
*   Örneğin tsc mydemo.ts yazıldığında **mydemo.js** dosyası oluşmaktadır.
*   Derleme sebebimiz hatayı bulabilmektedir.
*   Düzenlemeleri TS'de yapılır.
- Türler ve aldıkları değerler ise;
    - boolean => true or false,
    - number => integer or floating point
    - string => text
    - any => anything 

*   Tanımlamalar **let** ile yapılır.
*   Örneğin; let found: boolean = true;
*   JS'de *var*, TS'de ise *let* kullanılır. 
-   var keyword'ünün kullanılmamasının sebebi;
    - Scoping, Capturing ve Shadowing sorunları olmasıdır.
*   Tanımlanan türden farklı değerler giremeyiz.
*   Any kullanılması tavsiye edilmez. Sebebi ise **type-safety olmamasıdır.**
*   Varsayılan JS dosyasını önlemek için tsc-noEmitOnError Flagi kullanılır.