#   Bölüm-10

*   Servislerimizi dependency inversion prensibine göre kullanmak istiyoruz. Bu yüzden class'ın başına *@Injectable* keywordü yazılmalıdır.
*   Servislerde *Observable* veri akış nesnelerini kullanırız.
*   Servisteki akışı bitirmek istediğimiz durumda ise *Subscribe* metodunu kullanırız.
*   Cross Origin web tabanlı işlemlerde geçerlidir.
*   CORS Policy üzerinde düzenlemeler yaparak farklı uygulamaların farklı originlerde olmasına ragmen haberlesmesini saglarız.
*   HttpClientModule deprecated. Bu sebeple providers kısmında provideHtppClient() kullanılmalıdır.
*   providers kısmına Servisimiz de yazılır.
*   RxJS çok kullanılan bir kütüphanedir.
*   Servislerde kullanılır.
*   ngOninit @PostConstruct 'a benzer. hook mekanizması vardır.
*   @CrossOrigin attribute ile farklı originlerden erişilebilir hale getiririz.
*   @CrossOrigin("") tırnaklar içerisine yazılacak originler'e erişim izni verir.
*   Origin protocol, hostname ve porttan oluşur. Bunlardan herhangi biri farklı olması durumunda CORS Policy'e takılır.
