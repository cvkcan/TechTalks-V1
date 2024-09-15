#   Bölüm - 35


*   Ödeme süreçlerinde Fraud, banka ile authorize olma, transaction sonucunu (başarılı ya da başarsızı) gösterme gibi bazı sorumluluklar vardır.
*   Stripe, Paypal, Iyzico gibi platformlarda ödeme sistemlerimizi kurabiliriz.
*   Stripe REST API sunmaktadır.
*   https://docs.stripe.com/ sitesinden developer dokumanına ulaşılabilir.
*   Stripe, online ödeme süreçlerinden fatura, tekrar ödemeler kullanabilir.
*   DevOps süreçlerinde PCI zorunludur.
*   PCI DSS (Payment Card Industry Data Security Standart). Hassas verilerin işlenmesi, sürdürülmesi, depolanması gibi işlemleri güvenli bir ortamda yapmamıza olanak tanır.
*   Firewall kullanılmalı, şifre güvenliği sağlanmalı, tutulan kart verileri korunmalı, işlemler şifrelenmeli, anti-virus yazılımları kullanılmalı ve bakımları yapılmalı, sistemler güncellenmeli, veriler kısıtlanmalı, eşsiz id'ler ile erişim sağlanmalı, sunuculara fiziksel olarak erişim getirilmeli, açıklar taranmalı ve test edilmeli, dokümanlar korunmalı.
*   Bütun bu işleri Stripe bizim yerimize yapmaktadır.
*   Hassas verileri ki kart bilgileri gibi asla kendi sunucunda tutmamalısın.
*   Stripe'da ödeme adımını yeni bir pencere açarak hazır bir şablon üzerinden alabilirken, kendimize göre özelleştirebileceğimiz formlar da yapabiliriz.
*   Stripe'da hazır bulunan form yapısnın kullanılmasında avantaj ve dezavantajları vardır.
*   Avantajları => daha az kod ile entegrasyonun yapılması, Stripe üzerinde işlemin dönmesi, markaya göre özelleştirme yapılması, PCI  uyumluluğu sağlar.
*   Dezavantajları => ayrı bir pençereye geçiş olacağından dolayı kullanıcı dostu değildir.
*   Özelleştirilmiş yapıda ise => Yeni bir pencere açılmaksızın Stripe Elemnts kullanılarak işlemler bizim arayüzümüzde gerçekleşir. Ama veriler Stripe'ta tutulur. PCI desteği mevcuttur.
*   iframe ile başka bir sunucudaki yapıyı entegre etmemizi sağlar.
*   Özelleştirilmiş formun da avantajları ve dezavantajları bulunmaktadır.
*   Avantajları => Yeni bir pencere açılmadan kullanıcı dostu bir arayüz ile entegrasyon sağlanır, kendi formumuzu kullanabiliriz, PCI desteği vardır, markaya göre özelleştirebiliriz, arayüz elementleri için Stripe Server kullanılır.
*   Dezavantajları => Özelleştirilecek bir forma ihtiyaç duyar, frontend ve backendde kod yükü getirmektedir.
*   Stripe'da key konsept bulunmakta ve bu PaymentIntent'tır.
*   PaymentIntent ödemenin bileşenlerini açıklar => Miktar, para birimi ve ödeme türü
*   Ödeme işlemi 3 aşamalıdır.
*   Angular'da ödeme butonunun tetiklenmesi ile süreç başlar. Backend'e Create PaymentIntent isteği gönderilir. Backend stripe'a istek atar. Oluşturulan PaymentIntent ki içerisinde client_secret mevcuttur backende, oradan da frontende yönlendirilir. Angular ödeme işleminin tamamlanması için stripe'a gider. İşlemin sonucu angular'a gelir. Burada başarılı ya da başarısız olma durumuna göre işleme devam edilir. Başarılı olması durumunda sipariş oluşturulur.
*   Amount'u int olarak tutmalarının sebebi para biriminin en düşük değerine göre ana parayı çarparlar. Örn 12.50 USD için 12.50 * 100 işlemi yapılır.
*   Secret Key backendde tanımlanırken, Published Key frontendde tanımlanır.
