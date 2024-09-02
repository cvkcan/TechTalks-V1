#   Bölüm - 12

*   Sayfanın belirli parçalarını güncelleyebiliriz.
*   Router => Yönlendirme servisimizdir.
*   Route => URL pathini mapleyen componenttir.
*   RouterOutlet => Rotaya göre componentleri render eder.
*   RouterLink => Uygulamadaki özel linkler.
*   ActivatedRoute => Route parametresine göre componenti yükler.
*   Path verirken / kullanmayız.
*   /:id'nin parametre olduğunu anlar.
*   redirectTo kısmında spesifik rota belirttiğimiz için / kullanılır.
*   Rotalar özelden genele doğru sıralanır ve yazılır.
*   Page ve Pageable sayfalamada kullanılır.
*   Page, liste türündeki nesnenin alt listesidir.
*   Pageable, sayfalama bilgilerini tutar. pageSize, previous, next gibi
*   '' ve '**' arasındaki fark, ilki path olmadan sadece url olduğu zaman çalışacak yapıyken, ikincisinde ise tanımlı olmayan url'lerde çalışmaktadır.
*   <router-outlet></router-outlet> ile render olunan componente göre gösterim sağlanacaktır.
*   component.ts içerisinde yazdığımız this.route.snapshot.paramMap.has('id'); alanındaki id değeri route kısmında parametreye verdiğimiz isimdir.
